import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BirthdayOverlay from '@/components/ui/birthday-overlay'

export const metadata: Metadata = {
    title: "Saloni's Studio",
    description: 'A beautiful portfolio showcasing modern interior design projects and inspiration',
    viewport: 'width=device-width, initial-scale=1',
    icons: {
        icon: '/favicon.webp',
        shortcut: '/favicon.webp',
        apple: '/favicon.webp',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <BirthdayOverlay />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
