/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background": "#071E3D",
        "secondary": "#278EA5",
        "primary": "#21E6C1",
        "accent": "#1F4287"
      }
    },
  },
  plugins: [],
}

