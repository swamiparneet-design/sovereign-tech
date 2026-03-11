export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020208',
        secondary: '#080818',
        surface: '#0D0D20',
        border: 'rgba(99,102,241,0.15)',
        accent: {
          DEFAULT: '#6366F1',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          glow: '#6366F130'
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          accent: '#A5B4FC'
        }
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at 50% 0%, #6366F115 0%, #020208 70%)',
        'gradient-1': 'linear-gradient(135deg, #6366F1, #06B6D4)',
        'gradient-2': 'linear-gradient(135deg, #8B5CF6, #6366F1)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      }
    },
  },
  plugins: [],
}
