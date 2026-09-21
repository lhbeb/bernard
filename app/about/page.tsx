import Image from 'next/image'
import Link from 'next/link'
import { Coffee, Download, Gamepad2, MonitorPlay, PenTool, Sparkles, Video } from 'lucide-react'

export const metadata = {
    title: 'About - Bernady Krzysztof',
    description: 'Meet Bernady Krzysztof, an indie game developer sharing Unity 3D projects, assets, scripts, templates, and development experiments.',
}

const stats = [
    { value: '35+',  label: 'Games Created' },
    { value: '50+',  label: 'Unity Resources' },
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
        <div className="min-h-screen bg-[#0d0f14] text-slate-200">

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[#1f2433]">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39ff8a]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-shrink-0">
                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-[#39ff8a]/40 shadow-2xl shadow-black/40">
                            <Image src="/avatarpng.jpg" alt="Bernady Krzysztof" fill className="object-cover" />
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#39ff8a]/10 border border-[#39ff8a]/25 text-[#39ff8a] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                            <Gamepad2 size={12} /> Indie Game Developer
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                            Hey, I&apos;m Bernady
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                            I&apos;m an indie game developer passionate about turning ideas into playable worlds with Unity 3D.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="bg-[#13161d] border border-[#1f2433] rounded-2xl p-6 text-center">
                            <p className="text-3xl font-bold text-[#39ff8a] mb-1 font-mono">{value}</p>
                            <p className="text-sm text-slate-500">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Story */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-4">The Story</h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                I&apos;m Bernady Krzysztof, an indie game developer who has created more than 35 games while experimenting with mechanics, environments, gameplay systems, and visual styles using Unity 3D.
                            </p>
                            <p>
                                I know how difficult it can be to start making games when you are staring at an empty Unity project. That&apos;s why I share my projects, assets, templates, scripts, experiments, and downloadable resources.
                            </p>
                            <p>
                                Instead of starting from zero, explore my projects, understand how things work, modify them, and use what you learn to build something of your own.
                            </p>
                            <p className="text-slate-200 font-semibold">
                                Keep creating. Keep experimenting. Ship your game.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-72 flex-shrink-0 bg-[#13161d] border border-[#1f2433] rounded-2xl p-6">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-[#0d0f14] border border-[#1f2433]">
                            <Image src="/bernard1.jpeg" alt="Bernady Krzysztof at GDS2027" fill className="object-cover object-top" />
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Unity projects, asset listings, scripts, prototypes, and practical experiments for indie developers.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8">What You&apos;ll Find Here</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {values.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-[#13161d] border border-[#1f2433] hover:border-[#2d3348] rounded-2xl p-6 flex gap-4 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-[#39ff8a]/10 border border-[#39ff8a]/20 flex items-center justify-center flex-shrink-0">
                                    <Icon size={18} className="text-[#39ff8a]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#13161d] border border-[#1f2433] rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#39ff8a]/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-white mb-3">Start Building Your Game</h2>
                        <p className="text-slate-500 mb-7 max-w-md mx-auto">
                            Explore Unity resources, learn from real projects, and support the next game-development experiment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-[#39ff8a] hover:brightness-110 text-[#0d0f14] font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#39ff8a]/20 hover:scale-105"
                            >
                                <Download size={16} />
                                Browse Resources
                            </Link>
                            <a
                                href="https://buymeacoffee.com/bernadykrz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#FFDD00] hover:brightness-105 text-[#0d0f14] font-bold px-6 py-3 rounded-xl transition-all"
                            >
                                <Coffee size={16} />
                                Support My Work
                            </a>
                        </div>
                        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#39ff8a]">
                            <Gamepad2 size={15} />
                            Help more indie developers go from an idea to a playable game
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
