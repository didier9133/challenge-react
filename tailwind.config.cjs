/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#edf2f7",
                dropColor: "#a0aec0",
                hoverColor: "#4299e1",
            },
        },
    },
    plugins: [],
};
