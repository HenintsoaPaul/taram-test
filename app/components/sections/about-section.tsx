import { Button } from "../buttons/button";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export function AboutSection() {
    const benefits = [
        "Sécurité Renforcée",
        "Disponibilité 99.9%",
        "Support Dédié 7j/7",
        "Intégrations Fluides",
    ];

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Column */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                                À Propos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-foreground">
                                Nous construisons le futur de votre <span className="text-primary">présence digitale</span>
                            </h2>
                            <p className="text-muted text-lg leading-relaxed max-w-xl">
                                Fondée en 2024, AtlasApp est à la pointe de la révolution technologique. Notre mission est de permettre aux entreprises de créer des expériences numériques époustouflantes avec simplicité et efficacité.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                                    <span className="text-foreground font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button variant="primary" size="lg" className="gap-2">
                                En savoir plus <FaArrowRight />
                            </Button>
                        </div>
                    </div>

                    {/* Visual Column */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center group">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 group-hover:scale-105 transition-transform duration-700" />

                            <div className="relative z-10 text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-xs mx-auto">
                                <div className="text-6xl font-bold text-foreground mb-2">10k+</div>
                                <div className="text-muted uppercase tracking-wider text-sm">Clients Satisfaits</div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-700" />
                        </div>

                        {/* Floating Card */}
                        <div className="hidden sm:block absolute 
                                        -bottom-4 -left-4 px-3 py-4 bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 max-w-xs animate-in slide-in-from-bottom-4 duration-1000">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
                                    ★
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">Top Agence</div>
                                    <div className="text-xs text-muted">5 étoiles sur tous nos projets</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
