'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-accent-primary">
                    Interior Design
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-neutral-400 hover:text-accent-primary transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-neutral-400 hover:bg-neutral-900 rounded-lg transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="absolute top-16 left-0 right-0 bg-neutral-950 border-b border-neutral-800 md:hidden">
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-400 hover:text-accent-primary transition-colors font-medium py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
