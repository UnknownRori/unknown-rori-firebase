module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '240px',
                'md': '640px',
                'lg': '800px',
                'xl': '1024px',
                '2xl': '1280px',
            }
        },
    },
    plugins: [],
}