'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Loader2, Ticket, Zap, Box } from 'lucide-react'
import { supabase, Product } from '@/lib/supabase'

function ProductCard({ product }: { product: Product }) {
    const isFree = !product.price || product.price === 0

    return (
        <Link
            href={`/product/${product.id}`}
            className="group bg-[#13161d] border border-[#1f2433] hover:border-[#39ff8a]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#39ff8a]/8 hover:-translate-y-1"
        >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[4/3] bg-[#0d0f14] overflow-hidden">
                {product.thumbnail_url ? (
                    <Image
                        src={product.thumbnail_url}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <div className="absolute inset-0 grid-bg flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#39ff8a]/8 border border-[#39ff8a]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Box size={28} className="text-[#39ff8a]/50" />
                        </div>
                    </div>
                )}
                {/* Price badge overlay */}
                <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                        isFree
                            ? 'bg-[#39ff8a]/15 text-[#39ff8a] border border-[#39ff8a]/25'
                            : 'bg-[#fbbf24]/15 text-[#fbbf24] border border-[#fbbf24]/25'
                    }`}>
                        {isFree ? <><Zap size={9} /> Free</> : <><Ticket size={9} /> ${product.price}</>}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="font-semibold text-sm text-slate-200 group-hover:text-[#39ff8a] transition-colors line-clamp-1 mb-1.5">
                    {product.title}
                </h3>
                {product.description && (
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>
                )}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1f2433]">
                    <span className="text-xs font-mono text-[#39ff8a]/60 group-hover:text-[#39ff8a] transition-colors">
                        View →
                    </span>
                    <span className="text-[10px] text-slate-600 font-mono">Unity 3D</span>
                </div>
            </div>
        </Link>
    )
}

function ProductGridContent({
    limit,
    title = "Latest Unity Resources",
    subtitle = "Game assets, scripts, templates, and experiments for indie developers",
    filterType = 'all'
}: {
    limit?: number
    title?: string
    subtitle?: string
    filterType?: 'all' | 'free' | 'paid'
}) {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams()
    const query = searchParams.get('q')?.toLowerCase().trim() ?? ''

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false })
            if (!error && data) setProducts(data)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    let filtered = query
        ? products.filter(p =>
            p.title.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query))
        )
        : products

    if (limit && !query) filtered = filtered.slice(0, limit)
    if (filterType === 'free') filtered = filtered.filter(p => !p.price || p.price === 0)
    else if (filterType === 'paid') filtered = filtered.filter(p => p.price && p.price > 0)

    const freeProducts = filtered.filter(p => !p.price || p.price === 0)
    const paidProducts = filtered.filter(p => p.price && p.price > 0)
    const showFree = filterType === 'all' || filterType === 'free'
    const showPaid = filterType === 'all' || filterType === 'paid'

    return (
        <section id="product-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        {query ? `Results for "${query}"` : title}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        {query ? `${filtered.length} resource${filtered.length !== 1 ? 's' : ''} found` : subtitle}
                    </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-[#13161d] border border-[#1f2433] rounded-full px-3 py-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff8a] animate-pulse" />
                    {products.length} listed
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="text-center py-20 text-slate-500 flex flex-col items-center">
                    <Loader2 className="animate-spin mb-4 text-[#39ff8a]" size={28} />
                    <p className="text-sm font-mono">Loading Unity resources...</p>
                </div>
            )}

            {/* No results */}
            {!loading && filtered.length === 0 && (
                <div className="text-center py-20 border border-[#1f2433] border-dashed rounded-3xl bg-[#13161d]/50">
                    <Box size={40} className="mx-auto mb-4 text-slate-600" />
                    <p className="text-lg font-bold text-white mb-1">No assets found</p>
                    <p className="text-sm text-slate-500">
                        {query ? "Try a different keyword or browse all resources." : "No Unity resources have been listed yet."}
                    </p>
                </div>
            )}

            {/* Free Products */}
            {!loading && showFree && freeProducts.length > 0 && (
                <div id="freebies" className="mb-12 pt-8 -mt-8">
                    <div className="flex items-center gap-2 mb-5">
                        <Zap size={15} className="text-[#39ff8a]" />
                        <h3 className="text-base font-bold text-white">Free Assets</h3>
                        <span className="text-xs text-slate-500 bg-[#13161d] border border-[#1f2433] rounded-full px-2 py-0.5 font-mono">{freeProducts.length}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {freeProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* Paid Products */}
            {!loading && showPaid && paidProducts.length > 0 && (
                <div id="premium" className="mb-12 pt-8 -mt-8">
                    <div className="flex items-center gap-2 mb-5">
                        <Ticket size={15} className="text-[#fbbf24]" />
                        <h3 className="text-base font-bold text-white">Premium Resources</h3>
                        <span className="text-xs text-slate-500 bg-[#13161d] border border-[#1f2433] rounded-full px-2 py-0.5 font-mono">{paidProducts.length}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {paidProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default function ProductGrid(props: {
    limit?: number
    title?: string
    subtitle?: string
    filterType?: 'all' | 'free' | 'paid'
}) {
    return (
        <Suspense fallback={
            <div className="text-center py-20 text-slate-500 flex flex-col items-center">
                <Loader2 className="animate-spin mb-4 text-[#39ff8a]" size={28} />
                <p className="text-sm font-mono">Loading assets...</p>
            </div>
        }>
            <ProductGridContent {...props} />
        </Suspense>
    )
}
