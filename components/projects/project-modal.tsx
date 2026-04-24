'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'

interface Project {
    id: number
    title: string
    category: string
    description: string
    image: string
}

interface ProjectModalProps {
    project: Project
    onClose: () => void
    onPrev: () => void
    onNext: () => void
    hasPrev: boolean
    hasNext: boolean
}

export default function ProjectModal({
    project,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: ProjectModalProps) {
    // Close on Escape, arrow keys to navigate
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft' && hasPrev) onPrev()
            if (e.key === 'ArrowRight' && hasNext) onNext()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose, onPrev, onNext, hasPrev, hasNext])

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
        >
            {/* Modal panel — stop click propagation so clicking inside doesn't close */}
            <div
                className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl"
                style={{ animation: 'modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-neutral-300 hover:text-white hover:bg-black/80 transition-all duration-200 border border-neutral-600"
                >
                    <X size={18} />
                </button>

                {/* Full-screen image */}
                <div className="relative w-full flex-1 min-h-0" style={{ minHeight: '55vh', maxHeight: '65vh' }}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 90vw"
                    />
                    {/* Subtle bottom gradient for text legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                </div>

                {/* Info bar */}
                <div className="flex items-center justify-between gap-4 px-6 py-5 bg-neutral-900">
                    <div className="space-y-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                            {project.category}
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-neutral-50 truncate">
                            {project.title}
                        </h2>
                        <p className="text-neutral-400 text-sm line-clamp-2">{project.description}</p>
                    </div>

                    {/* Prev / Next */}
                    <div className="flex gap-2 flex-shrink-0">
                        <button
                            onClick={onPrev}
                            disabled={!hasPrev}
                            aria-label="Previous project"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-600 text-neutral-400 hover:text-white hover:border-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={onNext}
                            disabled={!hasNext}
                            aria-label="Next project"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-600 text-neutral-400 hover:text-white hover:border-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.93) translateY(16px); }
                    to   { opacity: 1; transform: scale(1)    translateY(0);    }
                }
            `}</style>
        </div>
    )
}
