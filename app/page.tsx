import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SupportSection from '@/components/SupportSection'
import SocialLinks from '@/components/SocialLinks'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <ProductGrid
                title="Game source code"
                subtitle="Free code to learn from. Premium foundations to reskin, build on, and sell."
                filterType="all"
            />
            <SupportSection />
            <SocialLinks />
        </div>
    )
}
