'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Menu, X, Zap, Store, Box, Search, Gamepad2 } from 'lucide-react'
import LinkedInLink from './LinkedInLink'

function NavbarContent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [query, setQuery] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        setQuery(searchParams.get('q') ?? '')
    }, [searchParams])

    function handleSearch(value: string) {
        setQuery(value)
        const params = new URLSearchParams(searchParams.toString())
        if (value) { params.set('q', value) } else { params.delete('q') }
        router.replace(`/?${params}`, { scroll: false })
    }

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0f14]/90 border-b border-[#1f2433]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-[#39ff8a]/10 border border-[#39ff8a]/30 flex items-center justify-center">
                            <Gamepad2 size={16} className="text-[#39ff8a]" />
                        </div>
                        <span className="font-bold text-white text-sm tracking-tight group-hover:text-[#39ff8a] transition-colors">
                            Bernady<span className="text-[#39ff8a]">.</span>dev
                        </span>
                    </Link>

                    {/* Search */}
                    <div className="hidden md:flex flex-1 max-w-sm mx-auto">
                        <div className="relative w-full">
                            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                            <input
                                id="navbar-search"
                                type="search"
                                placeholder="Search Unity resources..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full bg-[#13161d] border border-[#1f2433] hover:border-[#2d3348] focus:border-[#39ff8a]/60 rounded-full pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-1.5 group/link">
                            <Box size={14} className="text-slate-500 group-hover/link:text-[#39ff8a] transition-colors" />
                            <span className="text-sm text-slate-400 group-hover/link:text-slate-200 transition-colors">Resources</span>
                        </Link>
                        <Link href="/#freebies" className="flex items-center gap-1.5 group/link">
                            <Zap size={14} className="text-slate-500 group-hover/link:text-[#39ff8a] transition-colors" />
                            <span className="text-sm text-slate-400 group-hover/link:text-slate-200 transition-colors">Free Assets</span>
                        </Link>
                        <a href="/collections" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group/link">
                            <Store size={14} className="text-slate-500 group-hover/link:text-[#39ff8a] transition-colors" />
                            <span className="text-sm text-slate-400 group-hover/link:text-slate-200 transition-colors">Projects</span>
                        </a>
                        <LinkedInLink className="text-slate-500 hover:text-slate-200 transition-colors" />
                        <a
                            href="https://buymeacoffee.com/bernadykrz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#39ff8a]/10 hover:bg-[#39ff8a]/20 border border-[#39ff8a]/30 text-[#39ff8a] text-xs font-bold px-4 py-2 rounded-full transition-all"
                        >
                            ☕ Support
                        </a>
                    </div>

                    {/* Mobile button */}
                    <button
                        className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#13161d] transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-[#1f2433] bg-[#0d0f14]">
                    <div className="px-4 py-4 flex flex-col gap-3">
                        <div className="relative mb-1">
                            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                            <input
                                type="search"
                                placeholder="Search resources..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full bg-[#13161d] border border-[#1f2433] rounded-full pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 outline-none"
                            />
                        </div>
                        {[
                            { href: '/', icon: <Box size={14} />, label: 'Resources' },
                            { href: '/#freebies', icon: <Zap size={14} />, label: 'Free Assets' },
                            { href: '/collections', icon: <Store size={14} />, label: 'Projects' },
                        ].map(({ href, icon, label }) => (
                            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-2 text-sm text-slate-400 hover:text-[#39ff8a] transition-colors">
                                <span className="text-[#39ff8a]/60">{icon}</span>
                                {label}
                            </Link>
                        ))}
                        <a
                            href="https://buymeacoffee.com/bernadykrz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#39ff8a]/10 border border-[#39ff8a]/30 text-[#39ff8a] text-sm font-bold px-4 py-2.5 rounded-xl mt-1"
                        >
                            ☕ Support My Work
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default function Navbar() {
    return (
        <Suspense fallback={<div className="h-16 bg-[#0d0f14] border-b border-[#1f2433]" />}>
            <NavbarContent />
        </Suspense>
    )
}
