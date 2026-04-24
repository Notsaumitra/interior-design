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
            <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-700 group-hover:border-accent-primary/50 transition-colors duration-300">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300"></div>
                {/* Shine effect on hover */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <p className="text-accent-warm text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                </p>
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-accent-light transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-neutral-400 text-sm">{project.description}</p>
            </div>

            {/* Link */}
            <div className="flex items-center gap-2 mt-3 text-accent-primary text-sm font-semibold group-hover:gap-3 group-hover:text-accent-warm transition-all duration-300">
                View Project
                <ArrowRight size={16} />
            </div>
        </div>
    )
}
