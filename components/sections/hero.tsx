import Link from 'next/link'
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

                    {/* Image Placeholder */}
                    <div className="hidden md:flex items-center justify-center">
                        <div className="relative w-full aspect-square group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-warm to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center border-2 border-transparent bg-clip-padding group-hover:border-accent-primary/50 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-center text-neutral-400 relative z-10">
                                    <p className="text-lg font-semibold mb-2">Hero Image</p>
                                    <p className="text-sm opacity-80">Add your interior design image here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
