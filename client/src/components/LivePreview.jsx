import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

export default function LivePreview({ code }) {
  return (
    <Sandpack
      template="react"
      files={{
        '/App.js': code
      }}
      options={{ showNavigator: false, showTabs: false }}
    />
  );
}
