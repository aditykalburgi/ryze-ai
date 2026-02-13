import React from 'react';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aditykalburgi',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-kalburgi-080b5b267/',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: '#0077b5'
    },
    {
      name: 'Portfolio',
      url: 'https://portfolio-zeta-two-0s3z3wko1s.vercel.app/',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      color: '#8b5cf6'
    }
  ];

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      value: 'contact@ryzeai.com',
      description: 'Send us an email anytime'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Location',
      value: 'Bangalore, India',
      description: 'Visit us in person'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Phone',
      value: '+91 XXX XXX XXXX',
      description: 'Available Mon-Fri, 9AM-6PM'
    }
  ];

  return (
    <div style={styles.page}>
      <Header />

      {/* Animated Background */}
      <div style={styles.backgroundAnimation}>
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
      </div>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>Let's Connect</span>
          </div>
          
          <h1 style={styles.title}>
            Get In <span style={styles.gradientText}>Touch</span>
          </h1>
          
          <p style={styles.subtitle}>
            Have a question or want to collaborate? We'd love to hear from you.
            Drop us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <div style={styles.formCard}>
            <h2 style={styles.cardTitle}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  style={{...styles.input, ...styles.textarea}}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" style={styles.submitButton}>
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div style={styles.sidebar}>
            {/* Contact Methods */}
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Contact Information</h3>
              {contactMethods.map((method, index) => (
                <div key={index} style={styles.contactMethod}>
                  <div style={styles.methodIcon}>{method.icon}</div>
                  <div style={styles.methodContent}>
                    <div style={styles.methodTitle}>{method.title}</div>
                    <div style={styles.methodValue}>{method.value}</div>
                    <div style={styles.methodDescription}>{method.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={styles.socialCard}>
              <h3 style={styles.socialTitle}>Follow & Connect</h3>
              <p style={styles.socialSubtitle}>
                Stay updated with our latest projects and insights
              </p>
              <div style={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.socialLink,
                      animationDelay: `${index * 0.1}s`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    <div style={styles.socialIcon}>{social.icon}</div>
                    <span style={styles.socialName}>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div style={styles.responseCard}>
              <div style={styles.responseIcon}></div>
              <h4 style={styles.responseTitle}>Quick Response</h4>
              <p style={styles.responseText}>
                We typically respond within 24 hours on business days
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{keyframes}</style>
    </div>
  );
}

/* ---------- KEYFRAMES ---------- */
const keyframes = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

/* ---------- STYLES ---------- */
const styles = {
  page: {
    background: '#0a0a0f',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundAnimation: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  },

  gradientOrb1: {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 20s ease-in-out infinite',
    filter: 'blur(60px)',
  },

  gradientOrb2: {
    position: 'absolute',
    bottom: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 25s ease-in-out infinite reverse',
    filter: 'blur(60px)',
  },

  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
  },

  hero: {
    textAlign: 'center',
    marginBottom: '4rem',
    animation: 'fadeInUp 0.8s ease-out',
  },

  badge: {
    display: 'inline-block',
    padding: '8px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    marginBottom: '1.5rem',
  },

  badgeText: {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#e0e7ff',
    letterSpacing: '0.5px',
  },

  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },

  gradientText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },

  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '2rem',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
    },
  },

  formCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    animation: 'slideInLeft 0.8s ease-out',
  },

  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '2rem',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  label: {
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#e0e7ff',
  },

  input: {
    padding: '0.875rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },

  textarea: {
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
  },

  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 24px rgba(99, 102, 241, 0.3)',
    marginTop: '0.5rem',
  },

  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    animation: 'slideInRight 0.8s ease-out',
  },

  infoCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },

  infoTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1.5rem',
  },

  contactMethod: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },

  methodIcon: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '12px',
    color: '#818cf8',
    flexShrink: 0,
  },

  methodContent: {
    flex: 1,
  },

  methodTitle: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#a5b4fc',
    marginBottom: '0.25rem',
  },

  methodValue: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#e0e7ff',
    marginBottom: '0.25rem',
  },

  methodDescription: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.5)',
  },

  socialCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },

  socialTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },

  socialSubtitle: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '1.5rem',
  },

  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },

  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    color: '#e0e7ff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    animation: 'fadeInUp 0.6s ease-out backwards',
  },

  socialIcon: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
  },

  socialName: {
    fontSize: '1rem',
    fontWeight: '600',
  },

  responseCard: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
  },

  responseIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },

  responseTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },

  responseText: {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.6',
  },
};