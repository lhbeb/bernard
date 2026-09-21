import Image from 'next/image'
import Link from 'next/link'
import { Coffee, Download, Flame, MonitorPlay, PenTool, Sparkles, Video } from 'lucide-react'

export const metadata = {
    title: 'About - Bernady Krzysztof',
    description: 'Meet Bernady Krzysztof, an indie game developer sharing Unity 3D projects, assets, scripts, templates, and development experiments.',
}

const stats = [
    { value: '35+', label: 'Games Created' },
    { value: '50+', label: 'Unity Resources' },
    { value: '100+', label: 'Dev Experiments' },
    { value: '1.2K', label: 'Indie Developers' },
]

const values = [
    {
        icon: PenTool,
        title: 'Unity 3D Projects',
        desc: 'Explore complete Unity projects to understand how playable worlds, systems, environments, and mechanics come together.',
    },
    {
        icon: Sparkles,
        title: 'Free Game Assets',
        desc: 'Download useful assets and starter resources so you can spend less time staring at an empty project and more time creating.',
    },
    {
        icon: Video,
        title: 'Scripts, Systems & Templates',
        desc: 'Reusable code, systems, and templates that help indie developers build features faster and learn from practical examples.',
    },
    {
        icon: MonitorPlay,
        title: 'Mechanics & Prototypes',
        desc: 'Experiment with gameplay mechanics, prototypes, and development ideas you can modify for your own game.',
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#f5f6f8] text-gray-900">
            <section className="relative overflow-hidden border-b border-[#e5e7eb]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fff1f3]/60 via-[#f5f6f8] to-[#1c1a2e]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e85d75]/6 blur-[130px] rounded-full pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-shrink-0">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#e85d75]/30 shadow-2xl shadow-[#e85d75]/10">
                            <Image src="/avatarpng.jpg" alt="Bernady Krzysztof" fill className="object-cover" />
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#e85d75]/10 border border-[#e85d75]/30 text-[#e85d75] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                            Indie Game Developer
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Hey, I&apos;m Bernady
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                            I&apos;m an indie game developer passionate about turning ideas into playable worlds with Unity 3D.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 text-center">
                            <p className="text-3xl font-bold text-[#e85d75] mb-1">{value}</p>
                            <p className="text-sm text-gray-400">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Story</h2>
                        <div className="space-y-4 text-gray-500 leading-relaxed">
                            <p>
                                I&apos;m Bernady Krzysztof, an indie game developer who has created more than 35 games while experimenting with mechanics, environments, gameplay systems, and visual styles using Unity 3D.
                            </p>
                            <p>
                                I know how difficult it can be to start making games when you are staring at an empty Unity project. That&apos;s why I share my projects, assets, templates, scripts, experiments, and downloadable resources.
                            </p>
                            <p>
                                Instead of starting from zero, explore my projects, understand how things work, modify them, and use what you learn to build something of your own.
                            </p>
                            <p className="text-gray-900 font-semibold">
                                Keep creating. Keep experimenting. Ship your game.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-72 flex-shrink-0 bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-[#f5f6f8]">
                            <Image src="/story.jpg" alt="Bernady Krzysztof Unity game development projects" fill className="object-cover opacity-90" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Unity projects, asset listings, scripts, prototypes, and practical experiments for indie developers.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">What You&apos;ll Find Here</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {values.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#e85d75]/10 border border-[#e85d75]/20 flex items-center justify-center flex-shrink-0">
                                    <Icon size={18} className="text-[#e85d75]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#fff1f3] to-[#1c1a2e] border border-[#e85d75]/20 rounded-3xl p-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Building Your Game</h2>
                    <p className="text-gray-500 mb-7 max-w-md mx-auto">
                        Explore Unity resources, learn from real projects, and support the next game-development experiment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-[#e85d75] hover:bg-[#c93f5b] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#e85d75]/20"
                        >
                            <Download size={16} />
                            Browse Resources
                        </Link>
                        <a
                            href="https://buymeacoffee.com/bernadykrz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#FFDD00] hover:bg-[#f0cf00] text-[#0D0C22] font-semibold px-6 py-3 rounded-xl transition-all"
                        >
                            <Coffee size={16} />
                            Support My Work
                        </a>
                    </div>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e85d75]">
                        <Flame size={15} />
                        Help more indie developers go from an idea to a playable game
                    </p>
                </div>
            </div>
        </div>
    )
}
