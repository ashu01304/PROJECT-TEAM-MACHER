const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  start_date: Date,
  end_date: Date,
  status: String,
  team_size: Number,
  difficulty_level: String,
  required_roles: [String],
  is_active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Project', projectSchema);
