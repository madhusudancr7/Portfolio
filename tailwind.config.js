/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': ['0.75rem', '1rem'],         // 12px
      'sm': ['0.875rem', '1.25rem'],     // 14px
      'base': ['1rem', '1.5rem'],        // 16px
      'lg': ['1.125rem', '1.75rem'],     // 18px
      'xl': ['1.25rem', '1.75rem'],      // 20px
      '2xl': ['1.5rem', '2rem'],         // 24px
      '3xl': ['1.875rem', '2.25rem'],    // 30px
      '4xl': ['2.25rem', '2.5rem'],      // 36px
      '5xl': ['3rem', '1'],              // 48px
      '6xl': ['3.75rem', '1'],           // 60px
      '7xl': ['4.5rem', '1'],            // 72px
      '8xl': ['6rem', '1'],              // 96px
      '9xl': ['8rem', '1'],              // 128px
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'serif'],
        display: ['Orbitron', 'sans-serif'],
        graffiti: ['Permanent Marker', 'cursive'],
      },
      colors: {
        'background': '#f3f4f6',
        'text-primary': '#1f2937',
        'text-secondary': '#6b7281',
        'accent': '#f97316',
        'card-bg': 'rgba(255, 255, 255, 0.7)',
        'border-color': 'rgba(0, 0, 0, 0.1)',
        
        'dark-background': '#101010',
        'dark-text-primary': '#E6E6E6',
        'dark-text-secondary': '#A8A8A8',
        'dark-card-bg': 'rgba(26, 26, 26, 0.2)',
        'dark-border-color': 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'blur-reveal': 'blurReveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'typing-effect': 'typing 2s steps(30, end), blink .75s step-end infinite',
        'gradient-pan': 'gradientPan 15s ease infinite',
        'pulse-slow': 'pulseSlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob-morph': 'blobMorph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blurReveal: {
          '0%': { 
              opacity: 0, 
              transform: 'translateY(50px) scale(0.95)',
              filter: 'blur(10px)'
          },
          '100%': { 
              opacity: 1, 
              transform: 'translateY(0) scale(1)',
              filter: 'blur(0)'
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#f97316' },
        },
        gradientPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
        },
        blobMorph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
      }
    }
  },
  plugins: [],
}