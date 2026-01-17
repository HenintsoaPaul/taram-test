import { Button } from "@/app/components/buttons/button";
import { FaArrowDown, FaCalendarAlt } from "react-icons/fa";
import { MainHeading } from "../typography/main-heading";
import { Description } from "../typography/description";
import { ActionButtonsCont } from "../buttons/action-buttons-container";
import { Chip } from "../chips/chip";
import { ChipContainer } from "../chips/chip-container";
import { Logo } from "../logo";

/**
 * The main Hero Section of the landing page.
 * Displays the key value proposition, a chip with the logo, and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered Hero Section.
 */
export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-6
                            px-8 pt-32 pb-24
                            text-center
                            max-w-5xl mx-auto">

            {/* Chip / Badge */}
            <ChipContainer
                chip={
                    <Chip className="bg-white text-black shadow-[0_0_20px_rgba(87,220,158,0.5)] font-bold text-sm sm:text-base tracking-wide uppercase">
                        <span className="flex items-center gap-3">
                            <Logo src="/2_Logo_Bulle.png" />
                            <p>
                                CRÉER UN SITE WEB <span className="underline underline-offset-4 decoration-2">VRAIMENT</span> UNIQUE
                            </p>
                        </span>
                    </Chip>
                }
            />

            {/* Main Heading */}
            <MainHeading className="text-white">
                Votre <span className="text-primary">site</span> doit <span className="text-primary">donner envie</span> de{" "}
                <span className="text-primary">rester</span>, pas de{" "}
                <span className="line-through decoration-background"><span className="text-primary">revenir</span> en <span className="text-primary">arrière</span></span>.
            </MainHeading>

            {/* Description */}
            <Description className="text-muted max-w-2xl">
                Design moderne, SEO solide, Suivi complet :<br className="hidden sm:block" />
                on construit un site qui retient vos visiteurs et vous apporte des résultats.
            </Description>

            {/* Actions */}
            <ActionButtonsCont
                className="flex-col sm:flex-row gap-4 mt-6"
                primaryButton={
                    <div className="relative">
                        <Button variant="primary" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-darker">
                            <FaCalendarAlt />
                            Prendre RDV
                        </Button>
                        <div className="absolute -bottom-18 -left-12 w-full">
                            <Logo src="/3_Un_Ptit_Click.png" width={200} height={150} />
                        </div>
                    </div>
                }
                secondaryButton={
                    <Button variant="outline" className="w-full sm:w-auto">
                        Découvrir nos projets
                        <FaArrowDown />
                    </Button>
                }
            />
        </section >
    );
}
