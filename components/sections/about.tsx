export default function About() {
    return (
        <section id="about" className="py-20 bg-neutral-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center md:order-2 border border-accent-primary/20">
                        <div className="text-center text-neutral-400">
                            <p className="text-lg font-semibold mb-2">About Section Image</p>
                            <p className="text-sm">Add a personal photo here</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 md:order-1">
                        <div className="space-y-3">
                            <p className="text-accent-warm font-semibold text-sm uppercase tracking-wide">
                                About Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
                                Passionate About Creating Beautiful Spaces
                            </h2>
                        </div>

                        <p className="text-neutral-300 leading-relaxed">
                            With years of experience in interior design, I believe that every space has the potential to be transformed into something extraordinary. My approach combines functionality with aesthetic excellence, always keeping the client's vision and lifestyle in mind.
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
                                    <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button className="btn-primary mt-6">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
