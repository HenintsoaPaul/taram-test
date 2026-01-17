/**
 * Props for the Description component.
 */
interface DescriptionProps {
    /** The content to be displayed as the description text. */
    children: React.ReactNode;
    /** Additional CSS classes for styling the description. */
    className?: string;
}

/**
 * A responsive description text component, typically used for subtitles or introductory text.
 * With responsive font sizes and medium font weight.
 *
 * @example
 * <Description className="text-muted">
 *   This is a brief description of the section.
 * </Description>
 */
// Use medium font weight
export function Description({ children, className }: DescriptionProps) {
    const defaultClassName = "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl " +
        "font-medium";

    return (
        <p className={defaultClassName + " " + className}>
            {children}
        </p>
    );
}