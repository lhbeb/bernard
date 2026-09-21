import Image from 'next/image'
import { ExternalLink, PenTool, Video, Library, Sparkles } from 'lucide-react'

export default function SupportSection() {
    const items = [
        { icon: PenTool, label: 'Unity prototypes' },
        { icon: Video, label: 'Game mechanics' },
        { icon: Library, label: 'Scripts and templates' },
        { icon: Sparkles, label: 'Indie experiments' },
    ]
    return <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[var(--ink)] text-white rounded-[2rem] overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                <div className="flex-1 w-full"><p className="mono text-xs uppercase tracking-[.14em] text-[var(--signal-lime)] mb-4">Need direct help?</p><h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6">Book a 1:1 game-development call.</h2><div className="space-y-4 text-white/65 leading-relaxed max-w-2xl mb-8"><p>I’m Bernady Krzysztof, an indie game developer. I teach people how to start making games, understand Unity, and turn an idea into a working project.</p><p>On a 1:1 Zoom call, we can review your project, solve a technical problem, plan your next steps, or work through the game-making process together.</p></div><div className="flex flex-wrap gap-2 mb-9">{items.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/70"><Icon size={14} className="text-[var(--signal-lime)]" />{label}</span>)}</div><div className="flex flex-col sm:flex-row gap-3"><a href="/about#coaching" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--signal-lime)] text-[var(--ink)] font-bold px-6 py-3 hover:brightness-105 transition-all"><Video size={17} /> Ask about a 1:1 call</a><a href="/collections" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"><ExternalLink size={16} /> View source code</a></div></div>
                <div className="relative w-full lg:w-[360px] aspect-[4/5] flex-shrink-0"><div className="absolute -inset-3 rounded-[1.5rem] border border-[var(--signal-lime)]/30 translate-x-3 translate-y-3" /><div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/15"><Image src="/bernard1.jpeg" alt="Bernady Krzysztof building Unity projects" fill className="object-cover object-top" sizes="360px" /></div></div>
            </div>
        </div>
    </section>
}
