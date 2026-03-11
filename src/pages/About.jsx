import { motion } from 'framer-motion'

export default function About() {
  const values = [
    { icon: '🔒', title: 'Sovereignty', description: 'Your data stays yours. Always.' },
    { icon: '💡', title: 'Innovation', description: 'Pushing the boundaries of what\'s possible' },
    { icon: '💰', title: 'Affordability', description: 'Enterprise AI accessible to everyone' },
    { icon: '🛡️', title: 'Privacy', description: 'Local-first architecture, always' },
    { icon: '✨', title: 'Quality', description: 'No half-baked solutions. Ever.' },
    { icon: '🌍', title: 'Global Vision', description: 'World-class AI for businesses worldwide' },
  ]

  const team = [
    { name: 'Alex Sharma', role: 'Founder & CEO', bio: 'Ex-Google AI researcher. Building sovereign AI systems.' },
    { name: 'Priya Patel', role: 'CTO', bio: '15+ years in distributed systems. LangChain contributor.' },
    { name: 'Marcus Chen', role: 'Head of AI', bio: 'PhD in ML from Stanford. Local LLM expert.' },
    { name: 'Sarah Johnson', role: 'VP Engineering', bio: 'Scaled teams at Stripe and Airbnb.' },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        padding: '100px 24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '900px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'Clash Display',
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            We Are Building<br />
            <span className="gradient-text">India's AI Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginTop: '24px',
            }}
          >
            From India to the world — making enterprise AI accessible, affordable, and autonomous.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '32px',
          }}>
            Why Sovereign Tech Exists
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}>
            In 2025, we saw a critical problem: AI was becoming centralized. Big tech companies controlled 
            the models, the infrastructure, and most importantly — the data. Businesses were forced to send 
            their sensitive information to cloud APIs, losing control and sovereignty.
          </p>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}>
            We believed there's a better way. What if every business — from startups in Bangalore to 
            enterprises in New York — could harness the power of AI without compromising their data 
            sovereignty? What if AI could run 100% locally, on your own infrastructure?
          </p>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            That's why we built Sovereign Tech. To democratize AI. To make it local, sovereign, and 
            accessible to everyone. Because the future of intelligence shouldn't be controlled by a 
            few tech giants — it should belong to you.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '100px 24px',
      }}>
        <div className="section-container" style={{ maxWidth: '1400px', padding: 0 }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            Our Core Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-3d"
                style={{ padding: '32px' }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          Meet The Team
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
        }}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-3d"
              style={{ padding: '32px', textAlign: 'center' }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
              }}>
                👤
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
                {member.name}
              </h3>
              <p style={{ color: 'var(--accent-1)', fontWeight: 600, marginBottom: '12px' }}>
                {member.role}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
