require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const Groq = require('groq-sdk');

console.log('Groq API Key loaded:', process.env.GROQ_API_KEY ? '✓ Yes' : '✗ No');
console.log('API Key starts with:', process.env.GROQ_API_KEY?.substring(0, 10) + '...');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
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
  } else if (keyword.includes('button')) {
    return `import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gap: '20px',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: 'white', marginBottom: '30px' }}>Interactive Button</h1>
      <button style={{
        padding: '12px 30px',
        background: '#fff',
        color: '#667eea',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
      }}
      onClick={() => setCount(count + 1)}>
        Click Me! (Clicks: {count})
      </button>
      <button style={{
        padding: '10px 20px',
        background: 'rgba(255, 255, 255, 0.2)',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
      }}>
        Secondary Button
      </button>
    </div>
  );
}`;
  } else if (keyword.includes('header') || keyword.includes('navbar') || keyword.includes('nav')) {
    const isPurple = keyword.includes('purple');
    const hasShadow = keyword.includes('shadow') || keyword.includes('glow');
    
    const navColor = isPurple ? '#a855f7' : '#667eea';
    const shadowStyle = hasShadow ? '0 10px 25px rgba(0, 0, 0, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.1)';
    
    return `import React from 'react';

export default function App() {
  return (
    <div>
      <div style={{
        background: '${navColor}',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '${shadowStyle}',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h2 style={{ color: 'white', margin: 0, fontSize: '24px', fontWeight: '700' }}>
          🎨 Logo
        </h2>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            Home
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            About
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            Services
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            Contact
          </a>
        </nav>
        <button style={{
          padding: '10px 20px',
          background: 'white',
          color: '${navColor}',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
          Login
        </button>
      </div>
      <div style={{ padding: '40px', textAlign: 'center', background: '#f5f5f5', minHeight: '100vh' }}>
        <h1>Welcome to Your Website</h1>
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
    if (!process.env.GROQ_API_KEY) {
      console.error('❌ GROQ_API_KEY not found in environment variables');
      return mockUIGenerator(prompt);
    }

    console.log('🚀 Calling Groq API with prompt:', prompt.substring(0, 50) + '...');
    
    const message = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an expert React UI developer. Generate clean, modern React component code based on user prompts. The code should: Be a single default export React component, use inline styles or CSS-in-JS, be production-ready and visually appealing, handle responsive design, and not import external UI libraries unless necessary. Return ONLY the JSX code, no markdown formatting or explanations.`
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
      console.error('❌ Invalid response from Groq API');
      return mockUIGenerator(prompt);
    }

    const response = message.choices[0].message.content;

    // Clean up response if it contains markdown code blocks
    let cleanedCode = response
      .replace(/```jsx\n?/g, '')
      .replace(/```tsx\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    console.log('✅ Successfully generated code from Groq API');
    return cleanedCode;
  } catch (error) {
    console.error('❌ Groq API error:', error.message);
    console.error('Error details:', error);
    console.log('📦 Using fallback UI generator...');
    
    // Use mock generator as fallback
    return mockUIGenerator(prompt);
  }
};

module.exports = { generateUICode };
