import Hero from '@/components/sections/Hero'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import Gallery from '@/components/modules/Gallery'
import pastEvents from '@/content/events/past.json'

export default function PastEvents() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Past Events"
        subtitle="Our History"
        description="Celebrating the activities and connections we've built together."
        variant="centered"
      />

      {/* Past Events Gallery */}
      <Section className="bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Event Archive
          </Heading>
          {pastEvents.events.length > 0 ? (
            <Gallery
              items={pastEvents.events}
              columns={3}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                More events coming soon!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Info Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={3} className="mb-6">
              Want to Stay Updated?
            </Heading>
            <p className="text-lg text-text-secondary mb-8">
              Follow us on social media and subscribe to our newsletter to stay informed about upcoming events.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
