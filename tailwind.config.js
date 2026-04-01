/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#7c3aed',
        brandDark: '#5b21b6',
        ink: '#0f172a',
        muted: '#64748b',
        soft: '#f8fafc',
        deep: '#081126',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(124, 58, 237, 0.25)',
      },
      backgroundImage: {
        heroGlow: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.08))',
        brandGradient: 'linear-gradient(90deg, #5b34f2 0%, #7c3aed 35%, #a21caf 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
