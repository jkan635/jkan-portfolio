import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(17), blink 1s infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '15ch' },
        },
        blink: {
          from: {
            'border-right-color': 'transparent'
          },
          to: {
            'border-right-color': 'white'
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
