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
  daisyui: {
    themes: [
      {
        light: {
          primary: '#3490DC',
          secondary: '#41B883',
          success: '#4CD62B',
          info: '#4D70E1',
          warning: '#FFC107',
          danger: '#E91E63',
          light: '#F1F1F1',
          dark: '#212121',
        },
        dark: {
          primary: '#3490DC',
          secondary: '#41B883',
          success: '#4CD62B',
          info: '#4D70E1',
          warning: '#FFC107',
          danger: '#E91E63',
          light: '#212121',
          dark: '#F1F1F1',
        },
        winter: {
          primary: '#3490DC',
          secondary: '#41B883',
          success: '#4CD62B',
          info: '#4D70E1',
          warning: '#FFC107',
          danger: '#E91E63',
          light: '#F1F1F1',
          dark: '#212121',
        }
      },
    ],}
};

export default config;
