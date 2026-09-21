import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VisitorNotifier from '@/components/VisitorNotifier'

export const metadata: Metadata = {
    metadataBase: new URL('https://bernadykrz.me'),
    title: 'Bernady Krzysztof | Unity Indie Game Developer',
    description: 'Bernady Krzysztof is an indie game developer sharing Unity 3D projects, game assets, scripts, templates, prototypes, and practical resources for developers.',
    keywords: 'Bernady Krzysztof, Unity 3D, indie game developer, Unity assets, game development scripts, game templates, prototypes',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png' },
    openGraph: {
        title: 'Bernady Krzysztof | Unity Indie Game Developer',
        description: 'Unity projects, downloadable assets, scripts, systems, and experiments from indie game developer Bernady Krzysztof.',
        url: '/',
        siteName: 'Bernady Krzysztof',
        images: [{ url: '/bernard1.jpeg', width: 1200, height: 630, alt: 'Bernady Krzysztof at GDS2027' }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bernady Krzysztof | Unity Indie Game Developer',
        description: 'Unity projects, assets, scripts, templates, and indie game development resources from Bernady Krzysztof.',
        images: ['/bernard1.jpeg'],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-[#0d0f14] text-slate-200 antialiased">
                <VisitorNotifier />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
