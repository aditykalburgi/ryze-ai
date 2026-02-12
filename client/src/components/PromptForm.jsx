import React, { useState } from 'react';

export default function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(prompt); }}>
      <input
        type="text"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe your UI..."
      />
      <button type="submit">Generate</button>
    </form>
  );
}
