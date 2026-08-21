/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dbecfe',
          200: '#bfdffe',
          300: '#93ccfd',
          400: '#60b0fa',
          500: '#3a90f6',
          600: '#2472eb',
          700: '#1c5cd8',
          800: '#1e4baf',
          900: '#1e418a',
          950: '#172a54',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffeede',
          200: '#ffd9bd',
          300: '#ffbd91',
          400: '#ff9858',
          500: '#ff7a2e',
          600: '#f25c14',
          700: '#cc4411',
          800: '#a33814',
          900: '#843116',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(15, 23, 42, 0.08)',
        card: '0 4px 24px -6px rgba(15, 23, 42, 0.12)',
        float: '0 12px 40px -8px rgba(15, 23, 42, 0.18)',
        'brand-glow': '0 0 0 4px rgba(36,114,235,0.9), 0 0 0 8px rgba(36,114,235,0.35), 0 0 28px 10px rgba(36,114,235,0.65)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
};