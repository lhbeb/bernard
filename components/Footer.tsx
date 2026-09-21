import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Zap } from 'lucide-react'
import LinkedInLink from './LinkedInLink'

const INSTAGRAM_URL = 'https://www.instagram.com/bernardy_games'

export default function Footer() {
    const shopLinks = [
        { label: 'All source code', href: '/' },
        { label: 'Learn free', href: '/#freebies' },
        { label: 'Buy foundations', href: '/#premium' },
        { label: 'About Bernard', href: '/about' },
    ]
    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'License Agreement', href: '/license' },
    ]

    return (
        <footer className="border-t border-[#2a2d35] bg-[#111318] text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-[#b8f23a] text-[#111318] flex items-center justify-center font-display font-bold text-sm">BK</div>
                            <span className="font-display font-bold text-white">BernardKrz<span className="text-[#b8f23a]">.shop</span></span>
                        </div>
                        <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-5">Learn game development from working Unity source code, premium foundations, and direct coaching.</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15"><Image src="/avatar.png" alt="Bernady Krzysztof profile photo" width={40} height={40} className="object-cover w-full h-full" /></div>
                            <div><div className="text-xs font-semibold text-white/85">Bernady Krzysztof</div><div className="text-[11px] text-white/45">Indie game developer</div></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mono text-xs font-semibold text-white/50 uppercase tracking-[.14em] mb-4">Learn and build</h3>
                        <ul className="space-y-3">{shopLinks.map(link => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 hover:text-[#b8f23a] transition-colors">{link.label}</Link></li>)}</ul>
                    </div>
                    <div>
                        <h3 className="mono text-xs font-semibold text-white/50 uppercase tracking-[.14em] mb-4">Coaching and legal</h3>
                        <ul className="space-y-3 mb-6">{legalLinks.map(link => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 hover:text-[#b8f23a] transition-colors">{link.label}</Link></li>)}</ul>
                        <a href="/about#coaching" className="inline-flex items-center gap-2 rounded-full bg-[#b8f23a] text-[#111318] text-sm font-bold px-4 py-2.5">Ask about 1:1 coaching</a>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/35 mono">© 2026 BernardKrz.shop. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <LinkedInLink className="text-white/40 hover:text-white transition-colors" />
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Bernard Games on Instagram" className="text-white/40 hover:text-[#f5a3c7] transition-colors"><Instagram size={18} /></a>
                        <p className="text-xs text-white/35 flex items-center gap-1">Made with <Zap size={11} className="text-[#b8f23a]" /> for indie devs</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
