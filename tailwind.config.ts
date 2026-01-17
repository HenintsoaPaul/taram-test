import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#151515",
                primary: {
                    DEFAULT: "#57dc9e",
                    darker: "#3bb580",
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "#A1A1A1",
                },
            },
        },
    },
    plugins: [],
};
export default config;
