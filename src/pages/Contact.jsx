import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you! We\'ll get back to you within 2 hours.')
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        padding: '100px 24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Let's Build Something<br />
            <span className="gradient-text">Extraordinary</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            Have a project in mind? We'd love to hear from you.
            Free consultation. No commitment.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Contact Form */}
          <div>
            <h2 style={{
              fontFamily: 'Clash Display',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              marginBottom: '24px',
            }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '16px',
                    resize: 'vertical',
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '16px' }}>
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{
              fontFamily: 'Clash Display',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              marginBottom: '24px',
            }}>
              Get in Touch
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}>
              We're available worldwide across all timezones. 
              Expect a response within 2 hours during business days.
            </p>

            <div style={{ display: 'grid', gap: '24px', marginBottom: '40px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'hello@sovereigntech.io' },
                { icon: '💬', label: 'WhatsApp', value: '+91-XXX-XXX-XXXX' },
                { icon: '📍', label: 'Headquarters', value: 'Bangalore, India' },
                { icon: '🕐', label: 'Availability', value: 'EST / GMT / IST - 24/7' },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div style={{ fontSize: '32px' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-accent)', marginBottom: '4px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendly Integration */}
            <div className="card-3d" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                Schedule a Call
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
              }}>
                Book a free 30-minute consultation call directly on our calendar.
              </p>
              <button className="btn-primary" style={{ width: '100%' }}>
                Book on Calendly →
              </button>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['LinkedIn', 'GitHub', 'Twitter', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      padding: '12px 20px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.borderColor = 'var(--accent-1)'
                      e.target.style.color = 'var(--accent-1)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.color = 'var(--text-primary)'
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Global Presence */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '80px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="section-container" style={{ maxWidth: '1200px', padding: 0 }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            Serving Clients Globally
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}>
            {[
              { region: 'North America', clients: '20+' },
              { region: 'Europe', clients: '15+' },
              { region: 'Asia Pacific', clients: '10+' },
              { region: 'Middle East', clients: '5+' },
            ].map((region, index) => (
              <div key={index}>
                <div className="gradient-text" style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>
                  {region.clients}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{region.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
