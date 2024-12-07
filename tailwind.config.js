/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    spacing: {
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '1rem',
      '4': '1.5rem',
      '5': '2rem',
      '6': '3rem',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
