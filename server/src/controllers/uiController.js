const { generateUICode: generateWithGroq } = require('../services/geminiService');
const { generateUICode, getAvailableModels } = require('../services/modelService');
const { enhancePrompt } = require('../services/nlpService');

const generateUI = async (req, res) => {
  try {
    const { prompt, model = 'groq' } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Prompt is required and must be a non-empty string' });
    }

    console.log(`📝 Request - Prompt: ${prompt.substring(0, 50)}... | Model: ${model}`);

    // Use NLP to enhance the prompt
    const enhancedPrompt = enhancePrompt(prompt);

    // Generate code with selected model
    const generatedCode = await generateUICode(enhancedPrompt, model);
    
    res.json({ 
      success: true, 
      code: generatedCode,
      model: model,
      prompt: prompt,
    });
  } catch (error) {
    console.error('❌ UI generation error:', error.message);
    res.status(500).json({ error: 'Failed to generate UI', details: error.message });
  }
};

/**
 * Get available models
 */
const getModels = (req, res) => {
  try {
    const models = getAvailableModels();
    res.json({ success: true, models });
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
};

module.exports = { generateUI, getModels };
