'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Send, MessageCircle, Mail, CheckCircle } from 'lucide-react'

interface ContactDrawerProps {
    onClose: () => void
}

export default function ContactDrawer({ onClose }: ContactDrawerProps) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [visible, setVisible] = useState(false)
    const firstInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        firstInputRef.current?.focus()
    }, [])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose()
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [])

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 320)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const subject = encodeURIComponent(`New enquiry from ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )
        window.open(`mailto:contact@example.com?subject=${subject}&body=${body}`)
        setSubmitted(true)
    }

    const WHATSAPP_NUMBER = '919999999999' // ← replace with real number
    const whatsappMsg = encodeURIComponent(
        `Hi! I came across your interior design portfolio and would love to connect.`
    )
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`

    // Input shared style (inline so focus handler can toggle border color)
    const inputBase: React.CSSProperties = {
        width: '100%',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        fontSize: '0.875rem',
        color: '#ede8e2',          // neutral-100
        background: '#2a2420',     // neutral-800
        border: '1px solid #3a3530', // neutral-700
        outline: 'none',
        transition: 'border-color 0.2s',
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[9000]"
                style={{
                    background: 'rgba(22,19,13,0.75)',  // neutral-950 tinted
                    backdropFilter: 'blur(4px)',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Bottom sheet panel */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Contact drawer"
                className="fixed bottom-0 left-0 right-0 z-[9001] w-full flex flex-col mx-auto"
                style={{
                    maxHeight: '90vh',
                    transform: visible ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
                    background: 'linear-gradient(180deg, #2a2420 0%, #24201b 50%, #1f1b16 100%)',
                    borderTop: '1px solid #3a3530',
                    borderRadius: '1.25rem 1.25rem 0 0',
                    boxShadow: '0 -24px 80px rgba(0,0,0,0.5)',
                }}
            >
                {/* Drag handle */}
                <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                    <div className="w-10 h-1 rounded-full" style={{ background: '#3a3530' }} />
                </div>
                {/* Subtle gold glow top-left */}
                <div
                    className="absolute top-0 left-0 w-80 h-48 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 70%)',
                        transform: 'translate(-30%, -30%)',
                    }}
                />

                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 pt-7 pb-5 relative z-10"
                    style={{ borderBottom: '1px solid #3a3530' }}
                >
                    <div>
                        <p
                            className="text-xs font-semibold uppercase tracking-widest mb-1"
                            style={{ color: '#d4a574' }} // accent-primary
                        >
                            Let's create together
                        </p>
                        <h2 className="text-xl font-bold" style={{ color: '#ede8e2' }}>
                            Get in Touch
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        aria-label="Close drawer"
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
                        style={{
                            border: '1px solid #3a3530',
                            color: '#7a7268',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.color = '#ede8e2'
                                ; (e.currentTarget as HTMLButtonElement).style.borderColor = '#d4a574'
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.color = '#7a7268'
                                ; (e.currentTarget as HTMLButtonElement).style.borderColor = '#3a3530'
                        }}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 relative z-10">
                    {!submitted ? (
                        <>
                            {/* WhatsApp quick action */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full rounded-xl px-4 py-3.5 font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-100"
                                style={{
                                    background: 'rgba(212, 165, 116, 0.1)',
                                    border: '1px solid #d4a574',
                                    boxShadow: '0 4px 20px rgba(212, 165, 116, 0.15)',
                                    color: '#d4a574',
                                }}
                            >
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                                <span className="ml-auto text-xs font-normal opacity-70">Instant reply</span>
                            </a>

                            {/* Divider */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px" style={{ background: '#3a3530' }} />
                                <span className="text-xs uppercase tracking-widest" style={{ color: '#605856' }}>
                                    or send a message
                                </span>
                                <div className="flex-1 h-px" style={{ background: '#3a3530' }} />
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="drawer-name"
                                        className="block text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: '#7a7268' }}
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        ref={firstInputRef}
                                        id="drawer-name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter Your Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        style={{ ...inputBase }}
                                        onFocus={e => (e.target.style.borderColor = '#d4a574')}
                                        onBlur={e => (e.target.style.borderColor = '#3a3530')}
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="drawer-email"
                                        className="block text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: '#7a7268' }}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="drawer-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        style={{ ...inputBase }}
                                        onFocus={e => (e.target.style.borderColor = '#d4a574')}
                                        onBlur={e => (e.target.style.borderColor = '#3a3530')}
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="drawer-message"
                                        className="block text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: '#7a7268' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="drawer-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your space, vision, or just say hello…"
                                        value={form.message}
                                        onChange={handleChange}
                                        style={{ ...inputBase, resize: 'none' }}
                                        onFocus={e => (e.target.style.borderColor = '#d4a574')}
                                        onBlur={e => (e.target.style.borderColor = '#3a3530')}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-100"
                                    style={{
                                        background: 'linear-gradient(135deg, #d4a574 0%, #e8b76d 100%)',
                                        color: '#1f1b16',
                                        boxShadow: '0 4px 20px rgba(212,165,116,0.3)',
                                    }}
                                    disabled
                                >
                                    <Send size={16} />
                                    Coming Soon...
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Success state */
                        <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{ background: 'rgba(212,165,116,0.15)' }}
                            >
                                <CheckCircle size={32} style={{ color: '#d4a574' }} />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: '#ede8e2' }}>
                                Message sent!
                            </h3>
                            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#7a7268' }}>
                                Your email client should have opened with the message ready. Talk soon!
                            </p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold transition mt-2"
                                style={{ color: '#d4a574' }}
                            >
                                <MessageCircle size={16} />
                                Or follow up on WhatsApp
                            </a>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    className="px-6 py-4 flex items-center gap-2 relative z-10"
                    style={{ borderTop: '1px solid #3a3530' }}
                >
                    <Mail size={14} style={{ color: '#4a4540', flexShrink: 0 }} />
                    <p className="text-xs" style={{ color: '#4a4540' }}>
                        contact@example.com · Replies within 24 hours
                    </p>
                </div>
            </aside>
        </>
    )
}
