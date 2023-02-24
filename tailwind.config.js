/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#C8F9FA",
                    200: "#94EEF6",
                    300: "#5CD0E6",
                    400: "#33AACD",
                    500: "#007AAC",
                    600: "#005E93",
                    700: "#00477B",
                    800: "#003263",
                    900: "#002452"
                }
            }
        },
    },
    plugins: [],
};
