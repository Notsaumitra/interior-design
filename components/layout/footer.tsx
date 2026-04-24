import Link from 'next/link'
import { Mail, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800 text-neutral-100 mt-20 border-t border-accent-primary/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container py-12 relative z-10">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-2 text-accent-primary">Interior Design</h3>
                        <p className="text-neutral-400 text-sm">
                            Creating beautiful and functional spaces that inspire.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-neutral-100">Quick Links</h4>
                        <nav className="flex flex-col gap-2 text-sm text-neutral-400">
                            <Link href="/" className="hover:text-accent-primary transition">
                                Home
                            </Link>
                            <Link href="#projects" className="hover:text-accent-primary transition">
                                Projects
                            </Link>
                            <Link href="#about" className="hover:text-accent-primary transition">
                                About
                            </Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-neutral-100">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="mailto:contact@example.com"
                                className="text-neutral-400 hover:text-accent-warm hover:drop-shadow-lg transition duration-300"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-neutral-400 hover:text-accent-warm hover:drop-shadow-lg transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-neutral-400 hover:text-accent-warm hover:drop-shadow-lg transition duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-accent-primary/20 pt-8">
                    <p className="text-center text-neutral-500 text-sm">
                        © {currentYear} Interior Design. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
