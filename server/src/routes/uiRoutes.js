const express = require('express');
const router = express.Router();
const { generateUI } = require('../controllers/uiController');

// POST /api/generate - Generate UI code from prompt
router.post('/generate', generateUI);

module.exports = router;
