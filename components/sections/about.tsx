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
                    <div className="rounded-2xl overflow-hidden h-96 md:order-2 group relative border-2 border-neutral-700 group-hover:border-accent-primary/60 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-warm to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <Image
                            src="/images/about/me.png"
                            alt="About — personal portrait"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
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

                        {/* Contact Drawer */}
                        {drawerOpen && (
                            <ContactDrawer onClose={() => setDrawerOpen(false)} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
