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
                fadeInLeft: {
                    '0%': {
                        opacity: '0%',
                        transform: 'translateX(-100vw)'
                    },
                    '100%': {
                        opacity: '100%',
                        transform: 'translateX(0px)'
                    }
                },
                fadeOutLeft: {
                    '0%': {
                        transform: 'translateX(0vw)'
                    },
                    '15%': {
                        opacity: '100%',
                        transform: 'translateX(2vw)'
                    },
                    '100%': {
                        opacity: '0%',
                        transform: 'translateX(-100vw)',
                    }
                }
            },
            animation: {
                fadeInLeft: 'fadeInLeft 1s ease-in-out forwards',
                fadeOutLeft: 'fadeOutLeft 1s ease-in-out forwards',
            }
        },
    },
    plugins: [],
}