import { MapPin, Calendar, Users, Download, Eye, Box, Star } from 'lucide-react'

const stats = [
    { icon: Star, label: 'Rating', value: '4.9' },
    { icon: Eye, label: 'Views', value: '18K' },
    { icon: Download, label: 'Downloads', value: '340+' },
    { icon: Box, label: 'Assets', value: '25+' },
]

export default function CreatorProfile() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-14">
            <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e85d75] to-[#8b5cf6] flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                            E
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#e85d75] border-2 border-[#ffffff]" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h2 className="text-xl font-bold text-gray-900">Bernady Krzysztof</h2>
                            <span className="inline-flex items-center gap-1 bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                ✓ Creator
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-3">
                            Unity projects, assets, scripts, and experiments for indie developers building playable worlds.
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={12} className="text-[#e85d75]" />
                                Unity 3D Developer
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={12} className="text-[#e85d75]" />
                                35+ Games Created
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Users size={12} className="text-[#e85d75]" />
                                Indie Dev Community
                            </span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full sm:w-auto">
                        {stats.map((stat) => {
                            const Icon = stat.icon
                            return (
                            <div key={stat.label} className="bg-[#f5f6f8] border border-[#e5e7eb] rounded-xl p-3 text-center min-w-[80px]">
                                <Icon size={16} className="text-[#e85d75] mx-auto mb-1.5" />
                                <div className="text-base font-bold text-gray-900">{stat.value}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
