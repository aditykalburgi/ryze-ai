import React from 'react';
import MonacoEditor from '@monaco-editor/react';

export default function CodeEditor({ code, onChange }) {
  return (
    <MonacoEditor
      height="300px"
      defaultLanguage="javascript"
      value={code}
      onChange={onChange}
      options={{ minimap: { enabled: false } }}
    />
  );
}
