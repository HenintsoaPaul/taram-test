/**
 * Props for the ActionButtonsCont component.
 */
interface ActionButtonsContProps {
    /** The primary action button component. */
    primaryButton: React.ReactNode;
    /** The secondary action button component. */
    secondaryButton: React.ReactNode;
    /** Additional CSS classes for styling the container (e.g., flex direction, gap). */
    className: string;
}

/**
 * A container for grouping primary and secondary action buttons. 
 * Need to specify flex direction (row or column) and gap in the className prop.
 *
 * @example
 * <ActionButtonsCont
 *   className="flex-col sm:flex-row gap-4"
 *   primaryButton={<Button>Action</Button>}
 *   secondaryButton={<Button variant="outline">Cancel</Button>}
 * />
 */
export function ActionButtonsCont({
    primaryButton,
    secondaryButton,
    className
}: ActionButtonsContProps) {
    return (
        <div className={"flex items-center " + className}>
            {primaryButton}
            {secondaryButton}
        </div>
    );
}