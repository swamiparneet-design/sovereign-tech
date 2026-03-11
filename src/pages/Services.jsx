export default function Services() {
  const services = [
    {
      icon: '🧠',
      title: 'Sovereign AI OS',
      description: 'Complete autonomous AI operating system running 100% locally on your infrastructure.',
      features: ['Multi-agent orchestration', 'Memory layers', 'Action automation', 'Custom integrations', '24/7 autonomous operation'],
      pricing: { starter: '$49/mo', pro: '$149/mo', enterprise: 'Custom' },
    },
    {
      icon: '🤖',
      title: 'Custom AI Agents',
      description: 'Purpose-built AI agents designed for your specific business processes.',
      features: ['Workflow automation', 'Decision support', 'Data processing', 'Natural language interfaces', 'Continuous learning'],
      pricing: { starter: '$99/mo', pro: '$299/mo', enterprise: 'Custom' },
    },
    {
      icon: '⚡',
      title: 'SaaS Development',
      description: 'Full-stack SaaS products built for scale with beautiful UIs and robust backends.',
      features: ['React/Node.js stack', 'Cloud-native architecture', 'AI-powered features', 'Scalable infrastructure', 'Ongoing maintenance'],
      pricing: { starter: '$199/mo', pro: '$499/mo', enterprise: 'Custom' },
    },
    {
      icon: '🔧',
      title: 'Legacy Automation',
      description: 'Automate your Tally, ERP, and legacy software with AI — no API needed.',
      features: ['Headless automation', 'UI automation', 'OCR integration', 'Data migration', 'Zero downtime deployment'],
      pricing: { starter: '$79/mo', pro: '$199/mo', enterprise: 'Custom' },
    },
    {
      icon: '✍️',
      title: 'AI Content Engine',
      description: 'Fully automated content pipelines generating 800+ blogs/month.',
      features: ['SEO optimization', 'Multi-language support', 'Auto-publishing', 'Content strategy', 'Analytics dashboard'],
      pricing: { starter: '$69/mo', pro: '$179/mo', enterprise: 'Custom' },
    },
    {
      icon: '📊',
      title: 'Data Intelligence',
      description: 'Transform raw data into business intelligence with AI-powered analytics.',
      features: ['Predictive analytics', 'Custom dashboards', 'Real-time insights', 'Data visualization', 'ML models'],
      pricing: { starter: '$89/mo', pro: '$249/mo', enterprise: 'Custom' },
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
            Services That<br />
            <span className="gradient-text">Scale With You</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            From startups to enterprises — AI solutions for every stage of growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div style={{ display: 'grid', gap: '60px' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="card-3d"
              style={{
                padding: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              {/* Left: Icon + Description */}
              <div>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>{service.icon}</div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                }}>
                  {service.title}
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Pricing */}
              <div style={{
                padding: '32px',
                background: 'var(--secondary-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>
                  Pricing Plans
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {Object.entries(service.pricing).map(([plan, price]) => (
                    <div key={plan} style={{
                      padding: '20px',
                      borderRadius: '12px',
                      background: plan === 'pro' ? 'var(--accent-glow)' : 'transparent',
                      border: plan === 'pro' ? '2px solid var(--accent-1)' : '1px solid var(--border)',
                    }}>
                      <div style={{ textTransform: 'capitalize', fontWeight: 600, marginBottom: '8px', color: 'var(--text-accent)' }}>
                        {plan}
                      </div>
                      <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {price}
                      </div>
                      {plan === 'pro' && (
                        <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--accent-1)' }}>
                          Most Popular ⭐
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                  Get Started →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '60px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="section-container" style={{ maxWidth: '1400px', padding: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}>
            {[
              { icon: '🔒', text: 'GDPR Compliant Architecture' },
              { icon: '📋', text: 'SOC 2 Ready Infrastructure' },
              { icon: '⏱️', text: '99.9% Uptime SLA' },
              { icon: '🌍', text: '24/7 Support Across Timezones' },
            ].map((item, index) => (
              <div key={index} style={{ padding: '24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
