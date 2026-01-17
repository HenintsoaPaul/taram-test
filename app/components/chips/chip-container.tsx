/**
 * Props for the ChipContainer component.
 */
interface ChipContainerProps {
    /** The Chip component to be rendered within the container. */
    chip: React.ReactNode;
    /** Additional CSS classes for styling the container. */
    className?: string;
}

/**
 * A wrapper container for the Chip component, handling positioning and sizing.
 *
 * @example
 * <ChipContainer
 *   className="mb-6"
 *   chip={<Chip>Content</Chip>}
 * />
 */
export function ChipContainer({
    chip,
    className
}: ChipContainerProps) {
    const defaultClassName = "w-full sm:w-auto";

    return (
        <div className={defaultClassName + " " + className}>
            {chip}
        </div>
    );
}