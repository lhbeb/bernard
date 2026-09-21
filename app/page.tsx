import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SupportSection from '@/components/SupportSection'
import SocialLinks from '@/components/SocialLinks'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <ProductGrid
                title="Start with a free building block"
                subtitle="Small, practical Unity resources for testing an idea without starting from an empty project."
                filterType="free"
            />
            <SupportSection />
            <SocialLinks />
        </div>
    )
}
