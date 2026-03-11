import { Link } from 'react-router-dom'

export default function BlogPreview() {
  const blogs = [
    {
      category: 'AI Development',
      title: 'Building a Sovereign AI OS from Scratch',
      excerpt: 'Learn how we built an autonomous AI operating system that runs 100% locally without cloud dependency.',
      readTime: '8 min read',
    },
    {
      category: 'Local LLM',
      title: 'Why Local LLMs Will Win in 2025',
      excerpt: 'The future of AI is local. Discover why enterprises are moving away from cloud-based models.',
      readTime: '6 min read',
    },
    {
      category: 'Business Automation',
      title: 'How Global SMBs Can Afford AI Automation',
      excerpt: 'Practical strategies for implementing AI systems without breaking the bank.',
      readTime: '5 min read',
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
            INSIGHTS
          </div>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.2,
          }}>
            Thoughts on AI, Code & the<br />
            <span className="gradient-text">Future</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '60px',
        }}>
          {blogs.map((blog, index) => (
            <Link
              key={index}
              to="/blog"
              style={{ textDecoration: 'none' }}
            >
              <div className="card-3d" style={{
                padding: '32px',
                height: '100%',
                cursor: 'pointer',
              }}>
                <div style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: 'var(--accent-glow)',
                  color: 'var(--text-accent)',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '16px',
                }}>
                  {blog.category}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.4,
                }}>
                  {blog.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}>
                  {blog.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                }}>
                  <span>{blog.readTime}</span>
                  <span style={{ color: 'var(--accent-1)', fontWeight: 600 }}>
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/blog" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
