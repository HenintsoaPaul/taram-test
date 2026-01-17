import {
    FaCode,
    FaLayerGroup,
    FaMobileAlt,
    FaPalette,
    FaShieldAlt,
    FaBolt,
    FaCog,
    FaCloud
} from "react-icons/fa";
import { Grid } from "../grid/grid";

export function ServiceSection() {
    const ourServices = [
        {
            title: "Modern Architecture",
            description: "Built with the latest Next.js 15 app directory features for optimal performance.",
            icon: <FaCode />,
        },
        {
            title: "Component Library",
            description: "Includes a comprehensive set of pre-built, reusable UI components.",
            icon: <FaLayerGroup />,
        },
        {
            title: "Responsive Design",
            description: "Fully responsive layouts that work perfectly on mobile, tablet, and desktop.",
            icon: <FaMobileAlt />,
        },
        {
            title: "Theme Support",
            description: "Built-in support for light and dark modes with Tailwind CSS variables.",
            icon: <FaPalette />,
        },
        {
            title: "Security features",
            description: "Security features out of the box to keep your application safe.",
            icon: <FaShieldAlt />,
        },
        {
            title: "Fast Performance",
            description: "Optimized for speed with server components and efficient code splitting.",
            icon: <FaBolt />,
        },
        {
            title: "Easy Customization",
            description: "Easily variable design tokens and configuration options.",
            icon: <FaCog />,
        },
        {
            title: "Cloud Ready",
            description: "Ready to deploy to Vercel or any other cloud hosting provider.",
            icon: <FaCloud />,
        },
    ];

    return (
        <section id="services" className="py-24">
            <div className="text-center mb-4">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                    Our services
                </span>
                <h2 className="text-4xl font-bold text-foreground">
                    Software Development
                </h2>
                <p className="text-muted text-lg">
                    We offer a range of services to help you build and deploy your web applications.
                </p>
            </div>

            <Grid items={ourServices} />
        </section>
    );
}