import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#90db6b",

          "secondary": "#90ed78",

          "accent": "#db43a8",

          "neutral": "#1f1a2d",

          "base-100": "#e9eaf1",

          "info": "#aacbe4",

          "success": "#62da92",

          "warning": "#f3c758",

          "error": "#ea8276",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
