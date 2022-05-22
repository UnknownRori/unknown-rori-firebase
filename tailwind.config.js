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
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0%',
                        transform: 'translateX(-48px)'
                    },
                    '100': {
                        opacity: '100%',
                        transform: 'translateX(0px)'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out'
            }
        },
    },
    plugins: [],
}