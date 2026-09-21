import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VisitorNotifier from '@/components/VisitorNotifier'

export const metadata: Metadata = {
    metadataBase: new URL('https://bernardkrz.shop'),
    title: 'BernardKrz.shop | Learn Game Development with Unity Source Code',
    description: 'Bernady Krzysztof teaches game development with free educational Unity source code, premium reskinnable game foundations, and 1:1 Zoom coaching.',
    keywords: 'Bernady Krzysztof, learn game development, Unity source code, free game source code, premium game source code, 1:1 game development coaching',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png' },
    openGraph: {
        title: 'BernardKrz.shop | Learn Game Development',
        description: 'Free educational source code, premium game foundations, and 1:1 coaching from indie developer Bernady Krzysztof.',
        url: '/', siteName: 'BernardKrz.shop', images: [{ url: '/bernard1.jpeg', width: 1200, height: 630, alt: 'Bernard Krzysztof building Unity projects' }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: 'BernardKrz.shop | Learn Game Development', description: 'Learn Unity from working source code, buy reskinnable game foundations, or book 1:1 coaching.', images: ['/bernard1.jpeg'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body className="min-h-screen bg-[#f5f1e8] text-[#111318] antialiased"><VisitorNotifier /><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>
}
