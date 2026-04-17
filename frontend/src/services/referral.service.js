import api from './api';

const referralService = {
  // Get or create referral code for current user
  getOrCreateReferralCode: async () => {
    const response = await api.get('/referrals/code');
    return response.data;
  },

  // Get my referrals and statistics
  getMyReferrals: async () => {
    const response = await api.get('/referrals/my-referrals');
    return response.data;
  },

  // Create a new referral by inviting someone
  createReferral: async (refereeEmail) => {
    const response = await api.post('/referrals/create-referral', {
      refereeEmail,
    });
    return response.data;
  },

  // Process referral completion
  processReferralCompletion: async (referralCode, orderId, orderAmount) => {
    const response = await api.post('/referrals/complete', {
      referralCode,
      orderId,
      orderAmount,
    });
    return response.data;
  },

  // Get referral by code
  getReferralByCode: async (code) => {
    const response = await api.get(`/referrals/info/${code}`);
    return response.data;
  },

  // Get referral leaderboard
  getLeaderboard: async () => {
    const response = await api.get('/referrals/leaderboard');
    return response.data;
  },

  // Check if referral code is valid
  checkReferralCode: async (code) => {
    const response = await api.get(`/referrals/check/${code}`);
    return response.data;
  },

  // Admin: Get all referrals
  getAllReferrals: async () => {
    const response = await api.get('/referrals/admin/all');
    return response.data;
  },
};

export default referralService;
