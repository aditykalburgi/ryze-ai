import React from 'react';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f2937', marginBottom: '1rem', textAlign: 'center' }}>Get In Touch</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Contact Info */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#4f46e5', marginTop: 0 }}>Contact Information</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', margin: '0.5rem 0' }}><strong>Email:</strong></p>
              <p style={{ color: '#667eea', margin: '0' }}>support@ryze.ai</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', margin: '0.5rem 0' }}><strong>Follow Us:</strong></p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '1rem' }}>GitHub</a>
                <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '1rem' }}>LinkedIn</a>
                <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '1rem' }}>Twitter</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#4f46e5', marginTop: 0 }}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box', fontFamily: 'inherit' }}
                required
              />
              <button
                type="submit"
                style={{ width: '100%', padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Send Message
              </button>
              {submitted && <p style={{ color: '#10b981', marginTop: '1rem', textAlign: 'center' }}>✓ Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}