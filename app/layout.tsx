import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VisitorNotifier from '@/components/VisitorNotifier'

export const metadata: Metadata = {
    metadataBase: new URL('https://bernadykrz.shop'),
    title: 'BernadyKrz.shop | Learn Game Development with Unity Source Code',
    description: 'Bernady Krzysztof is a Polish-Israeli game developer based in Tel Aviv who teaches game development through Unity source code, premium foundations, and 1:1 Zoom coaching.',
    keywords: 'Bernady Krzysztof, Polish Israeli game developer, Tel Aviv game developer, learn game development, Unity source code, free game source code, premium game source code, 1:1 game development coaching',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png' },
    openGraph: {
        title: 'BernadyKrz.shop | Learn Game Development',
        description: 'Free educational source code, premium game foundations, and 1:1 coaching from Polish-Israeli indie developer Bernady Krzysztof, based in Tel Aviv.',
        url: '/', siteName: 'BernadyKrz.shop', images: [{ url: '/bernard1.jpeg', width: 1200, height: 630, alt: 'Bernard Krzysztof building Unity projects' }], type: 'website',
    },
    twitter: { card: 'summary_large_image', title: 'BernadyKrz.shop | Learn Game Development', description: 'Learn Unity from working source code, buy reskinnable game foundations, or book 1:1 coaching with a Tel Aviv-based Polish-Israeli developer.', images: ['/bernard1.jpeg'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body className="min-h-screen bg-[#f5f1e8] text-[#111318] antialiased"><VisitorNotifier /><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>
}
