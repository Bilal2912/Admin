// const { default: setupTrackingContext } = require("tailwindcss/lib/lib/setupTrackingContext");

module.exports = {
  content: ["*"],
  theme: {
    screens:{
      xxsm:'300px',
      xsm:'450px',
      sm:'670px',
      md:'768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing:{
        15:'3.75rem',
        18:'4.5rem',
        22:'5.5rem',
        26:'6.5rem',
        30:'7.5rem',
        84:'21rem',
        86:'21.25rem',
        87:'21.55rem',
        88:'22rem',
        92:'23rem'
      }
    },
  },
  plugins: [],
}
