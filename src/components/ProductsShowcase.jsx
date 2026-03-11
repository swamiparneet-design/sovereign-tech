import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const products = [
    {
      name: 'HindiWriter AI',
      tagline: 'Content in Hindi+English. Zero effort.',
      description: 'AI-powered blog & content generator specifically for Indian market',
      features: ['800+ articles/month', 'SEO-optimized', 'Hindi+English', 'Auto-publish to WordPress'],
      status: 'Live',
      statusColor: '#10B981',
      cta: 'Try Free →',
    },
    {
      name: 'CABot',
      tagline: 'Your AI CA Assistant. 100% Local.',
      description: 'AI assistant for Chartered Accountants and SMBs — GST, ITR, Tally automation',
      features: ['Tally Integration', 'GST Filing', 'Hindi Support', 'WhatsApp ready', 'Zero data leak'],
      status: 'Beta',
      statusColor: '#F59E0B',
      cta: 'Join Waitlist →',
    },
    {
      name: 'Sovereign Code Editor',
      tagline: 'AI Coding. Your Server. Your Rules.',
      description: 'VS Code alternative with local AI, codebase-aware, Hindi+English support',
      features: ['Local LLM', 'Codebase Memory', 'Hindi Comments', 'Zero API Cost'],
      status: 'Coming Soon',
      statusColor: '#6366F1',
      cta: 'Get Notified →',
    },
    {
      name: 'LeadHunter AI',
      tagline: 'Leads That Come To You.',
      description: 'Automated B2B lead generation with AI qualification and personalized outreach',
      features: ['LinkedIn + JustDial scraping', 'AI qualify', 'Auto email', 'CRM sync'],
      status: 'Coming Soon',
      statusColor: '#6366F1',
      cta: 'Get Notified →',
    },
  ]

  return (
    <section style={{
      background: 'var(--secondary-bg)',
      padding: '100px 24px',
    }}>
      <div className="section-container" style={{ maxWidth: '1400px', padding: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '50px',
            border: '1px solid var(--accent-1)',
            background: 'var(--accent-glow)',
            marginBottom: '16px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-accent)',
          }}>
            OUR PRODUCTS
          </div>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.2,
          }}>
            Products That Work While<br />
            <span className="gradient-text">You Sleep</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: activeTab === index ? '2px solid var(--accent-1)' : '2px solid var(--border)',
                background: activeTab === index ? 'var(--accent-glow)' : 'transparent',
                color: 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active Product Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-3d"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px',
          }}
        >
          <div style={{ display: 'grid', gap: '32px' }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>
                  {products[activeTab].name}
                </h3>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: products[activeTab].statusColor + '20',
                  color: products[activeTab].statusColor,
                  fontSize: '12px',
                  fontWeight: 600,
                }}>
                  {products[activeTab].status}
                </span>
              </div>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-accent)',
                marginBottom: '16px',
              }}>
                {products[activeTab].tagline}
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                {products[activeTab].description}
              </p>
            </div>

            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Features:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {products[activeTab].features.map((feature, i) => (
                  <li key={i} style={{
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              {products[activeTab].cta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
