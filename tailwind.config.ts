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
                background: "#272525ff",
                primary: {
                    DEFAULT: "#90cfecff",
                    darker: "#1baab4ff",
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
