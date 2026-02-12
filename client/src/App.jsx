import React, { useState } from 'react';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import CodeEditor from './components/CodeEditor';
import LivePreview from './components/LivePreview';
import VersionHistory from './components/VersionHistory';

export default function App() {
  const [code, setCode] = useState('// Generated code will appear here');
  const [versions, setVersions] = useState([]);

  const handlePrompt = (prompt) => {
    // Simulate code generation and versioning
    const generated = `// UI for: ${prompt}\nexport default function App() {\n  return <div>${prompt}</div>;\n}`;
    setCode(generated);
    setVersions([{ code: generated, createdAt: new Date() }, ...versions]);
  };

  const handleSelectVersion = (v) => {
    setCode(v.code);
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
        <div style={{ flex: 2 }}>
          <PromptForm onSubmit={handlePrompt} />
          <CodeEditor code={code} onChange={setCode} />
          <LivePreview code={code} />
        </div>
        <div style={{ flex: 1 }}>
          <VersionHistory versions={versions} onSelect={handleSelectVersion} />
        </div>
      </div>
    </div>
  );
}
