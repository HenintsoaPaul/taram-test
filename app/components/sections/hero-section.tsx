import { Button } from "@/app/components/buttons/button";
import { FaArrowDown, FaCalendar } from "react-icons/fa";
import { MainHeading } from "../typography/main-heading";
import { Description } from "../typography/description";
import { ActionButtonsCont } from "../buttons/action-buttons-container";

/**
 * The main Hero Section of the landing page.
 * Displays the key value proposition, a chip with the logo, and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered Hero Section.
 */
export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-6
                            px-8 pt-24 pb-16 
                            text-center
                            max-w-5xl mx-auto">
            {/* Main Heading */}
            <MainHeading className="text-white">
                <span className="uppercase">Here</span> is a <span className="text-primary underline underline-offset-4">main</span> heading.
                <br />
                <span className="text-primary">Important</span> message. Do not <span className="line-through decoration-background">miss</span> our offers.
            </MainHeading>

            {/* Description */}
            <Description className="text-muted">
                Here is a description of the hero section. There is a line break here.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis id temporibus mollitia inventore, quam amet aspernatur sapiente officia. Recusandae, ad! Hic assumenda a voluptatibus porro velit, saepe laudantium excepturi.
            </Description>

            {/* Actions */}
            <ActionButtonsCont
                className="flex-col sm:flex-row gap-4 mt-6"
                primaryButton={
                    <Button variant="primary" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-darker">
                        <FaCalendar className="animate-bounce" />
                        Book appointment
                    </Button>
                }
                secondaryButton={
                    <Button variant="outline" className="w-full sm:w-auto">
                        Our services
                        <FaArrowDown className="animate-bounce " />
                    </Button>
                }
            />
        </section >
    );
}
