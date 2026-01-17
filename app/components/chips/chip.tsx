/**
 * Props for the Chip component.
 */
interface ChipProps {
    /** The content to display inside the chip. */
    children: React.ReactNode;
    /** Additional CSS classes for styling the chip. */
    className?: string;
}

/**
 * A versatile Chip component for displaying content in a contained style.
 * Need to specify background.
 *
 * @example
 * <Chip className="border-muted">
 *   <Logo src="/logo.png" />
 *   <span>Feature Name</span>
 * </Chip>
 */
export function Chip({
    children,
    className,
}: ChipProps) {
    const defaultClassName = "inline-flex items-center gap-3 " +
        "w-full sm:w-auto " +
        "px-4 py-3 sm:px-8 sm:py-4 " +
        "rounded-full";

    return (
        <div className={defaultClassName + " " + className}>
            {children}
        </div>
    );
}