/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enables class-based dark mode
    content: ['./*.html'], // Adjust as per your project structure
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
              },
        },
    },
  plugins: [],
}

