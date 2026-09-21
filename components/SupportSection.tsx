import Image from 'next/image'
import { Coffee, ExternalLink, Gamepad2, Video, PenTool, Library, Sparkles } from 'lucide-react'

export default function SupportSection() {
    return (
        <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="relative overflow-hidden bg-[#13161d] border border-[#1f2433] rounded-[2.5rem] p-8 sm:p-12 lg:p-16">

                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#39ff8a]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Text side */}
                    <div className="flex-1 w-full">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#39ff8a]/10 border border-[#39ff8a]/25 rounded-full px-4 py-1.5 mb-8">
                            <Gamepad2 size={14} className="text-[#39ff8a]" />
                            <span className="text-xs font-bold text-[#39ff8a] uppercase tracking-wider">Support Indie Game Development</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
                            Help Me Build More{' '}
                            <span className="text-gradient">
                                Playable Worlds
                            </span>
                        </h2>

                        <div className="space-y-5 text-slate-400 text-base leading-relaxed mb-10 max-w-2xl">
                            <p>
                                Hey, I&apos;m Bernady Krzysztof, an indie game developer passionate about turning ideas into playable worlds. Over the years, I&apos;ve created more than 35 games using Unity 3D.
                            </p>
                            <p>
                                I share Unity projects, game assets, templates, scripts, experiments, and downloadable resources to help other developers learn faster and bring their own games to life. Your support helps me keep building and sharing.
                            </p>
                            <p className="text-slate-200 font-semibold">
                                If my projects save you time, teach you something new, or help you finish your game, you can support my work and help me create the next resource.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {[
                                { icon: PenTool,   label: 'Unity 3D projects' },
                                { icon: Video,     label: 'Game mechanics' },
                                { icon: Library,   label: 'Scripts & templates' },
                                { icon: Sparkles,  label: 'Indie dev experiments' },
                            ].map(item => {
                                const Icon = item.icon
                                return (
                                    <div key={item.label} className="inline-flex items-center gap-2 bg-[#0d0f14] border border-[#2d3348] rounded-xl px-4 py-2 text-sm text-slate-400 font-semibold">
                                        <Icon size={14} className="text-[#39ff8a]" />
                                        {item.label}
                                    </div>
                                )
                            })}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://buymeacoffee.com/bernadykrz"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="support-buymeacoffee-btn"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFDD00] hover:brightness-105 text-[#0d0f14] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#FFDD00]/20 hover:scale-105"
                            >
                                <Coffee size={18} />
                                Support My Work
                            </a>
                            <a
                                href="/collections"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="support-shop-btn"
                                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#1f2433] border border-[#2d3348] hover:border-[#39ff8a]/40 text-slate-300 hover:text-white font-bold px-8 py-4 rounded-xl transition-all"
                            >
                                <ExternalLink size={18} />
                                Explore Projects
                            </a>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative w-full lg:w-[400px] xl:w-[450px] aspect-square lg:aspect-[4/5] flex-shrink-0">
                        {/* Offset neon glow background */}
                        <div className="absolute inset-0 bg-[#39ff8a]/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />

                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-[#39ff8a]/30 shadow-2xl shadow-black/40">
                            <Image
                                src="/bernard1.jpeg"
                                alt="Bernady Krzysztof speaking at GDS2027 Game Dev Summit"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 450px"
                                quality={95}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
