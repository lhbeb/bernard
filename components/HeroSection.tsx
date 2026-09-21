'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Mail, ArrowUpRight, CheckCircle, Gamepad2, Sparkles } from 'lucide-react'

export default function ProfileHero() {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubscribe(e: React.FormEvent) {
        e.preventDefault()
        if (!email) return
        setSubmitted(true)
        fetch('/api/notify-follow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, pageUrl: window.location.href, userAgent: navigator.userAgent }) }).catch(() => {})
        setTimeout(() => { setShowModal(false); setSubmitted(false); setEmail('') }, 2200)
    }

    return (
        <>
            <section className="bg-[var(--ink)] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20">
                    <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 tag mb-6 bg-white/10 text-[var(--signal-lime)] border-white/15">
                                <Gamepad2 size={13} /> Bernady Krzysztof · indie game developer
                            </div>
                            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-.04em] leading-[1.02] max-w-3xl">
                                Learn game development. Start building.
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/65 max-w-2xl">
                                I’m a Polish-Israeli game developer currently based in Tel Aviv. I teach game development with practical Unity source code, clear explanations, and direct help from someone who builds games.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <a href="#freebies" className="btn-primary"><span>Get free source code</span><ArrowUpRight size={16} /></a>
                                <a href="#premium" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"><span>Shop premium source code</span><ArrowUpRight size={16} /></a>
                            </div>
                            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-6 border-t border-white/15 text-sm text-white/55">
                                <span><strong className="text-white">Free</strong> educational code</span>
                                <span><strong className="text-white">Premium</strong> reskinnable foundations</span>
                                <span><strong className="text-white">1:1</strong> Zoom coaching</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-5 rounded-[2rem] bg-[var(--signal-lime)]/10 blur-2xl" />
                            <div className="relative rounded-[1.5rem] overflow-hidden border border-white/15 bg-[var(--ink-soft)] shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-[11px] text-white/45 mono"><span>UNITY / SOURCE CODE</span><span className="text-[var(--signal-lime)]">READY TO LEARN</span></div>
                                <div className="aspect-[4/3] relative"><Image src="/bernard1.jpeg" alt="Bernady Krzysztof building Unity game projects" fill className="object-cover object-top" priority /></div>
                                <div className="p-5"><div className="text-xs text-[var(--signal-lime)] mono mb-2">WHAT YOU GET</div><p className="text-white/75 leading-relaxed">Free code to learn from. Premium code to reskin, build on, and turn into your own game.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                    <div><p className="mono text-xs uppercase tracking-[.14em] text-[var(--muted-text)] mb-3">The offer</p><h2 className="section-title max-w-xl">Learn from working code. Build faster.</h2></div>
                    <p className="text-[var(--muted-text)] max-w-md leading-relaxed">Use the free source code to learn. Buy a premium foundation when you want to reskin it, build on it, and sell your own game. Book a 1:1 Zoom call when you need direct help.</p>
                </div>
            </section>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <div className="relative z-10 bg-[var(--paper-bright)] text-[var(--ink)] border border-[var(--line)] rounded-3xl p-8 w-full max-w-md shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[var(--muted-text)] hover:text-[var(--ink)]"><X size={15} /></button>
                        {submitted ? <div className="text-center py-6"><div className="w-16 h-16 rounded-full bg-[var(--signal-lime)]/25 flex items-center justify-center mx-auto mb-4"><CheckCircle size={32} /></div><h3 className="text-xl font-bold mb-2">You&apos;re in.</h3><p className="text-[var(--muted-text)] text-sm">New builds and useful releases are on the way.</p></div> : <>
                            <div className="inline-flex items-center gap-1.5 tag tag-dark mb-4"><Mail size={12} /> Development notes</div>
                            <h3 className="font-display text-2xl font-bold mb-2">Get practical game-dev updates.</h3>
                            <p className="text-[var(--muted-text)] text-sm leading-relaxed">New source code, tutorials, and product updates. No filler; unsubscribe anytime.</p>
                            <form onSubmit={handleSubscribe} className="mt-5 space-y-3"><div className="relative"><Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted-text)]" /><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-[var(--paper)] border border-[var(--line)] focus:border-[var(--ink)] rounded-xl pl-10 pr-4 py-3 text-[var(--ink)] outline-none text-sm" /></div><button type="submit" className="w-full bg-[var(--signal-lime)] text-[var(--ink)] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">Join the workshop <Sparkles size={15} /></button></form>
                        </>}
                    </div>
                </div>
            )}
        </>
    )
}
