import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord, FaHeart } from "react-icons/fa";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Product: [
            { name: "Features", href: "#" },
            { name: "Integrations", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Changelog", href: "#" },
        ],
        Company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Contact", href: "#" },
        ],
        Resources: [
            { name: "Documentation", href: "#" },
            { name: "Community", href: "#" },
            { name: "Help Center", href: "#" },
            { name: "Terms of Service", href: "#" },
        ],
    };

    const siteName = "AtlasApp";
    const siteAuthor = "Henintsoa Paul Manitraja";

    return (
        <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Atlas<span className="text-primary">App</span>
                            </span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
                            Building the future of digital experiences. We provide the tools you need to launch your next big idea faster and better than ever before.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<FaTwitter />} label="Twitter" />
                            <SocialLink href="#" icon={<FaGithub />} label="GitHub" />
                            <SocialLink href="#" icon={<FaLinkedin />} label="LinkedIn" />
                            <SocialLink href="#" icon={<FaDiscord />} label="Discord" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-foreground font-semibold mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-muted text-sm hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-sm">
                        © {currentYear} {siteName}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <span>Made with</span>
                        <FaHeart className="text-red-500" />
                        <span>by {siteAuthor}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
        >
            {icon}
        </Link>
    );
}
