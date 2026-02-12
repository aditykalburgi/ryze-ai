import React from 'react';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f2937', marginBottom: '1rem' }}>About AI UI Generator</h1>
        
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h2 style={{ color: '#4f46e5', marginTop: 0 }}>What We Do</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4b5563' }}>
            AI UI Generator transforms natural language descriptions into fully functional React UI components. Simply describe what you want, and our advanced AI will generate clean, modern, and production-ready code.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h2 style={{ color: '#4f46e5', marginTop: 0 }}>Key Features</h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
            <li>⚡ Instant UI Generation - Describe and generate UI in seconds</li>
            <li>🎨 Modern Design - Beautiful, responsive components out of the box</li>
            <li>💾 Version Control - Keep track of all your generated components</li>
            <li>🚀 Production Ready - Export and deploy with confidence</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#eef2ff', borderRadius: '12px', padding: '2rem', borderLeft: '4px solid #4f46e5' }}>
          <h2 style={{ color: '#4f46e5', marginTop: 0 }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4b5563' }}>
            We believe in democratizing UI design and development. By leveraging AI, we make it possible for anyone to create professional-grade user interfaces without deep technical expertise.
          </p>
        </div>
      </div>
    </div>
  );
}