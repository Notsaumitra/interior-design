import { ArrowRight } from 'lucide-react'

interface Project {
    id: number
    title: string
    category: string
    description: string
    image: string
}

interface ProjectCardProps {
    project: Project
    onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
    return (
        <div className="group cursor-pointer" onClick={() => onOpen(project)}>
            {/* Image Container */}
            <div className="relative mb-4">
                {/* Glow behind the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-warm to-accent-secondary rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative overflow-hidden rounded-lg h-48 bg-gradient-to-br from-neutral-800 to-neutral-950 border-2 border-neutral-700 group-hover:border-accent-primary/50 transition-all duration-300">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <button
                onClick={(e) => { e.stopPropagation(); onOpen(project) }}
                className="flex items-center gap-2 mt-3 text-accent-primary text-sm font-semibold group-hover:gap-3 group-hover:text-accent-warm transition-all duration-300"
            >
                View Project
                <ArrowRight size={16} />
            </button>
        </div>
    )
}
