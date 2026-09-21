'use client'

import { useState } from 'react'
import { Mail, ArrowUpRight, CheckCircle } from 'lucide-react'

export default function EmailSection() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function handleSubmit(e: React.FormEvent) { e.preventDefault(); if (!email) return; setSubmitted(true); setTimeout(() => { setSubmitted(false); setEmail('') }, 3000) }
    return <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"><div className="bg-[#fffdf8] border border-[#d9d5cc] rounded-[2rem] p-8 sm:p-12 text-center"><div className="w-14 h-14 rounded-2xl bg-[#111318] flex items-center justify-center mx-auto mb-5"><Mail size={24} className="text-[#b8f23a]" /></div><p className="mono text-xs uppercase tracking-[.14em] text-[#6f726f] mb-3">Free updates</p><h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111318] mb-2">Get new code and lessons.</h2><p className="text-sm text-[#6f726f] mb-7 max-w-md mx-auto leading-relaxed">New educational projects, premium releases, and practical game-development lessons. No filler; unsubscribe anytime.</p>{submitted ? <div className="flex items-center justify-center gap-2 text-[#4d7000] font-semibold"><CheckCircle size={20} /> You&apos;re subscribed.</div> : <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"><div className="relative flex-1"><Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6f726f]" /><input id="email-section-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-[#f5f1e8] border border-[#d9d5cc] focus:border-[#111318] rounded-xl pl-10 pr-4 py-3 text-[#111318] placeholder:text-[#6f726f] outline-none text-sm" /></div><button id="email-section-submit" type="submit" className="inline-flex items-center justify-center gap-2 bg-[#111318] text-white font-bold px-5 py-3 rounded-xl transition-all text-sm whitespace-nowrap">Get the updates <ArrowUpRight size={15} /></button></form>}</div></section>
}
