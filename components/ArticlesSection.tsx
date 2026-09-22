import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, BookOpen } from 'lucide-react'

export default function ArticlesSection() {
    return <section id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
        <div className="flex items-end justify-between gap-4 mb-8">
            <div>
                <p className="mono text-xs uppercase tracking-[.14em] text-[var(--muted-text)] mb-3">Articles</p>
                <h2 className="section-title">Notes on making games.</h2>
                <p className="text-[var(--muted-text)] mt-2 max-w-xl">Straightforward writing about Unity, production, and the decisions that affect your next game.</p>
            </div>
        </div>
        <Link href="/articles/game-dev-and-unity-2027" className="group block card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
            <div className="grid lg:grid-cols-[.7fr_1.3fr]">
                <div className="relative min-h-[250px] bg-[var(--paper-deep)]"><Image src="/article1.png" alt="Game development and Unity in 2027" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>
                <div className="p-7 sm:p-10 flex flex-col justify-center"><div className="w-11 h-11 rounded-xl bg-[var(--signal-lime)]/15 border border-[var(--signal-lime)]/30 flex items-center justify-center mb-6"><BookOpen size={20} className="text-[var(--signal-lime)]" /></div><p className="mono text-xs uppercase tracking-[.14em] text-[var(--cobalt)] mb-3">Unity outlook · 2027</p><h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">Game Dev and Unity in 2027</h3><p className="text-[var(--muted-text)] leading-relaxed text-base sm:text-lg mt-5">Unity 7, CoreCLR, ECS and GameObjects, Production Verification, and what the public roadmap means for teams planning production into 2027.</p><div className="mt-6 flex items-center justify-between gap-3"><div className="flex items-center gap-3 text-xs mono uppercase tracking-wide text-[var(--muted-text)]"><span>Bernady Krzysztof</span><span className="w-1 h-1 rounded-full bg-[var(--signal-lime)]" /><span>5 min read</span></div><span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--cobalt)]">Read <ArrowUpRight size={16} /></span></div></div>
            </div>
        </Link>
    </section>
}
