export default function Products() {
  const products = [
    {
      name: 'HindiWriter AI',
      tagline: 'Content in Hindi+English. Zero effort.',
      description: 'AI-powered blog & content generator specifically for Indian market. Generate SEO-optimized content in both Hindi and English with zero manual effort.',
      features: [
        '800+ articles/month generated automatically',
        'SEO-optimized with keyword research',
        'Bilingual support (Hindi + English)',
        'Auto-publish to WordPress/Medium',
        'Plagiarism-free content',
        'Brand voice customization',
      ],
      status: 'Live',
      statusColor: '#10B981',
      pricing: 'Starting at $49/mo',
      cta: 'Try Free →',
    },
    {
      name: 'CABot',
      tagline: 'Your AI CA Assistant. 100% Local.',
      description: 'AI assistant for Chartered Accountants and SMBs. Automate GST filing, ITR preparation, and Tally operations with complete data privacy.',
      features: [
        'Tally Integration (all versions)',
        'Automated GST Filing',
        'ITR Preparation & Filing',
        'Hindi & English Support',
        'WhatsApp Integration Ready',
        'Zero Data Leak Guarantee',
        'Client Management Dashboard',
      ],
      status: 'Beta',
      statusColor: '#F59E0B',
      pricing: 'Join Waitlist - Early Bird $99/mo',
      cta: 'Join Waitlist →',
    },
    {
      name: 'Sovereign Code Editor',
      tagline: 'AI Coding. Your Server. Your Rules.',
      description: 'VS Code alternative with built-in local AI. Get codebase-aware suggestions without sending your code to external APIs.',
      features: [
        'Local LLM Integration (Ollama, LM Studio)',
        'Codebase Memory & Context',
        'Hindi Comments & Documentation',
        'Zero API Costs',
        'IntelliSense + AI Autocomplete',
        'Git Integration',
        'Extension Ecosystem',
      ],
      status: 'Coming Soon',
      statusColor: '#6366F1',
      pricing: 'Free Beta - Notify Me',
      cta: 'Get Notified →',
    },
    {
      name: 'LeadHunter AI',
      tagline: 'Leads That Come To You.',
      description: 'Automated B2B lead generation with AI qualification and personalized outreach. Find, qualify, and convert leads on autopilot.',
      features: [
        'LinkedIn + JustDial Scraping',
        'AI Lead Qualification',
        'Personalized Email Sequences',
        'CRM Sync (HubSpot, Salesforce)',
        'Response Tracking',
        'Meeting Scheduler',
      ],
      status: 'Coming Soon',
      statusColor: '#6366F1',
      pricing: 'Early Access - $149/mo',
      cta: 'Get Early Access →',
    },
  ]

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
            Products That Work<br />
            <span className="gradient-text">While You Sleep</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            Battle-tested AI products for modern businesses.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-container">
        <div style={{ display: 'grid', gap: '60px' }}>
          {products.map((product, index) => (
            <div
              key={index}
              className="card-3d"
              style={{
                padding: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              {/* Left: Product Info */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {product.name}
                  </h2>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: product.statusColor + '20',
                    color: product.statusColor,
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    {product.status}
                  </span>
                </div>
                <p style={{
                  fontSize: '18px',
                  color: 'var(--text-accent)',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}>
                  {product.tagline}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}>
                  {product.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{
                      padding: '14px 0',
                      borderBottom: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '15px',
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Pricing Card */}
              <div style={{
                padding: '40px',
                background: 'var(--secondary-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>
                    Pricing
                  </h3>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '24px',
                    lineHeight: 1.2,
                  }}>
                    {product.pricing}
                  </div>
                </div>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', fontSize: '16px', padding: '16px' }}
                >
                  {product.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '80px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="section-container" style={{ maxWidth: '900px', padding: 0, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            Need a Custom Solution?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
          }}>
            We build custom AI products tailored to your business needs.
          </p>
          <button className="btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Book a Consultation →
          </button>
        </div>
      </section>
    </div>
  )
}
