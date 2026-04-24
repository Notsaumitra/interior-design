'use client'

import { useEffect, useRef, useState } from 'react'

const COLORS = [
    '#F9A8D4', '#FCA5A5', '#FCD34D', '#6EE7B7',
    '#93C5FD', '#C4B5FD', '#FB923C', '#F472B6',
    '#34D399', '#FBBF24', '#A78BFA',
]

interface Particle {
    x: number
    y: number
    color: string
    size: number
    speedX: number
    speedY: number
    rotation: number
    rotationSpeed: number
    shape: 'rect' | 'circle'
}

function makeParticles(count: number, width: number): Particle[] {
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: -10 - Math.random() * 40,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
        speedX: (Math.random() - 0.5) * 2,
        speedY: 3 + Math.random() * 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
    }))
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

        let particles = makeParticles(150, canvas.width)
        const start = performance.now()
        const duration = 2200 // ms

        const draw = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // fade out in last 400ms
            const alpha = progress > 0.82 ? 1 - (progress - 0.82) / 0.18 : 1

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles = particles.map(p => ({
                ...p,
                x: p.x + p.speedX,
                y: p.y + p.speedY,
                rotation: p.rotation + p.rotationSpeed,
                // drift back to top once fallen off screen
                ...(p.y > canvas.height + 10 && progress < 0.7
                    ? { x: Math.random() * canvas.width, y: -10 }
                    : {}),
            }))

            ctx.globalAlpha = alpha
            particles.forEach(p => {
                ctx.save()
                ctx.translate(p.x, p.y)
                ctx.rotate((p.rotation * Math.PI) / 180)
                ctx.fillStyle = p.color
                if (p.shape === 'circle') {
                    ctx.beginPath()
                    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
                    ctx.fill()
                } else {
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
                }
                ctx.restore()
            })

            if (elapsed < duration) {
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
