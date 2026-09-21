'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Mail, ArrowUpRight, CheckCircle, Gamepad2, Sparkles, Zap } from 'lucide-react'

export default function ProfileHero() {
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [following, setFollowing] = useState(false)

    function handleFollow() {
        if (following) { setFollowing(false); return }
        setShowModal(true)
    }

    function handleSubscribe(e: React.FormEvent) {
        e.preventDefault()
        if (!email) return
        setSubmitted(true)
        setFollowing(true)
        fetch('/api/notify-follow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, pageUrl: window.location.href, userAgent: navigator.userAgent }),
        }).catch(() => { })
        setTimeout(() => { setShowModal(false); setSubmitted(false); setEmail('') }, 2200)
    }

    const stats = [
        { label: 'Games Built', value: '35+' },
        { label: 'Unity Assets', value: '50+' },
        { label: 'Indie Devs', value: '1.2K' },
    ]

    return (
        <>
            {/* ── Hero Banner — bernard1.jpeg (GDS2027 keynote) ── */}
            <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <Image
                    src="/bernard1.jpeg"
                    alt="Bernady Krzysztof speaking at GDS2027 Game Dev Summit"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* dark gradient overlay so text/profile card reads clearly */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0d0f14]" />
                {/* scanline texture for that retro gaming feel */}
                <div className="absolute inset-0 scanline opacity-30" />

                {/* GDS badge floating in top-right */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-[#39ff8a]/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39ff8a] animate-pulse" />
                    <span className="text-[#39ff8a] text-xs font-mono font-bold">GDS2027 Speaker</span>
                </div>
            </div>

            {/* ── Profile Card ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-8 relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6">

                    {/* Avatar — avatarpng.jpg (professional desk shot) */}
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#39ff8a]/50 shadow-xl shadow-black/40 ring-4 ring-[#0d0f14]">
                            <Image
                                src="/avatarpng.jpg"
                                alt="Bernady Krzysztof"
                                width={112}
                                height={112}
                                className="object-cover object-center w-full h-full"
                                priority
                            />
                        </div>
                        {/* online dot */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#39ff8a] border-2 border-[#0d0f14] shadow-sm animate-pulse-glow" />
                    </div>

                    {/* Name + meta */}
                    <div className="flex-1 min-w-0 pb-1">
                        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Bernady Krzysztof
                            </h1>
                            <span className="inline-flex items-center gap-1 bg-[#39ff8a]/10 border border-[#39ff8a]/30 text-[#39ff8a] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                <Gamepad2 size={10} /> Indie Game Developer
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-3">
                            I build playable worlds with Unity 3D. Explore projects, assets, scripts, templates,
                            and practical resources to help indie developers ship their games.
                        </p>
                        {/* Stats */}
                        <div className="flex items-center gap-5">
                            {stats.map(s => (
                                <div key={s.label} className="flex items-baseline gap-1.5">
                                    <span className="text-base font-bold text-white font-mono">{s.value}</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-row md:flex-col gap-2.5 flex-shrink-0 w-full md:w-auto">
                        <button
                            onClick={handleFollow}
                            className={`inline-flex items-center justify-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                following
                                    ? 'bg-[#13161d] border border-[#39ff8a]/40 text-[#39ff8a]'
                                    : 'bg-[#39ff8a] hover:brightness-110 text-[#0d0f14] shadow-lg shadow-[#39ff8a]/20 hover:scale-105'
                            }`}
                        >
                            {following ? <><CheckCircle size={14} /> Following</> : <>Follow</>}
                        </button>
                        <a
                            href="#product-grid"
                            className="inline-flex items-center justify-center gap-2 bg-[#13161d] hover:bg-[#181c25] border border-[#1f2433] hover:border-[#2d3348] text-slate-300 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                        >
                            Browse Assets <ArrowUpRight size={13} />
                        </a>
                        <a
                            href="https://buymeacoffee.com/bernadykrz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#FFDD00] hover:brightness-105 text-[#0d0f14] font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                        >
                            ☕ Support
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#1f2433] mt-8" />
            </section>

            {/* ── Newsletter Modal ── */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <div
                        className="relative z-10 bg-[#13161d] border border-[#2d3348] rounded-3xl p-8 w-full max-w-md shadow-2xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1f2433] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={15} />
                        </button>

                        {submitted ? (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 rounded-full bg-[#39ff8a]/10 border border-[#39ff8a]/30 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} className="text-[#39ff8a]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">You&apos;re in!</h3>
                                <p className="text-slate-400 text-sm">Welcome! I&apos;ll send new tutorials, assets, and creative breakdowns.</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#39ff8a]/30 flex-shrink-0">
                                        <Image src="/avatarpng.jpg" alt="Bernady Krzysztof" width={48} height={48} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">Bernady Krzysztof</div>
                                        <div className="text-[11px] text-[#39ff8a]">invites you to follow the build</div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="inline-flex items-center gap-1.5 bg-[#39ff8a]/10 border border-[#39ff8a]/30 rounded-full px-3 py-1 mb-3">
                                        <Mail size={12} className="text-[#39ff8a]" />
                                        <span className="text-xs font-semibold text-[#39ff8a]">Dev Newsletter</span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">
                                        Go from an idea<br />to a playable game
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Unity projects, free assets, devlogs, and indie game-dev resources — straight to your inbox.
                                    </p>
                                </div>

                                <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                                    <div className="relative">
                                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="w-full bg-[#0d0f14] border border-[#1f2433] focus:border-[#39ff8a]/60 rounded-xl pl-10 pr-4 py-3 text-slate-200 placeholder-slate-500 outline-none transition-colors text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#39ff8a] hover:brightness-110 text-[#0d0f14] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#39ff8a]/20"
                                    >
                                        Get Developer Updates <Sparkles size={15} />
                                    </button>
                                    <p className="text-[11px] text-slate-500 text-center">No spam. Unsubscribe anytime.</p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
