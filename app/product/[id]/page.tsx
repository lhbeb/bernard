'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftCircle, Loader2, Box, Ticket, Zap, Download, ShoppingCart, CheckCircle, X, CreditCard, Lock, Mail, User } from 'lucide-react'
import { supabase, Product } from '@/lib/supabase'

export default function ProductPage() {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()
    const [product, setProduct] = useState<Product | null>(null)
    const [activeImage, setActiveImage] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [showCheckout, setShowCheckout] = useState(false)
    const [checkoutStep, setCheckoutStep] = useState<'form' | 'processing' | 'done'>('form')
    const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '', cvc: '' })

    useEffect(() => {
        async function load() {
            const { data, error: fetchError } = await supabase
                .from('products').select('*').eq('id', id).single()
            if (fetchError || !data) {
                setError('Product not found.')
            } else {
                setProduct(data)
                if (data.images?.length > 0) setActiveImage(data.images[0])
                else if (data.thumbnail_url) setActiveImage(data.thumbnail_url)
            }
            setLoading(false)
        }
        load()
    }, [id])

    function formatCard(v: string) {
        return v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ')
    }
    function formatExpiry(v: string) {
        const d = v.replace(/\D/g, '').slice(0, 4)
        return d.length >= 3 ? d.slice(0, 2) + '/' + d.slice(2) : d
    }

    function handleCheckoutSubmit(e: React.FormEvent) {
        e.preventDefault()
        setCheckoutStep('processing')
        setTimeout(() => {
            setCheckoutStep('done')
            setTimeout(() => {
                router.push(`/thankyou?product=${encodeURIComponent(product?.title || '')}&price=${product?.price || 0}`)
            }, 1500)
        }, 2500)
    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center text-slate-500">
            <Loader2 className="animate-spin mr-3 text-[#b8f23a]" size={24} />
            <span className="font-mono text-sm">Loading product...</span>
        </div>
    )

    if (!product) return (
        <div className="min-h-screen flex flex-col items-center justify-center text-slate-500 gap-4">
            <Box size={48} className="opacity-30 text-[#b8f23a]" />
            <p className="text-lg font-medium text-white">{error || 'Product not found.'}</p>
            <Link href="/" className="text-sm text-[#b8f23a] hover:underline">← Back to homepage</Link>
        </div>
    )

    const isFree = !product.price || product.price === 0

    return (
        <div className="min-h-screen bg-[#0d0f14] text-slate-200">

            {/* Breadcrumb */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#b8f23a] transition-colors mb-8">
                    <ArrowLeftCircle size={16} /> Back to Products
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#13161d] border border-[#1f2433] shadow-2xl mb-4">
                            {activeImage ? (
                                <Image src={activeImage} alt={product.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                            ) : (
                                <div className="absolute inset-0 grid-bg flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-3xl bg-[#b8f23a]/8 border border-[#b8f23a]/20 flex items-center justify-center">
                                        <Box size={44} className="text-[#b8f23a]/40" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {product.images && product.images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 px-1">
                                {product.images.map((img, idx) => (
                                    <button key={idx} onClick={() => setActiveImage(img)}
                                        className={`relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-[#b8f23a] shadow-md shadow-[#b8f23a]/20' : 'border-[#1f2433] hover:border-[#2d3348]'}`}
                                    >
                                        <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 pt-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">{product.title}</h1>

                        <div className="mb-6">
                            {isFree ? (
                                <div className="inline-flex items-center gap-2 bg-[#b8f23a]/10 border border-[#b8f23a]/30 text-[#b8f23a] text-lg font-bold px-4 py-2 rounded-xl">
                                    <Zap size={18} /> Free
                                </div>
                            ) : (
                                <div className="inline-flex items-center gap-2 bg-[#13161d] border border-[#1f2433] text-white text-2xl font-bold px-5 py-2.5 rounded-xl font-mono">
                                    <Ticket size={18} className="text-[#fbbf24]" />
                                    ${product.price}
                                </div>
                            )}
                        </div>

                        {product.description && (
                            <div className="mb-8">
                                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Description</h2>
                                <div className="text-slate-400 leading-relaxed whitespace-pre-wrap text-sm">{product.description}</div>
                            </div>
                        )}

                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    if (isFree) {
                                        if (product.file_url) window.open(product.file_url, '_blank')
                                        else alert('Download file not available yet.')
                                    } else {
                                        setShowCheckout(true)
                                    }
                                }}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b8f23a] hover:brightness-110 text-[#0d0f14] font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-[#b8f23a]/20 hover:scale-105"
                            >
                                {isFree ? <><Download size={17} /> Download Free</> : <><ShoppingCart size={17} /> Buy Now — ${product.price}</>}
                            </button>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[#1f2433]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Complete Unity source code', 'Easy to customize', 'Clean commented codebase', 'Regular updates included'].map((f) => (
                                    <div key={f} className="flex items-center gap-2 text-sm text-slate-500">
                                        <CheckCircle size={14} className="text-[#b8f23a] flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Modal */}
            {showCheckout && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => checkoutStep === 'form' && setShowCheckout(false)}>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <div className="relative z-10 bg-[#13161d] border border-[#2d3348] rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>

                        {checkoutStep === 'processing' && (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-[#b8f23a]/10 border border-[#b8f23a]/30 flex items-center justify-center mx-auto mb-6">
                                    <Loader2 size={32} className="text-[#b8f23a] animate-spin" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Processing payment...</h3>
                                <p className="text-slate-500 text-sm">Please wait while we confirm your order.</p>
                            </div>
                        )}

                        {checkoutStep === 'done' && (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-[#b8f23a]/10 border border-[#b8f23a]/30 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={32} className="text-[#b8f23a]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Payment successful!</h3>
                                <p className="text-slate-500 text-sm">Redirecting to your order confirmation...</p>
                            </div>
                        )}

                        {checkoutStep === 'form' && (
                            <>
                                <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f2433]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#b8f23a]/10 border border-[#b8f23a]/25 flex items-center justify-center">
                                            <CreditCard size={18} className="text-[#b8f23a]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm">Checkout</h3>
                                            <p className="text-xs text-slate-500">{product.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg font-bold text-white font-mono">${product.price}</span>
                                        <button onClick={() => setShowCheckout(false)} className="w-8 h-8 rounded-full bg-[#1f2433] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                                            <X size={14} />
                                        </button>
                                    </div>
                                </div>

                                <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                                    {[
                                        { key: 'name',  label: 'Full name',       icon: User,       type: 'text',  placeholder: 'John Doe',              mono: false },
                                        { key: 'email', label: 'Email address',   icon: Mail,       type: 'email', placeholder: 'you@email.com',         mono: false },
                                        { key: 'card',  label: 'Card number',     icon: CreditCard, type: 'text',  placeholder: '4242 4242 4242 4242',   mono: true  },
                                    ].map(({ key, label, icon: Icon, type, placeholder, mono }) => (
                                        <div key={key}>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{label}</label>
                                            <div className="relative">
                                                <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                                <input
                                                    type={type} required
                                                    value={(form as any)[key]}
                                                    onChange={e => setForm({ ...form, [key]: key === 'card' ? formatCard(e.target.value) : e.target.value })}
                                                    placeholder={placeholder}
                                                    className={`w-full bg-[#0d0f14] border border-[#1f2433] focus:border-[#b8f23a]/60 rounded-xl pl-10 pr-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-colors text-sm ${mono ? 'font-mono' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { key: 'expiry', label: 'Expiry',  placeholder: 'MM/YY', max: 5 },
                                            { key: 'cvc',    label: 'CVC',     placeholder: '123',   max: 4 },
                                        ].map(({ key, label, placeholder, max }) => (
                                            <div key={key}>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{label}</label>
                                                <input
                                                    type="text" required
                                                    value={(form as any)[key]}
                                                    onChange={e => setForm({ ...form, [key]: key === 'expiry' ? formatExpiry(e.target.value) : e.target.value.replace(/\D/g, '').slice(0, max) })}
                                                    placeholder={placeholder} maxLength={max}
                                                    className="w-full bg-[#0d0f14] border border-[#1f2433] focus:border-[#b8f23a]/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-colors text-sm font-mono"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#b8f23a] hover:brightness-110 text-[#0d0f14] font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#b8f23a]/20 text-sm mt-2">
                                        <Lock size={14} /> Pay ${product.price}
                                    </button>
                                    <p className="text-[11px] text-slate-600 text-center flex items-center justify-center gap-1">
                                        <Lock size={10} /> Secured checkout · Your data is encrypted
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
