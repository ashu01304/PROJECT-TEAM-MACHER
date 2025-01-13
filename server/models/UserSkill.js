const mongoose = require('mongoose');

const userSkillSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill_name: String,
  proficiency: Number,
  certifications: [String],
  projects: [String]
});

module.exports = mongoose.model('UserSkill', userSkillSchema);
