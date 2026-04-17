const User = require('../models/User');
const Referral = require('../models/Referral');
const crypto = require('crypto');

// Generate unique referral code
const generateReferralCode = () => {
  return `REF-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;
};

// Get or create referral code for user
exports.getOrCreateReferralCode = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // If user doesn't have a referral code, generate one
    if (!user.referralCode) {
      user.referralCode = generateReferralCode();
      await user.save();
    }

    res.json({
      success: true,
      referralCode: user.referralCode,
      referralLink: `${process.env.CLIENT_URL}?ref=${user.referralCode}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user's referral statistics
exports.getMyReferrals = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Ensure user has a referral code
    if (!user.referralCode) {
      user.referralCode = generateReferralCode();
      await user.save();
    }

    const referrals = await Referral.find({ referrer: userId })
      .populate('referee', 'name email')
      .sort({ createdAt: -1 });

    const statistics = {
      totalReferrals: user.totalReferrals,
      activeReferrals: user.activeReferrals,
      completedReferrals: user.completedReferrals,
      totalCommission: user.totalCommission,
      pendingCommission: user.pendingCommission,
      referralTier: user.referralTier,
      thisMonth: user.referralStats?.thisMonth || 0,
      thisYear: user.referralStats?.thisYear || 0,
    };

    res.json({
      success: true,
      referralCode: user.referralCode,
      referralLink: `${process.env.CLIENT_URL}?ref=${user.referralCode}`,
      statistics,
      referrals,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new referral
exports.createReferral = async (req, res) => {
  try {
    const { refereeEmail } = req.body;
    const referrerId = req.user.id;

    if (!refereeEmail) {
      return res.status(400).json({ success: false, message: 'Referee email is required' });
    }

    // Find or create referee user
    let referee = await User.findOne({ email: refereeEmail });
    
    if (!referee) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found. They need to register first.' 
      });
    }

    if (referee._id.toString() === referrerId) {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot refer yourself' 
      });
    }

    // Check if already referred
    const existingReferral = await Referral.findOne({ 
      referrer: referrerId, 
      referee: referee._id 
    });

    if (existingReferral) {
      return res.status(400).json({ 
        success: false, 
        message: 'This user has already been referred by you' 
      });
    }

    // Create referral
    const referralCode = generateReferralCode();
    const newReferral = await Referral.create({
      referrer: referrerId,
      referee: referee._id,
      referralCode,
      status: 'pending',
    });

    // Update referrer stats
    const referrer = await User.findById(referrerId);
    referrer.totalReferrals += 1;
    referrer.activeReferrals += 1;
    await referrer.save();

    res.json({
      success: true,
      message: 'Referral created successfully',
      referral: newReferral,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Process referral when referee completes first order
exports.processReferralCompletion = async (req, res) => {
  try {
    const { referralCode, orderId, orderAmount } = req.body;

    if (!referralCode || !orderId || !orderAmount) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    const referral = await Referral.findOne({ referralCode });

    if (!referral) {
      return res.status(404).json({ success: false, message: 'Referral not found' });
    }

    if (referral.status === 'completed') {
      return res.status(400).json({ 
        success: false, 
        message: 'This referral is already completed' 
      });
    }

    // Calculate commission based on tier
    const referrer = await User.findById(referral.referrer);
    const commissionPercentage = referral.commissionPercentage;
    const commissionEarned = (orderAmount * commissionPercentage) / 100;

    // Update referral
    referral.status = 'completed';
    referral.referralOrderId = orderId;
    referral.referralOrderAmount = orderAmount;
    referral.commissionEarned = commissionEarned;
    referral.completedAt = new Date();
    await referral.save();

    // Update referrer stats
    referrer.completedReferrals += 1;
    referrer.activeReferrals = Math.max(0, referrer.activeReferrals - 1);
    referrer.totalCommission += commissionEarned;
    referrer.pendingCommission += commissionEarned;

    // Update tier based on completed referrals
    if (referrer.completedReferrals >= 10) {
      referrer.referralTier = 'platinum';
    } else if (referrer.completedReferrals >= 6) {
      referrer.referralTier = 'gold';
    } else if (referrer.completedReferrals >= 3) {
      referrer.referralTier = 'silver';
    }

    // Update stats
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    
    referrer.referralStats = referrer.referralStats || {};
    referrer.referralStats.allTime = (referrer.referralStats.allTime || 0) + 1;

    await referrer.save();

    res.json({
      success: true,
      message: 'Referral completed successfully',
      commissionEarned,
      newTier: referrer.referralTier,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get referral by code
exports.getReferralByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const referral = await Referral.findOne({ referralCode: code })
      .populate('referrer', 'name company');

    if (!referral) {
      return res.status(404).json({ success: false, message: 'Referral not found' });
    }

    res.json({
      success: true,
      referral,
      referrerInfo: {
        name: referral.referrer.name,
        company: referral.referrer.company,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get referral leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find({ 
      totalReferrals: { $gt: 0 } 
    })
      .select('name company totalReferrals completedReferrals totalCommission referralTier')
      .sort({ completedReferrals: -1 })
      .limit(50);

    res.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: Get all referrals
exports.getAllReferrals = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    const referrals = await Referral.find()
      .populate('referrer', 'name email')
      .populate('referee', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      referrals,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Check referral usage
exports.checkReferralCode = async (req, res) => {
  try {
    const { code } = req.params;

    const referral = await Referral.findOne({ referralCode: code });

    if (!referral) {
      return res.status(404).json({ success: false, message: 'Invalid referral code' });
    }

    res.json({
      success: true,
      referral,
      isValid: referral.status !== 'cancelled',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
