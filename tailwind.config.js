/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', serif",
      },
      colors: {
        soft_red: {
          100: ' hsl(5, 85%, 63%)'
        },
        Soft_orange: {
          100: ' hsl(35, 77%, 62%)'
        },
        Grayish_blue: {
          100: ' hsl(233, 8%, 79%)'
        },
        Dark_grayish_blue: {
          100: ' hsl(236, 13%, 42%)'
        },
        Very_dark_blue: {
          100: ' hsl(240, 100%, 5%)'
        },
      },
      screens: {
        'xs': '300px',
        // other screens ...
      }
    },
  },
  plugins: [
    
  ],
}

