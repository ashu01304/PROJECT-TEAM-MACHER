const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Create project
router.post('/', async (req, res) => {
  const { title, description, team_size, required_roles } = req.body;

  const newProject = new Project({
    title,
    description,
    team_size,
    required_roles,
    creator_id: req.body.creator_id
  });

  await newProject.save();
  res.status(201).json(newProject);
});

// Get project by ID
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
});

module.exports = router;
