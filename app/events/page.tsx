import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import EventList from '@/components/modules/EventList'
import eventsContent from '@/content/pages/events.json'
import upcomingEvents from '@/content/events/upcoming.json'

export default function Events() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={eventsContent.hero.title}
        subtitle={eventsContent.hero.subtitle}
        description={eventsContent.hero.description}
        variant="centered"
      />

      {/* Upcoming Events */}
      <Section className="bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">
            {eventsContent.upcoming.title}
          </Heading>
          {upcomingEvents.events.length > 0 ? (
            <EventList
              events={upcomingEvents.events}
              columns={3}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title="Stay Updated"
        subtitle="Don't miss our next event. Subscribe to our newsletter."
        cta={{
          label: 'Contact Us',
          href: '/contact',
        }}
      />
    </>
  )
}
