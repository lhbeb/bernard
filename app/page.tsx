import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SupportSection from '@/components/SupportSection'
import SocialLinks from '@/components/SocialLinks'

export default function HomePage() {
    return (
        <div>
            {/* Developer profile hero */}
            <HeroSection />

            {/* Free Unity resources */}
            <ProductGrid
                title="Free Unity Resources"
                subtitle="Downloadable game assets, scripts, templates, mechanics, and experiments for indie developers"
                filterType="free"
            />

            {/* Support Bernady's development work */}
            <SupportSection />

            {/* Premium developer resources */}
            <ProductGrid
                title="Premium Game Development Resources"
                subtitle="Unity projects, systems, templates, prototypes, and production-ready resources for indie developers"
                filterType="paid"
            />

            {/* Email Subscription */}
            <SocialLinks />
        </div>
    )
}
