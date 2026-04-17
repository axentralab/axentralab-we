const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6, select: false },
  role:     { type: String, enum: ['client', 'admin'], default: 'client' },
  company:  { type: String, default: '' },
  phone:    { type: String, default: '' },
  avatar:   { type: String, default: '' },
  stripeCustomerId: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  // Referral System Fields
  referralCode: { type: String, unique: true, sparse: true },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  referralTier: { type: String, enum: ['bronze', 'silver', 'gold', 'platinum'], default: 'bronze' },
  totalReferrals: { type: Number, default: 0 },
  activeReferrals: { type: Number, default: 0 },
  completedReferrals: { type: Number, default: 0 },
  totalCommission: { type: Number, default: 0 },
  pendingCommission: { type: Number, default: 0 },
  referralStats: {
    thisMonth: { type: Number, default: 0 },
    thisYear: { type: Number, default: 0 },
    allTime: { type: Number, default: 0 },
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

module.exports = mongoose.model('User', userSchema);
