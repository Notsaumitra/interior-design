'use client'

import { useEffect, useRef, useState } from 'react'

const COLORS = [
    '#d4a574', '#e8b76d', // Theme gold colors
    '#F9A8D4', '#FCA5A5', '#FCD34D', '#6EE7B7', // Pastel brights
    '#93C5FD', '#C4B5FD', '#FB923C', '#FBBF24',
]

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    color: string
    size: number
    shape: 'rect' | 'circle'
    tilt: number
    tiltAngle: number
    tiltAngleInc: number
}

function makeCannonParticles(count: number, x: number, y: number, isLeft: boolean): Particle[] {
    return Array.from({ length: count }, () => {
        // Left cannon shoots right-up, Right cannon shoots left-up
        const angle = isLeft ? (Math.random() * 45 + 45) : (Math.random() * 45 + 90)
        const rad = (angle * Math.PI) / 180
        const velocity = 15 + Math.random() * 15 // powerful blast

        return {
            x,
            y,
            vx: Math.cos(rad) * velocity,
            vy: -Math.sin(rad) * velocity, // Negative because Y goes down
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: 8 + Math.random() * 10,
            shape: Math.random() > 0.5 ? 'rect' : 'circle',
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngle: 0,
            tiltAngleInc: (Math.random() * 0.07) + 0.05,
        }
    })
}

export default function Confetti() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [visible, setVisible] = useState(true)
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Fire from both bottom corners
        let particles = [
            ...makeCannonParticles(120, 0, canvas.height, true),
            ...makeCannonParticles(120, canvas.width, canvas.height, false)
        ]

        const start = performance.now()
        const duration = 5000 // Doubled time to ~5 seconds
        const gravity = 0.35 // Pulls them down
        const friction = 0.99 // Slows down horizontal movement slightly

        const draw = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            
            // Fade out beautifully in the last 1 second
            const alpha = progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.globalAlpha = alpha

            particles.forEach(p => {
                // Physics
                p.vy += gravity
                p.vx *= friction
                p.x += p.vx
                p.y += p.vy

                // Tumbling / 3D effect
                p.tiltAngle += p.tiltAngleInc
                
                // Add some natural side-to-side drift as they fall
                const drift = Math.sin(p.tiltAngle - p.tilt) * 1.5
                p.x += drift

                ctx.save()
                ctx.translate(p.x, p.y)
                ctx.rotate(p.tiltAngle)
                
                // Scale Y to simulate 3D flipping
                const scaleY = Math.abs(Math.cos(p.tiltAngle))
                ctx.scale(1, scaleY)

                ctx.fillStyle = p.color
                if (p.shape === 'circle') {
                    ctx.beginPath()
                    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
                    ctx.fill()
                } else {
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
                }
                ctx.restore()
            })

            // Filter out particles that are way off screen to save performance
            particles = particles.filter(p => p.y < canvas.height + 100)

            if (elapsed < duration && particles.length > 0) {
                frameRef.current = requestAnimationFrame(draw)
            } else {
                setVisible(false)
            }
        }

        frameRef.current = requestAnimationFrame(draw)

        return () => {
            window.removeEventListener('resize', resize)
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [])

    if (!visible) return null

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 9999 }}
        />
    )
}
