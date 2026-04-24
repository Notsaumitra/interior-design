import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
    project: {
        id: number
        title: string
        category: string
        description: string
        image: string
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-neutral-800 border border-neutral-700">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <p className="text-accent-warm text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                </p>
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-accent-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-400 text-sm">{project.description}</p>
            </div>

            {/* Link */}
            <div className="flex items-center gap-2 mt-3 text-accent-primary text-sm font-semibold group-hover:gap-3 transition-all">
                View Project
                <ArrowRight size={16} />
            </div>
        </div>
    )
}
