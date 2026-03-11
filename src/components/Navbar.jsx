import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(2, 2, 8, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="section-container" style={{ padding: '20px 24px', maxWidth: '1400px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                TECH
              </span>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--accent-1)',
                borderRadius: '50%',
                boxShadow: '0 0 20px var(--accent-1)',
              }} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--accent-1)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  position: 'relative',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-1)'}
                onMouseOut={(e) => e.target.style.color = location.pathname === link.path ? 'var(--accent-1)' : 'var(--text-secondary)'}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--accent-1)',
                    borderRadius: '2px',
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn-primary" style={{ display: 'none', md: 'block' }}>
            Start a Project →
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '24px',
              cursor: 'pointer',
            }}
            className="mobile-only"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--primary-bg)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                fontSize: '24px',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary" style={{ marginTop: '20px' }}>
            Start a Project →
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
