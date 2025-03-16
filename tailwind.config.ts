import { Config } from 'tailwindcss';  // Import the Config type from tailwindcss
import daisyui from 'daisyui';  // Import DaisyUI as an ES module

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include the content files
    './components/**/*.{js,ts,jsx,tsx}',  // Include components as well
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],  // Add daisyUI plugin here
};

export default config;
