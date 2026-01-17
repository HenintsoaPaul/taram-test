import React from "react";

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The visual style variant of the button. Defaults to "primary". */
    variant?: "primary" | "outline";
    /** The size of the button. Defaults to "md". */
    size?: "sm" | "md" | "lg";
    /** The content to display inside the button. */
    children: React.ReactNode;
    /** Optional icon to display on the left side of the button text. */
    iconLeft?: React.ReactNode;
    /** Optional icon to display on the right side of the button text. */
    iconRight?: React.ReactNode;
}

/**
 * A reusable button component with support for variants, sizes, and icons.
 *
 * @example
 * <Button variant="primary" size="lg" iconLeft={<FaCalendarAlt />}>
 *   Click Me
 * </Button>
 */
export function Button({
    variant = "primary",
    size = "md",
    children,
    iconLeft,
    iconRight,
    className,
    ...props
}: ButtonProps) {
    // Base styles for all buttons
    const baseStyles =
        "flex items-center justify-center gap-3 " +
        "rounded-xl font-semibold " +
        "transition-transform duration-200 " +
        "cursor-pointer";

    // Size specific styles
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base sm:text-lg",
        lg: "px-8 py-4 text-lg sm:text-xl",
    };

    // Variant specific styles
    const variants = {
        primary: "bg-primary text-background hover:scale-105",
        outline: "border border-primary text-primary",
    };

    return (
        <button
            className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className || ""}`}
            {...props}
        >
            {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
            {children}
            {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
        </button>
    );
}
