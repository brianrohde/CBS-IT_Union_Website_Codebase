import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import CTA from '@/components/sections/CTA'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import EventList from '@/components/modules/EventList'
import PartnerGrid from '@/components/modules/PartnerGrid'
import homeContent from '@/content/pages/home.json'
import upcomingEvents from '@/content/events/upcoming.json'
import partnersData from '@/content/partners/partners.json'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        description={homeContent.hero.description}
        cta={homeContent.hero.cta}
        secondaryCta={homeContent.hero.secondaryCta}
        variant="split"
      />

      {/* About Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} className="mb-6">
              {homeContent.aboutSection.title}
            </Heading>
            <p className="text-lg text-text-secondary leading-relaxed">
              {homeContent.aboutSection.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Pillars Section */}
      <Section>
        <Container>
          <Features
            title={homeContent.pillars.title}
            features={homeContent.pillars.features}
          />
        </Container>
      </Section>

      {/* Events Preview */}
      <Section className="bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Upcoming Events
          </Heading>
          <EventList
            events={upcomingEvents.events}
            columns={3}
          />
          <div className="text-center mt-12">
            <a
              href="/events"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              View All Events
            </a>
          </div>
        </Container>
      </Section>

      {/* Partners Strip */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            Our Partners
          </Heading>
          <PartnerGrid partners={partnersData.partners} />
          <div className="text-center mt-12">
            <a
              href="/partners"
              className="inline-block text-primary font-semibold hover:text-secondary transition-colors"
            >
              See all partners →
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title={homeContent.cta.title}
        subtitle={homeContent.cta.subtitle}
        cta={homeContent.cta.cta}
        secondaryCta={homeContent.cta.secondaryCta}
      />
    </>
  )
}
