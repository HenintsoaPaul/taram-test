/**
 * Props for the MainHeading component.
 */
interface MainHeadingProps {
    /** The content to be displayed as the main heading. */
    children: React.ReactNode;
    /** Additional CSS classes for styling the heading. */
    className?: string;
}

/**
 * A responsive main heading component (h1) with responsive font sizes and semi-bold font weight.
 *
 * @example
 * <MainHeading className="text-white">
 *   Welcome to <span className="text-primary">My Site</span>
 * </MainHeading>
 */
// Use semibold font weight
export function MainHeading({ children, className }: MainHeadingProps) {
    const defaultClassName = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl " +
        "font-semibold";

    return (
        <h1 className={defaultClassName + " " + className}>
            {children}
        </h1>
    );
}