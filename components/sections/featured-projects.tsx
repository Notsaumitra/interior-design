'use client'

import ProjectCard from '@/components/projects/project-card'

const projects = [
    {
        id: 1,
        title: 'Modern Living Room',
        category: 'Living Room',
        description: 'Minimalist design with warm tones',
        image: 'https://via.placeholder.com/400x300?text=Living+Room',
    },
    {
        id: 2,
        title: 'Contemporary Kitchen',
        category: 'Kitchen',
        description: 'Sleek and functional design',
        image: 'https://via.placeholder.com/400x300?text=Kitchen',
    },
    {
        id: 3,
        title: 'Cozy Bedroom',
        category: 'Bedroom',
        description: 'Serene and comfortable space',
        image: 'https://via.placeholder.com/400x300?text=Bedroom',
    },
    {
        id: 4,
        title: 'Elegant Bathroom',
        category: 'Bathroom',
        description: 'Luxury meets simplicity',
        image: 'https://via.placeholder.com/400x300?text=Bathroom',
    },
]

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-20 bg-neutral-900">
            <div className="container">
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
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
