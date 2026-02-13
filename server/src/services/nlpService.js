const nlp = require('compromise');

// Color patterns
const COLOR_PATTERNS = {
  blue: '#3b82f6',
  red: '#ef4444',
  green: '#10b981',
  yellow: '#fbbf24',
  purple: '#a855f7',
  pink: '#ec4899',
  orange: '#f97316',
  gray: '#6b7280',
  black: '#000000',
  white: '#ffffff',
  indigo: '#6366f1',
  teal: '#14b8a6',
};

// Component types
const COMPONENT_TYPES = [
  'button', 'form', 'input', 'navbar', 'header', 'footer',
  'card', 'dashboard', 'login', 'signup', 'modal', 'dialog',
  'dropdown', 'menu', 'table', 'list', 'grid', 'gallery',
  'accordion', 'tabs', 'slider', 'carousel', 'badge', 'alert',
];

// Size patterns
const SIZE_PATTERNS = ['small', 'medium', 'large', 'extra large', 'tiny', 'huge'];

// Effect patterns
const EFFECTS = ['shadow', 'glow', 'rounded', 'flat', 'gradient', 'hover'];

/**
 * Extract component type from user prompt
 */
function extractComponentType(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  for (const type of COMPONENT_TYPES) {
    if (lowerPrompt.includes(type)) {
      return type;
    }
  }
  return null;
}

/**
 * Extract colors from user prompt
 */
function extractColors(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  const colors = [];

  Object.keys(COLOR_PATTERNS).forEach(colorName => {
    if (lowerPrompt.includes(colorName)) {
      colors.push(colorName);
    }
  });

  return colors.length > 0 ? colors : null;
}

/**
 * Extract size information
 */
function extractSize(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  for (const size of SIZE_PATTERNS) {
    if (lowerPrompt.includes(size)) {
      return size;
    }
  }
  return null;
}

/**
 * Extract effects
 */
function extractEffects(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  const effects = [];

  EFFECTS.forEach(effect => {
    if (lowerPrompt.includes(effect)) {
      effects.push(effect);
    }
  });

  return effects.length > 0 ? effects : null;
}

/**
 * Extract text/labels
 */
function extractText(prompt) {
  const textMatch = prompt.match(/(button|label|text|says?|named?|with text)\s+["']([^"']+)["']/i);
  if (textMatch) {
    return textMatch[2];
  }
  return null;
}

/**
 * Enhance prompt with extracted details
 */
function enhancePrompt(prompt) {
  console.log('🔍 NLP Processing:', prompt);

  const componentType = extractComponentType(prompt);
  const colors = extractColors(prompt);
  const size = extractSize(prompt);
  const effects = extractEffects(prompt);
  const text = extractText(prompt);

  let enhancedPrompt = prompt;

  if (componentType) {
    enhancedPrompt += ` This is a ${componentType} component.`;
    console.log(`✓ Component type detected: ${componentType}`);
  }

  if (colors && colors.length > 0) {
    enhancedPrompt += ` Use colors: ${colors.join(', ')}.`;
    console.log(`✓ Colors detected: ${colors.join(', ')}`);
  }

  if (size) {
    enhancedPrompt += ` Make it ${size}.`;
    console.log(`✓ Size detected: ${size}`);
  }

  if (effects && effects.length > 0) {
    enhancedPrompt += ` Add visual effects: ${effects.join(', ')}.`;
    console.log(`✓ Effects detected: ${effects.join(', ')}`);
  }

  if (text) {
    enhancedPrompt += ` Use this text: "${text}".`;
    console.log(`✓ Text detected: ${text}`);
  }

  console.log('✅ Enhanced prompt ready for Groq API');
  return enhancedPrompt;
}

module.exports = {
  enhancePrompt,
};
