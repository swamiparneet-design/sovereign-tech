import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--secondary-bg)',
      borderTop: '1px solid var(--border)',
      padding: '80px 24px 40px',
      marginTop: '100px',
    }}>
      <div className="section-container" style={{ maxWidth: '1400px', padding: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ 
                fontFamily: 'Clash Display', 
                fontSize: '28px', 
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}>
                SOVEREIGN
              </span>
              <span style={{ 
                fontFamily: 'Clash Display', 
                fontSize: '28px', 
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {' '}TECH
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Intelligence. Engineered. Sovereign.
              <br />
              Building autonomous AI systems that run 100% locally.
            </p>
            <div style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-accent)' }}>
              🌍 Serving clients globally since 2025
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-1)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-primary)' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Sovereign AI OS', 'Custom AI Agents', 'SaaS Development', 'Legacy Automation'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link 
                    to="/services"
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-1)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px', color: 'var(--text-primary)' }}>
              Stay Updated
            </h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Get AI insights weekly. No spam.
            </p>
            <form style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
              <button className="btn-primary" style={{ padding: '12px 20px' }}>
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            © {currentYear} Sovereign Tech. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</Link>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['LinkedIn', 'GitHub', 'Twitter', 'WhatsApp'].map((social) => (
              <a
                key={social}
                href="#"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-1)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
