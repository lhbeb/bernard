'use client'

import Link from 'next/link'
import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Menu, X, Search, ArrowUpRight } from 'lucide-react'

function NavbarContent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [query, setQuery] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(() => { setQuery(searchParams.get('q') ?? '') }, [searchParams])
    function handleSearch(value: string) { setQuery(value); const params = new URLSearchParams(searchParams.toString()); if (value) params.set('q', value); else params.delete('q'); router.replace(`/?${params}`, { scroll: false }) }
    const links = [{ href: '/#product-grid', label: 'Source code' }, { href: '/#freebies', label: 'Learn free' }, { href: '/#premium', label: 'Buy foundations' }, { href: '/about#coaching', label: '1:1 coaching' }]
    return <nav className="sticky top-0 z-50 bg-[#f5f1e8]/95 backdrop-blur-md border-b border-[#d9d5cc]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-[72px] gap-5"><Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group"><span className="w-9 h-9 rounded-xl bg-[#111318] text-[#b8f23a] flex items-center justify-center font-display font-bold text-sm">BK</span><span className="font-display font-bold text-[#111318] tracking-tight">BernardKrz<span className="text-[#315cff]">.shop</span></span></Link><div className="hidden lg:flex flex-1 max-w-sm mx-auto"><div className="relative w-full"><Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6f726f]" /><input type="search" placeholder="Search source code" value={query} onChange={(e) => handleSearch(e.target.value)} className="w-full bg-[#fffdf8] border border-[#d9d5cc] focus:border-[#111318] rounded-full pl-10 pr-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6f726f] outline-none" /></div></div><div className="hidden md:flex items-center gap-5"><div className="flex items-center gap-4">{links.map(link => <Link key={link.href} href={link.href} className="text-sm font-semibold text-[#6f726f] hover:text-[#111318] transition-colors">{link.label}</Link>)}</div><Link href="/#freebies" className="inline-flex items-center gap-1.5 rounded-full bg-[#111318] text-white px-4 py-2.5 text-xs font-bold hover:bg-[#1b1e26] transition-colors">Start learning <ArrowUpRight size={13} /></Link></div><button className="md:hidden p-2 text-[#111318]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></div>{menuOpen && <div className="md:hidden border-t border-[#d9d5cc] bg-[#fffdf8] px-4 py-4"><div className="relative mb-4"><Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6f726f]" /><input type="search" placeholder="Search source code" value={query} onChange={(e) => handleSearch(e.target.value)} className="w-full bg-[#f5f1e8] border border-[#d9d5cc] rounded-full pl-10 pr-4 py-2.5 text-sm outline-none" /></div><div className="flex flex-col gap-3">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-[#6f726f]">{link.label}</Link>)}</div></div>}</nav>
}
export default function Navbar() { return <Suspense fallback={<div className="h-[72px] bg-[#f5f1e8] border-b border-[#d9d5cc]" />}><NavbarContent /></Suspense> }
