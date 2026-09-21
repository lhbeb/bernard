import Link from 'next/link'
import Image from 'next/image'
import { Gamepad2, Zap } from 'lucide-react'
import LinkedInLink from './LinkedInLink'

export default function Footer() {
    return (
        <footer className="border-t border-[#1f2433] bg-[#0a0c10] mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#39ff8a]/10 border border-[#39ff8a]/30 flex items-center justify-center">
                                <Gamepad2 size={16} className="text-[#39ff8a]" />
                            </div>
                            <span className="font-bold text-white text-sm tracking-tight">
                                Bernady<span className="text-[#39ff8a]">.</span>dev
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-5">
                            Unity projects, game assets, scripts, templates, and experiments for indie developers building playable worlds.
                        </p>

                        {/* Avatar strip */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#2d3348]">
                                <Image src="/story.jpg" alt="Bernady Krzysztof" width={40} height={40} className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-slate-300">Bernady Krzysztof</div>
                                <div className="text-[11px] text-slate-500">Indie Game Developer</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Navigate</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Browse Resources', href: '/' },
                                { label: 'Collections', href: '/collections' },
                                { label: 'Free Assets', href: '/#freebies' },
                                { label: 'About', href: '/about' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#39ff8a] transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#39ff8a]/40" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal + Support */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Legal</h3>
                        <ul className="space-y-2.5 mb-6">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'License Agreement', href: '/license' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#39ff8a] transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#39ff8a]/40" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://buymeacoffee.com/bernadykrz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#39ff8a]/10 hover:bg-[#39ff8a]/15 border border-[#39ff8a]/30 text-[#39ff8a] text-sm font-bold px-4 py-2.5 rounded-xl transition-all"
                        >
                            ☕ Support My Work
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#1f2433] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-600 font-mono">© 2026 Bernady Krzysztof. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <LinkedInLink className="text-slate-600 hover:text-slate-300 transition-colors" />
                        <p className="text-xs text-slate-600 flex items-center gap-1">
                            Made with <Zap size={11} className="text-[#39ff8a]" /> for indie devs
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
