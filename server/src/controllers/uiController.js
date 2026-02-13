const { generateUICode } = require('../services/geminiService');

const generateUI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Prompt is required and must be a non-empty string' });
    }

    const generatedCode = await generateUICode(prompt);
    res.json({ success: true, code: generatedCode });
  } catch (error) {
    console.error('UI generation error:', error);
    res.status(500).json({ error: 'Failed to generate UI', details: error.message });
  }
};

module.exports = { generateUI };
