/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#F20587',
        customLightPurple: '#F1F1FD',
        customViolet: '#6C0CF2',
        customDarkViolet: '#620DD9',
        customPurple: '#6321BF',
        customDarkBlue: '#1C0D48',
        customSlate: '#4F4673'
      }
    },
  },
  plugins: [],
}
