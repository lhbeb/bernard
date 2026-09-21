import Link from 'next/link'
import { Box, ArrowLeftCircle } from 'lucide-react'

export default function CollectionsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#b8f23a]/10 border border-[#b8f23a]/25 flex items-center justify-center mx-auto mb-6">
                <Box size={28} className="text-[#b8f23a]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Unity Project Collections</h1>
            <p className="text-slate-500 mb-8">Curated game projects, mechanics, assets, and developer resources are coming soon.</p>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#b8f23a] hover:underline">
                <ArrowLeftCircle size={14} /> Back to Resources
            </Link>
        </div>
    )
}
