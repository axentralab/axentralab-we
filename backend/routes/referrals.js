const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getOrCreateReferralCode,
  getMyReferrals,
  createReferral,
  processReferralCompletion,
  getReferralByCode,
  getLeaderboard,
  getAllReferrals,
  checkReferralCode,
} = require('../controllers/referralController');

// Public routes
router.get('/leaderboard', getLeaderboard);
router.get('/check/:code', checkReferralCode);
router.get('/info/:code', getReferralByCode);

// Protected routes
router.get('/code', protect, getOrCreateReferralCode);
router.get('/my-referrals', protect, getMyReferrals);
router.post('/create-referral', protect, createReferral);
router.post('/complete', protect, processReferralCompletion);

// Admin routes
router.get('/admin/all', protect, getAllReferrals);

module.exports = router;
