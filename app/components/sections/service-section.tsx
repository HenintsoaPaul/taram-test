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
            title: "Architecture Moderne",
            description: "Propulsé par les dernières fonctionnalités de Next.js pour une performance optimale.",
            icon: <FaCode />,
        },
        {
            title: "Design System",
            description: "Une bibliothèque de composants UI réutilisables pour une cohérence parfaite.",
            icon: <FaLayerGroup />,
        },
        {
            title: "100% Responsive",
            description: "Des interfaces fluides qui s'adaptent à tous les écrans : mobile, tablette et desktop.",
            icon: <FaMobileAlt />,
        },
        {
            title: "Mode Sombre",
            description: "Support natif du thème clair et sombre pour un confort visuel maximal.",
            icon: <FaPalette />,
        },
        {
            title: "Sécurité Avancée",
            description: "Protection intégrée pour garder vos données et celles de vos utilisateurs en sécurité.",
            icon: <FaShieldAlt />,
        },
        {
            title: "Performance Maximale",
            description: "Optimisation de la vitesse de chargement pour un meilleur référencement (SEO).",
            icon: <FaBolt />,
        },
        {
            title: "Sur-Mesure",
            description: "Configuration et personnalisation avancée pour répondre à vos besoins uniques.",
            icon: <FaCog />,
        },
        {
            title: "Cloud Ready",
            description: "Déploiement simple et rapide sur une infrastructure cloud performante.",
            icon: <FaCloud />,
        },
    ];

    return (
        <section id="services" className="py-24">
            <div className="text-center mb-12">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                    Nos Expertises
                </span>
                <h2 className="text-4xl font-bold text-white mt-2">
                    Conception Web & App
                </h2>
                <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
                    Nous créons des expériences digitales performantes qui transforment vos visiteurs en clients fidèles.
                </p>
            </div>

            <Grid items={ourServices} />
        </section>
    );
}