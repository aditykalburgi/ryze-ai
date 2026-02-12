const mongoose = require('mongoose');

const versionHistorySchema = new mongoose.Schema({
  uiCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  meta: { type: Object },
});

module.exports = mongoose.model('VersionHistory', versionHistorySchema);
