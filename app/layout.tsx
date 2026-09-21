import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VisitorNotifier from '@/components/VisitorNotifier'

export const metadata: Metadata = {
    metadataBase: new URL('https://bernardkrz.shop'),
    title: 'BernardKrz.shop | Practical Unity Resources for Indie Developers',
    description: 'Practical Unity projects, systems, tools, and templates made by an indie developer for developers building their next game.',
    keywords: 'BernardKrz.shop, Unity resources, Unity assets, indie game development, Unity systems, game templates',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png' },
    openGraph: {
        title: 'BernardKrz.shop | Practical Unity Resources',
        description: 'Build the first playable version of your game with practical Unity resources from Bernard Krzysztof.',
        url: '/', siteName: 'BernardKrz.shop', images: [{ url: '/bernard1.jpeg', width: 1200, height: 630, alt: 'Bernard Krzysztof building Unity projects' }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: 'BernardKrz.shop | Practical Unity Resources', description: 'Unity projects, systems, tools, and templates for indie developers.', images: ['/bernard1.jpeg'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body className="min-h-screen bg-[#f5f1e8] text-[#111318] antialiased"><VisitorNotifier /><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>
}
