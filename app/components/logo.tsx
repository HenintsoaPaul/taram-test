import Image from "next/image";

/**
 * Displays the website logo using Next.js Image component for optimization.
 *
 * @param {object} props - Component props.
 * @param {string} props.src - The source URL of the logo image.
 *
 * @example
 * <Logo src="/logo.png" />
 */
export function Logo({ src, width, height }: { src: string, width?: number, height?: number }) {
    return (
        <Image
            src={src}
            alt="Website logo"
            width={width ?? 56}
            height={height ?? 56}
            // className="size-10 sm:size-12 md:size-14"
            priority
        />
    );
}