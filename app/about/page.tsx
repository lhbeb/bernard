import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Code2, Download, Gamepad2, Video } from 'lucide-react'
import CoachingContactForm from '@/components/CoachingContactForm'

export const metadata = {
    title: 'About Bernady Krzysztof | Game Development Teacher',
    description: 'Bernady Krzysztof is an indie game developer teaching game development through Unity source code, practical lessons, premium game foundations, and 1:1 Zoom calls.',
}

const offers = [
    { icon: Download, title: 'Free educational source code', desc: 'Download the free projects, read the code, and use them to understand how game systems are built.' },
    { icon: Code2, title: 'Premium game foundations', desc: 'Buy a complete source-code foundation, reskin it, build your own game on top, and sell the finished game.' },
    { icon: Video, title: '1:1 Zoom coaching', desc: 'Get direct help with Unity, game design, code, debugging, project planning, or your next step as a developer.' },
]

export default function AboutPage() {
    return <div className="min-h-screen bg-[#111318] text-white">
        <section className="border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 flex flex-col md:flex-row items-start gap-10 md:gap-14">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#b8f23a]/50 flex-shrink-0"><Image src="/avatar.png" alt="Bernady Krzysztof" fill className="object-cover" /></div>
                <div className="max-w-2xl"><div className="inline-flex items-center gap-2 bg-[#b8f23a]/10 border border-[#b8f23a]/25 text-[#b8f23a] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"><Gamepad2 size={12} /> Polish-Israeli game developer · Tel Aviv</div><h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-5">I teach people how to make games.</h1><p className="text-white/65 text-lg sm:text-xl leading-relaxed">I’m Bernady Krzysztof, a Polish-Israeli indie game developer currently based in Tel Aviv. This site is for developers who want to learn Unity, understand how games are made, and move from an idea to a working project.</p></div>
            </div>
        </section>
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 space-y-20">
            <section><p className="mono text-xs uppercase tracking-[.14em] text-[#b8f23a] mb-3">What I provide</p><h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">Clear resources. Useful code. Direct teaching.</h2><p className="text-white/65 text-lg leading-relaxed max-w-3xl">Most people get stuck because they start with an empty project and no clear path. I share working examples and explain how they work so you can build with less guesswork.</p></section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5">{offers.map(({ icon: Icon, title, desc }) => <article key={title} className="bg-white/[.04] border border-white/10 rounded-2xl p-6"><div className="w-10 h-10 rounded-xl bg-[#b8f23a]/10 border border-[#b8f23a]/20 flex items-center justify-center mb-5"><Icon size={18} className="text-[#b8f23a]" /></div><h3 className="font-bold text-lg mb-2">{title}</h3><p className="text-sm text-white/55 leading-relaxed">{desc}</p></article>)}</section>
            <section id="coaching" className="scroll-mt-24 grid md:grid-cols-[.8fr_1.2fr] gap-10 items-start"><div><p className="mono text-xs uppercase tracking-[.14em] text-[#b8f23a] mb-3">1:1 coaching</p><h2 className="font-display text-3xl font-bold mb-5">Bring your problem. Leave with a plan.</h2><div className="space-y-4 text-white/65 leading-relaxed"><p>Use a 1:1 Zoom call to review your project, understand a system, fix a technical issue, plan a prototype, or learn the next skill you need.</p><p>This is practical teaching for people who want to make progress—not a generic course and not vague motivation.</p></div></div><CoachingContactForm /></section>
            <section className="rounded-3xl bg-white/[.04] border border-white/10 p-8 sm:p-10"><h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Start with the free code.</h2><p className="text-white/55 max-w-xl leading-relaxed mb-7">Learn from an educational project first. When you need a stronger starting point, use a premium foundation to build and sell your own game.</p><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[#b8f23a] text-[#111318] font-bold px-5 py-3">Browse source code <ArrowUpRight size={16} /></Link></section>
        </div>
    </div>
}
