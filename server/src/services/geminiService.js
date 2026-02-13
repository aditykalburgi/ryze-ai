const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const mockUIGenerator = (prompt) => {
  // Fallback mock UI generator for when API quota is exceeded
  const keyword = prompt.toLowerCase();
  
  if (keyword.includes('login') || keyword.includes('form')) {
    return `import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <button style={{
          width: '100%',
          padding: '12px',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Sign In
        </button>
      </div>
    </div>
  );
}`;
  } else if (keyword.includes('dashboard') || keyword.includes('card')) {
    return `export default function App() {
  return (
    <div style={{
      padding: '20px',
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333' }}>Dashboard</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#667eea' }}>Card {i}</h3>
            <p style={{ color: '#666' }}>This is a sample card component</p>
            <button style={{
              padding: '8px 16px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Action
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`;
  } else {
    return `export default function App() {
  return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: 'white', fontSize: '2.5em' }}>✨ ${prompt}</h1>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em' }}>
        Beautiful UI generated for you
      </p>
      <button style={{
        marginTop: '20px',
        padding: '12px 30px',
        background: 'white',
        color: '#667eea',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  );
}`;
  }
};

const generateUICode = async (prompt) => {
  try {
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

    const response = message.choices[0].message.content;

    // Clean up response if it contains markdown code blocks
    let cleanedCode = response
      .replace(/```jsx\n?/g, '')
      .replace(/```tsx\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    return cleanedCode;
  } catch (error) {
    console.error('Groq API error:', error.message);
    console.log('Using fallback UI generator...');
    
    // Use mock generator as fallback
    return mockUIGenerator(prompt);
  }
};

module.exports = { generateUICode };
