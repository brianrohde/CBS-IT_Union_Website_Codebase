import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009AA4',
        secondary: '#2563EB',
        accent: '#7C3AED',
        orange: '#FF6B00',
        yellow: '#FFD230',
        pink: '#FF4FA3',
        lime: '#C6FF2E',
        red: '#DF5745',
        background: '#F2F2F2',
        surface: '#FFFFFF',
        text: {
          primary: '#1F2430',
          secondary: '#3D3B39',
        },
        dark: '#14213D',
        soft: {
          100: '#85EBCC',
          200: '#99F4D0',
          300: '#99FAED',
          400: '#B4FDFD',
          500: '#84DEF1',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        script: ['Biro Script Plus', 'cursive'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '40px',
        '6xl': '48px',
      },
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        8: '64px',
      },
      borderRadius: {
        DEFAULT: '8px',
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      maxWidth: {
        container: '1280px',
        '4xl': '1140px',
      },
    },
  },
  plugins: [],
}

export default config
