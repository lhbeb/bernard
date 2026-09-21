import Image from 'next/image'
import { Coffee, ExternalLink, Flame, Video, PenTool, Library, Sparkles } from 'lucide-react'

export default function SupportSection() {
    return (
        <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="relative overflow-hidden bg-white border border-[#e5e7eb] rounded-[2.5rem] shadow-sm p-8 sm:p-12 lg:p-16">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e85d75]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Text side - Left */}
                    <div className="flex-1 w-full">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#e85d75]/10 border border-[#e85d75]/20 rounded-full px-4 py-1.5 mb-8">
                            <Flame size={14} className="text-[#e85d75]" />
                            <span className="text-xs font-bold text-[#e85d75] uppercase tracking-wider">Support Indie Game Development</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                            Help Me Build More{' '}
                            <span className="bg-gradient-to-r from-[#e85d75] to-[#8b5cf6] bg-clip-text text-transparent">
                                Playable Worlds
                            </span>
                        </h2>

                        <div className="space-y-5 text-gray-600 text-base leading-relaxed mb-10 max-w-2xl">
                            <p>
                                Hey, I&apos;m Bernady Krzysztof, an indie game developer passionate about turning ideas into playable worlds. Over the years, I&apos;ve created more than 35 games using Unity 3D.
                            </p>
                            <p>
                                I share Unity projects, game assets, templates, scripts, experiments, and downloadable resources to help other developers learn faster and bring their own games to life. Your support helps me keep building and sharing.
                            </p>
                            <p className="text-gray-900 font-semibold">
                                If my projects save you time, teach you something new, or help you finish your game, you can support my work and help me create the next resource.
                            </p>
                        </div>

                        {/* What your support funds */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {[
                                { icon: PenTool, label: 'Unity 3D projects' },
                                { icon: Video, label: 'Game mechanics' },
                                { icon: Library, label: 'Scripts & templates' },
                                { icon: Sparkles, label: 'Indie dev experiments' },
                            ].map(item => {
                                const Icon = item.icon
                                return (
                                <div key={item.label} className="inline-flex items-center gap-2 bg-[#f5f6f8] border border-[#e5e7eb] rounded-xl px-4 py-2 text-sm text-gray-600 font-semibold">
                                    <Icon size={14} className="text-[#e85d75]" />
                                    {item.label}
                                </div>
                                )
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://buymeacoffee.com/bernadykrz"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="support-buymeacoffee-btn"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFDD00] hover:bg-[#f0cf00] text-[#0D0C22] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFDD00]/25 hover:scale-105"
                            >
                                <Coffee size={18} />
                                Support My Work
                            </a>
                            <a
                                href="/collections"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="support-shop-btn"
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-[#e5e7eb] hover:border-[#e85d75]/40 text-gray-700 font-bold px-8 py-4 rounded-xl transition-all duration-200"
                            >
                                <ExternalLink size={18} />
                                Explore Projects
                            </a>
                        </div>
                    </div>

                    {/* Photo - Right */}
                    <div className="relative w-full lg:w-[400px] xl:w-[450px] aspect-square lg:aspect-[4/5] flex-shrink-0">
                        {/* Offset decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e85d75]/20 to-transparent rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />
                        
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                            <Image
                                src="/story.jpg"
                                alt="Bernady Krzysztof Unity game development projects"
                                fill
                                className="object-cover object-center"
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
