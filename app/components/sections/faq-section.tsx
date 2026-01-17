"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => {
    return (
        <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5 transition-all duration-300 hover:border-primary/50">
            <button
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                onClick={toggle}
            >
                <span className={`font-semibold text-lg ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {question}
                </span>
                <span className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <FaChevronDown />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Qu'est-ce que AtlasApp ?",
            answer: "AtlasApp est une agence digitale complète conçue pour aider les entreprises à construire et déployer des expériences web modernes avec rapidité et efficacité.",
        },
        {
            question: "Proposez-vous un devis gratuit ?",
            answer: "Oui, nous offrons une consultation initiale gratuite pour analyser vos besoins et vous proposer une solution adaptée sans engagement.",
        },
        {
            question: "Puis-je personnaliser le design ?",
            answer: "Absolument ! Tous nos projets sont conçus sur-mesure. Nous adaptons les couleurs, les espacements et les styles pour correspondre parfaitement à votre identité de marque.",
        },
        {
            question: "Assurez-vous la maintenance ?",
            answer: "Oui, nous proposons des plans de maintenance dédiés incluant les mises à jour de sécurité, les sauvegardes et le support prioritaire pour votre tranquillité d'esprit.",
        },
        {
            question: "Quels sont les délais de réalisation ?",
            answer: "Les délais varient selon la complexité du projet. En moyenne, un site vitrine est livré sous 2 à 4 semaines, tandis que des applications plus complexes peuvent nécessiter plus de temps.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                        Support
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                        Questions Fréquentes
                    </h2>
                    <p className="text-muted text-lg">
                        Tout ce que vous devez savoir sur nos services et notre accompagnement.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
