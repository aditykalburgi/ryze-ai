const express = require('express');
const router = express.Router();
const { generateUI, getModels } = require('../controllers/uiController');

// POST /api/generate - Generate UI code from prompt
router.post('/generate', generateUI);

// GET /api/models - Get available AI models
router.get('/models', getModels);

module.exports = router;
