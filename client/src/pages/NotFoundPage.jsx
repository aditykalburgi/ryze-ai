import React from 'react';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', color: '#4f46e5', margin: '0 0 1rem 0', fontWeight: 'bold' }}>404</h1>
        <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <a href="/" style={{
          display: 'inline-block',
          backgroundColor: '#4f46e5',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#4338ca'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4f46e5'}
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}