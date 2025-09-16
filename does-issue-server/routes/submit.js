const express = require('express');
const router = express.Router();
const { createIssue } = require('../utils/github');

router.post('/submit', async (req, res) => {
  try {
    const result = await createIssue(req.body);
    res.status(200).json({ message: 'Issue created!', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create issue' });
  }
});

module.exports = router;
