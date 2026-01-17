import { ReactNode } from "react";

interface GridItem {
    title: string;
    description: string;
    icon?: ReactNode;
}

interface GridProps {
    items: GridItem[];
}

/**
 * A reusable grid component that displays a list of items.
 * Responsive layout: 1 column on mobile, 2 on tablet, 3 on desktop.
 */
export function Grid({ items }: GridProps) {
    return (
        <section className="py-16 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-6 
                            bg-white dark:bg-white/5 
                            border border-gray-200 dark:border-white/10 
                            rounded-xl shadow-sm 
                            hover:shadow-md 
                            transition-shadow duration-300"
                    >
                        {item.icon && (
                            <div className="mb-4 text-3xl text-primary">
                                {item.icon}
                            </div>
                        )}
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
