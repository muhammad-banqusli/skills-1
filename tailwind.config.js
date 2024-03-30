/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            titles: ['"Bruno Ace"'],
        },
        extend: {
            animation: {
                image: "image 0.2s ease-in-out forwards",
                fadeIn: "fadeIn 0.3s ease-in-out forwards",
                loading: "bounce 1s  ease  infinite",
                loading1: "bounce 1s 0.2s ease  infinite",
                loading2: "bounce 1s 0.4s ease  infinite",
                loading3: "bounce 1s 0.6s ease  infinite",
                loading4: "bounce 1s 0.8s ease  infinite",
            },
            keyframes: {
                image: {
                    "0%": { transform: "scale(0.2)" },
                    "100%": { transform: "scale(1)" },
                },
                fadeIn:{
                    "0%":{opacity: 0,},
                    "100%":{opacity: 1}
                }
            },
            colors: {
                whitesmoke: {
                    DEFAULT: "#f5f5f5",
                },
            },
        },
    },
    plugins: [],
};
