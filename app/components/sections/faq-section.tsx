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
            question: "What is AtlasApp?",
            answer: "AtlasApp is a comprehensive platform designed to help developers build and deploy modern web applications with speed and efficiency. We provide a suite of tools, components, and templates to streamline your workflow.",
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial on all our premium plans. You can explore all features without any commitment. No credit card required to start.",
        },
        {
            question: "Can I customize the components?",
            answer: "Absolutely! All our components are built with customization in mind. You can easily adjust colors, spacing, and styles using Tailwind CSS utility classes or our design token system.",
        },
        {
            question: "Do you offer support for large teams?",
            answer: "We have dedicated enterprise plans that include advanced collaboration features, role-based access control, and priority support to ensure your large team succeeds.",
        },
        {
            question: "How often do you release updates?",
            answer: "We release major updates every quarter and minor improvements on a weekly basis. Our changelog is publicly available if you want to track our progress.",
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
                    <h2 className="text-4xl font-bold text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted text-lg">
                        Everything you need to know about the product and billing.
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
