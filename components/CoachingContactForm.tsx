'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle, Mail, UserRound } from 'lucide-react'

export default function CoachingContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', project: '', help: '' })

    function update(field: keyof typeof form, value: string) {
        setForm(current => ({ ...current, [field]: value }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return <div className="rounded-2xl border border-[#b8f23a]/30 bg-[#b8f23a]/[.07] p-6 sm:p-7"><CheckCircle className="text-[#b8f23a] mb-4" size={26} /><h3 className="font-bold text-xl mb-2">Request prepared.</h3><p className="text-sm text-white/60 leading-relaxed mb-5">Thanks, {form.name || 'there'}. This demo form is not connected to email yet. The request details are ready to connect to your preferred booking or contact workflow.</p><button type="button" onClick={() => setSubmitted(false)} className="text-sm font-bold text-[#b8f23a] hover:text-white transition-colors">Edit request</button></div>
    }

    return <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[.04] p-6 sm:p-7 space-y-4"><div><p className="mono text-[10px] uppercase tracking-[.14em] text-[#b8f23a] mb-2">Ask about a call</p><h3 className="font-display text-2xl font-bold">Tell me what you are building.</h3></div><div className="grid sm:grid-cols-2 gap-4"><label className="block"><span className="block text-xs font-semibold text-white/65 mb-2">Your name</span><div className="relative"><UserRound size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35" /><input required value={form.name} onChange={event => update('name', event.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-[#0d0f14] px-10 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#b8f23a]/60" /></div></label><label className="block"><span className="block text-xs font-semibold text-white/65 mb-2">Email</span><div className="relative"><Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35" /><input required type="email" value={form.email} onChange={event => update('email', event.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-[#0d0f14] px-10 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#b8f23a]/60" /></div></label></div><label className="block"><span className="block text-xs font-semibold text-white/65 mb-2">What are you building?</span><input required value={form.project} onChange={event => update('project', event.target.value)} placeholder="For example: a 2D platformer in Unity" className="w-full rounded-xl border border-white/10 bg-[#0d0f14] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#b8f23a]/60" /></label><label className="block"><span className="block text-xs font-semibold text-white/65 mb-2">What do you need help with?</span><textarea required rows={4} value={form.help} onChange={event => update('help', event.target.value)} placeholder="Describe the problem or the result you want from the call." className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0f14] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#b8f23a]/60" /></label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8f23a] text-[#111318] font-bold px-5 py-3 text-sm hover:brightness-105 transition-all">Prepare coaching request <ArrowUpRight size={15} /></button><p className="text-[11px] text-white/35">Demo form only — no data is sent or stored.</p></form>
}
