const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Create team
router.post('/', async (req, res) => {
  const { project_id, team_name, max_size } = req.body;

  const newTeam = new Team({
    project_id,
    team_name,
    max_size
  });

  await newTeam.save();
  res.status(201).json(newTeam);
});

// Get team by ID
router.get('/:id', async (req, res) => {
  const team = await Team.findById(req.params.id).populate('project_id');
  if (!team) return res.status(404).json({ message: 'Team not found' });
  res.json(team);
});

module.exports = router;
