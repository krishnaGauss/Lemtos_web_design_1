export default {
  theme: {
    extend: {
      colors: {
        lemtos: {
          red: '#aa0000',
          amber: '#ffa100',
          black: '#1a1a1a',
          offwhite: '#f8f9fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        neo: '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
} satisfies import('tailwindcss').Config;


