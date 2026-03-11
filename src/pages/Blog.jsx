import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'AI Development', 'Local LLM', 'Business Automation', 'Product Updates']

  const posts = [
    {
      category: 'AI Development',
      title: 'Building a Sovereign AI OS from Scratch',
      excerpt: 'Learn how we built an autonomous AI operating system that runs 100% locally without cloud dependency. Complete technical deep-dive.',
      readTime: '12 min read',
      date: 'March 5, 2025',
      author: 'Alex Sharma',
    },
    {
      category: 'Local LLM',
      title: 'Why Local LLMs Will Win in 2025',
      excerpt: 'The future of AI is local. Discover why enterprises are moving away from cloud-based models and what this means for your business.',
      readTime: '8 min read',
      date: 'March 1, 2025',
      author: 'Priya Patel',
    },
    {
      category: 'Business Automation',
      title: 'How Global SMBs Can Afford AI Automation',
      excerpt: 'Practical strategies for implementing AI systems without breaking the bank. Real case studies from our clients worldwide.',
      readTime: '7 min read',
      date: 'February 25, 2025',
      author: 'Marcus Chen',
    },
    {
      category: 'Product Updates',
      title: 'HindiWriter AI 2.0: Now with Multi-Language Support',
      excerpt: 'Announcing support for 10+ Indian languages. Generate content in Hindi, Tamil, Telugu, and more with the same accuracy.',
      readTime: '5 min read',
      date: 'February 20, 2025',
      author: 'Sarah Johnson',
    },
    {
      category: 'AI Development',
      title: 'Multi-Agent Systems: The Future of Enterprise AI',
      excerpt: 'How autonomous multi-agent orchestration is replacing traditional automation. Technical architecture and implementation guide.',
      readTime: '10 min read',
      date: 'February 15, 2025',
      author: 'Alex Sharma',
    },
    {
      category: 'Local LLM',
      title: 'Ollama vs LM Studio: Which Local LLM Runner Wins?',
      excerpt: 'Comprehensive comparison of popular local LLM runners. Performance benchmarks, features, and best use cases.',
      readTime: '9 min read',
      date: 'February 10, 2025',
      author: 'Priya Patel',
    },
    {
      category: 'Business Automation',
      title: 'ROI of AI: Measuring What Matters',
      excerpt: 'Beyond cost savings. How to measure the true impact of AI automation on your business growth and competitive advantage.',
      readTime: '6 min read',
      date: 'February 5, 2025',
      author: 'Marcus Chen',
    },
    {
      category: 'Product Updates',
      title: 'CABot Beta: Revolutionizing CA Practice Management',
      excerpt: 'First look at our AI assistant for Chartered Accountants. Features, capabilities, and early access program details.',
      readTime: '6 min read',
      date: 'February 1, 2025',
      author: 'Sarah Johnson',
    },
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        padding: '80px 24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Insights & Resources
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            Deep dives into AI, automation, and the future of technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-container">
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          justifyContent: 'center',
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '12px 24px',
                borderRadius: '20px',
                border: selectedCategory === category ? '2px solid var(--accent-1)' : '2px solid var(--border)',
                background: selectedCategory === category ? 'var(--accent-glow)' : 'transparent',
                color: 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '60px',
        }}>
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="card-3d"
              style={{ padding: '32px', cursor: 'pointer' }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: 'var(--accent-glow)',
                  color: 'var(--text-accent)',
                  fontSize: '12px',
                  fontWeight: 600,
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {post.readTime}
                </span>
              </div>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--text-primary)',
                lineHeight: 1.4,
              }}>
                {post.title}
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {post.excerpt}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border)',
                paddingTop: '16px',
              }}>
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '48px',
          background: 'var(--secondary-bg)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            Stay Updated
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
          }}>
            Get the latest AI insights, tutorials, and product updates delivered to your inbox weekly.
          </p>
          <form style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '16px',
              }}
            />
            <button className="btn-primary" style={{ padding: '16px 32px' }}>
              Subscribe →
            </button>
          </form>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '16px' }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
