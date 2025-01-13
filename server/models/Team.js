const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  team_name: String,
  formed_date: Date,
  status: String,
  current_size: { type: Number, default: 0 },
  max_size: Number
});

module.exports = mongoose.model('Team', teamSchema);
