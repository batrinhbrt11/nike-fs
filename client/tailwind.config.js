/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'991px'},
      'md':{'max':'767px'},
      'sm':{'max':'550px'},
      'xsm':{'max':'375px'},
    },
  },
  plugins: [],
}

