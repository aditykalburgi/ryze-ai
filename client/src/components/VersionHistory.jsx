import React from 'react';

export default function VersionHistory({ versions, onSelect }) {
  return (
    <div>
      <h3>Version History</h3>
      <ul>
        {versions.map((v, i) => (
          <li key={i}>
            <button onClick={() => onSelect(v)}>
              {v.createdAt ? new Date(v.createdAt).toLocaleString() : `Version ${i+1}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
