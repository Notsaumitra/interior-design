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
                    50: '#f5f3f0',
                    100: '#e8e4df',
                    200: '#d4ccc5',
                    300: '#9b9490',
                    400: '#6b6460',
                    500: '#54504a',
                    600: '#3d3a36',
                    700: '#2a2724',
                    800: '#1a1815',
                    900: '#0f0e0c',
                    950: '#000000',
                },
                accent: {
                    primary: '#d4a574',
                    secondary: '#c19a6b',
                    tertiary: '#b8860b',
                    warm: '#e8b76d',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
