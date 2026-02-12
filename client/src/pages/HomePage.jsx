import React from 'react';
import Header from '../components/Header';
import PromptForm from '../components/PromptForm';
import CodeEditor from '../components/CodeEditor';
import LivePreview from '../components/LivePreview';
import VersionHistory from '../components/VersionHistory';

export default function HomePage() {
  const [code, setCode] = React.useState(`export default function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2>Welcome to AI UI Generator</h2>
      <p>Start by describing your UI above to get started!</p>
    </div>
  );
}`);
  const [versions, setVersions] = React.useState([]);

  const handlePrompt = (prompt) => {
    const generated = `export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>✨ ${prompt}</h1>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <p>This component was generated from your prompt!</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' }}>
          Get Started
        </button>
      </div>
    </div>
  );
}`;
    setCode(generated);
    setVersions([{ code: generated, createdAt: new Date() }, ...versions]);
  };

  const handleSelectVersion = (v) => {
    setCode(v.code);
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>AI UI Generator</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>Generate modern, beautiful React UI components from natural language descriptions powered by AI</p>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Left Column - Input & Editor */}
          <div style={{ flex: '2 1 600px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h2 style={{ marginTop: 0, color: '#1f2937' }}>Create Your UI</h2>
              <PromptForm onSubmit={handlePrompt} />
              <CodeEditor code={code} onChange={setCode} />
              <LivePreview code={code} />
            </div>
          </div>

          {/* Right Column - Version History */}
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h2 style={{ marginTop: 0, color: '#1f2937' }}>Version History</h2>
              <VersionHistory versions={versions} onSelect={handleSelectVersion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}