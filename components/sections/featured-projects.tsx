'use client'

import { useState } from 'react'
import ProjectCard from '@/components/projects/project-card'
import ProjectModal from '@/components/projects/project-modal'

interface Project {
    id: number
    title: string
    category: string
    description: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Blush Tone Beauty Studio',
        category: 'Commercial',
        description: 'Soft pink salon interior with refined finishes and modern elegance',
        image: '/images/projects/salon/salon.webp',
    },
    {
        id: 2,
        title: 'Premium Dental Lounge',
        category: 'Healthcare',
        description: 'Modern dental clinic with warm lighting and sophisticated materials',
        image: '/images/projects/dental/dental_clinic.webp',
    },
    {
        id: 3,
        title: 'Contemporary Living Space',
        category: 'Residential',
        description: 'Warm minimal living room with layered lighting and natural textures',
        image: '/images/projects/living-room/living_room.webp',
    },
    {
        id: 4,
        title: 'Boutique Master Bedroom',
        category: 'Residential',
        description: 'Elegant bedroom blending soft tones, textures, and ambient lighting',
        image: '/images/projects/bedroom/bedroom.webp',
    },
]

export default function FeaturedProjects() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const openModal = (project: Project) => {
        const idx = projects.findIndex((p) => p.id === project.id)
        setActiveIndex(idx)
    }
    const closeModal = () => setActiveIndex(null)
    const goPrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))
    const goNext = () => setActiveIndex((i) => (i !== null && i < projects.length - 1 ? i + 1 : i))

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-3">
                    <p className="text-accent-warm font-semibold text-sm uppercase tracking-wide">
                        Portfolio
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Explore a curated selection of our recent interior design projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onOpen={openModal}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activeIndex !== null && (
                <ProjectModal
                    project={projects[activeIndex]}
                    onClose={closeModal}
                    onPrev={goPrev}
                    onNext={goNext}
                    hasPrev={activeIndex > 0}
                    hasNext={activeIndex < projects.length - 1}
                />
            )}
        </section>
    )
}

