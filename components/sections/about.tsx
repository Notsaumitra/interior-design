'use client'

import { useState } from 'react'
import Image from 'next/image'
import ContactDrawer from '@/components/ui/contact-drawer'

export default function About() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-warm/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="relative h-96 md:h-[500px] md:order-2 group">
                        {/* Glow behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-warm to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                        
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-neutral-700 group-hover:border-accent-primary/50 transition-all duration-300">
                            <Image
                                src="/images/about/me.png"
                                alt="About — personal portrait"
                                fill
                                className="object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 md:order-1">
                        <div className="space-y-3">
                            <p className="text-accent-warm font-semibold text-sm uppercase tracking-wide">
                                About Me
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
                                Saloni Tiwari
                            </h2>
                        </div>

                        <p className="text-neutral-300 leading-relaxed">
                            I'm an interior designer passionate about creating spaces that feel like home.
                        </p>

                        <p className="text-neutral-300 leading-relaxed">
                            Each project is a unique opportunity to create an environment that reflects personality, comfort, and style. I work closely with clients to understand their needs and bring their dream spaces to life.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 pt-4">
                            {[
                                'Custom design solutions tailored to your needs',
                                'Sustainable and eco-friendly materials',
                                'Attention to detail in every aspect',
                                'Professional project management',
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            className="btn-primary mt-6"
                            onClick={() => setDrawerOpen(true)}
                        >
                            Get in Touch
                        </button>

                    </div>
                </div>
            </div>

            {/* Contact Drawer - rendered outside the relative z-10 container to escape stacking context */}
            {drawerOpen && (
                <ContactDrawer onClose={() => setDrawerOpen(false)} />
            )}
        </section>
    )
}
