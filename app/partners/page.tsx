import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import PartnerGrid from '@/components/modules/PartnerGrid'
import partnersContent from '@/content/pages/partners.json'
import partnersData from '@/content/partners/partners.json'

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={partnersContent.hero.title}
        subtitle={partnersContent.hero.subtitle}
        description={partnersContent.hero.description}
        variant="centered"
      />

      {/* Partners Grid */}
      <Section className="bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">
            {partnersContent.partnersSection.title}
          </Heading>
          {partnersData.partners.length > 0 ? (
            <PartnerGrid partners={partnersData.partners} />
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                No partners yet. Let's build something together!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Partner CTA */}
      <CTA
        title="Want to Partner with Us?"
        subtitle="We're always looking for organizations that share our mission."
        cta={{
          label: 'Get in Touch',
          href: '/contact',
        }}
        variant="secondary"
      />
    </>
  )
}
