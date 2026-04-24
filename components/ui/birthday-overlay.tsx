'use client'

import { useEffect, useState } from 'react'
import Confetti from './confetti'

export default function BirthdayOverlay() {
    const [show, setShow] = useState(false)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        // Check if it's the first time in this session
        const hasSeenSession = sessionStorage.getItem('birthday_seen')

        // Time logic: check if it's exactly April 25th and before 10 AM in IST
        const istDateString = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        const istTime = new Date(istDateString)

        // Month is 0-indexed (3 = April), Date is 1-indexed (25)
        const isApril25 = istTime.getMonth() === 3 && istTime.getDate() === 25
        const isBefore10AM = istTime.getHours() < 10

        if (isApril25 && isBefore10AM && !hasSeenSession) {
            setShow(true)
            sessionStorage.setItem('birthday_seen', 'true')
        }
    }, [])

    // Timer effect that depends on `show` being true
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setFade(true)
                setTimeout(() => setShow(false), 800) // wait for fade animation
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [show])

    if (!show) return null

    return (
        <div
            className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 transition-opacity duration-1000 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            {/* The epic 3D cannon confetti we just built */}
            <Confetti />

            {/* Dark elegant background overlay just in case */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-90"></div>

            {/* Message Content */}
            <div className="relative z-10 text-center space-y-6 px-6 max-w-3xl" style={{ animation: 'slideUpFade 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
                <p className="text-accent-primary uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4 drop-shadow-md">
                    A Special Surprise
                </p>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent-primary via-accent-warm to-accent-light bg-clip-text text-transparent pb-2 drop-shadow-lg">
                    Happy Birthday, Saloni! 🎉
                </h1>
                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto pt-4 drop-shadow">
                    Wishing you a spectacular day filled with joy, and a year full of beautiful designs and dreams coming true.
                </p>
            </div>

            <style>{`
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}
