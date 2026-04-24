/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                neutral: {
                    50: '#faf9f7',
                    100: '#ede8e2',
                    200: '#ddd5cc',
                    300: '#a89d93',
                    400: '#7a7268',
                    500: '#605856',
                    600: '#4a4540',
                    700: '#3a3530',
                    800: '#2a2420',
                    900: '#1f1b16',
                    950: '#16130d',
                },
                accent: {
                    primary: '#d4a574',
                    secondary: '#c19a6b',
                    tertiary: '#b8860b',
                    warm: '#e8b76d',
                    light: '#f0d9b5',
                },
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(135deg, #d4a574 0%, #e8b76d 100%)',
                'gradient-gold-shine': 'linear-gradient(135deg, #e8b76d 0%, #d4a574 50%, #c19a6b 100%)',
                'gradient-dark': 'linear-gradient(135deg, #16130d 0%, #1f1b16 50%, #2a2420 100%)',
                'gradient-dark-subtle': 'linear-gradient(135deg, #2a2420 0%, #3a3530 100%)',
                'gradient-warm-dark': 'linear-gradient(135deg, #1a1815 0%, #24201b 50%, #2f2b26 100%)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
