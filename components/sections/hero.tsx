import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 relative overflow-hidden">
            {/* Decorative gradient elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-warm/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6 py-10">
                        <div className="space-y-3">
                            <p className="text-accent-warm font-semibold text-sm uppercase tracking-wide">
                                Designed by Saloni, Crafted for Living
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-50 leading-tight">
                                Transform Your Space Into Something Beautiful
                            </h1>
                        </div>

                        <p className="text-neutral-300 text-lg leading-relaxed">
                            Discover thoughtfully designed interiors that blend functionality with aesthetic excellence. Each project tells a story of creativity and attention to detail.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="#projects" className="btn-primary flex items-center justify-center sm:justify-start gap-2 z-20">
                                Explore Projects
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="#about" className="btn-secondary flex items-center justify-center sm:justify-start">
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-accent-primary">50+</p>
                                <p className="text-neutral-400 text-sm">Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-accent-primary">100%</p>
                                <p className="text-neutral-400 text-sm">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="hidden md:flex items-center justify-center">
                        <div className="relative w-full aspect-square group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-warm to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                            <div className="relative w-full h-full rounded-2xl border-2 border-neutral-700 group-hover:border-accent-primary/50 transition-all duration-300 overflow-hidden">
                                <Image
                                    src="/images/og/hero_living_room.webp"
                                    alt="Elegant interior design showcase"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 768px) 0vw, 50vw"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
