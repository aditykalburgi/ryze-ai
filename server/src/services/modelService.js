require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const Groq = require('groq-sdk');

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Available models
const AVAILABLE_MODELS = {
  groq: {
    name: 'Groq (Mixtral)',
    provider: 'groq',
    model: 'mixtral-8x7b-32768',
    free: true,
    speed: 'Very Fast',
  },
  // Can add more models here
  // openai: {
  //   name: 'OpenAI (GPT-4)',
  //   provider: 'openai',
  //   model: 'gpt-4',
  //   free: false,
  //   speed: 'Fast',
  // },
};

console.log('📦 Available Models:', Object.keys(AVAILABLE_MODELS));
console.log('✓ Groq API Key loaded:', process.env.GROQ_API_KEY ? 'Yes' : 'No');

/**
 * Call Groq API
 */
async function callGroqAPI(prompt) {
  console.log('🚀 Calling Groq API...');
  
  const message = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are an expert React UI developer. Generate clean, modern React component code based on user prompts. 
        The code should:
        - Be a single default export React component
        - Use inline styles or CSS-in-JS
        - Be production-ready and visually appealing
        - Handle responsive design
        - Not import external UI libraries unless necessary
        
        Return ONLY the JSX code, no markdown formatting or explanations.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    model: 'mixtral-8x7b-32768',
    temperature: 0.7,
    max_tokens: 2000,
  });

  if (!message || !message.choices || !message.choices[0] || !message.choices[0].message) {
    throw new Error('Invalid response from Groq API');
  }

  return message.choices[0].message.content;
}

/**
 * Generate UI code using selected model
 */
async function generateUICode(prompt, modelId = 'groq') {
  try {
    const model = AVAILABLE_MODELS[modelId];
    
    if (!model) {
      console.error(`❌ Model not found: ${modelId}`);
      throw new Error(`Model ${modelId} not available`);
    }

    console.log(`Using model: ${model.name}`);

    let response;

    if (modelId === 'groq') {
      response = await callGroqAPI(prompt);
    } else {
      throw new Error(`Model ${modelId} not implemented`);
    }

    // Clean up response
    let cleanedCode = response
      .replace(/```jsx\n?/g, '')
      .replace(/```tsx\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    console.log('✅ Successfully generated code');
    return cleanedCode;
  } catch (error) {
    console.error(`❌ Error with ${modelId}:`, error.message);
    throw error;
  }
}

/**
 * Get list of available models
 */
function getAvailableModels() {
  return Object.entries(AVAILABLE_MODELS).map(([id, model]) => ({
    id,
    ...model,
  }));
}

module.exports = {
  generateUICode,
  getAvailableModels,
  AVAILABLE_MODELS,
};
