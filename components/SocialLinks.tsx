'use client'

import { useState } from 'react'
import { Mail, ArrowUpRight, CheckCircle } from 'lucide-react'

export default function EmailSection() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email) return
        setSubmitted(true)
        setTimeout(() => { setSubmitted(false); setEmail('') }, 3000)
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="bg-[#13161d] border border-[#1f2433] rounded-3xl p-8 sm:p-12 text-center">

                <div className="w-14 h-14 rounded-2xl bg-[#39ff8a]/10 border border-[#39ff8a]/25 flex items-center justify-center mx-auto mb-5">
                    <Mail size={24} className="text-[#39ff8a]" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Get New Unity Projects & Resources</h2>
                <p className="text-sm text-slate-500 mb-7 max-w-sm mx-auto leading-relaxed">
                    Get notified when new Unity projects, free assets, scripts, templates, and game-development experiments are released.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-2 text-[#39ff8a] font-semibold">
                        <CheckCircle size={20} />
                        You&apos;re in! I&apos;ll notify you about new developer resources.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <div className="relative flex-1">
                            <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                id="email-section-input"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full bg-[#0d0f14] border border-[#1f2433] focus:border-[#39ff8a]/60 rounded-xl pl-10 pr-4 py-3 text-slate-200 placeholder-slate-500 outline-none transition-colors text-sm"
                            />
                        </div>
                        <button
                            id="email-section-submit"
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-[#39ff8a] hover:brightness-110 text-[#0d0f14] font-bold px-5 py-3 rounded-xl transition-all text-sm shadow-lg shadow-[#39ff8a]/20 hover:scale-105 whitespace-nowrap"
                        >
                            Get Updates <ArrowUpRight size={15} />
                        </button>
                    </form>
                )}

                <p className="text-[11px] text-slate-600 mt-4">No spam, unsubscribe anytime.</p>
            </div>
        </section>
    )
}
