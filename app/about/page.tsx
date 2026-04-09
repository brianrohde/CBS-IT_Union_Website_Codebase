import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import CTA from '@/components/sections/CTA'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import TeamGrid from '@/components/modules/TeamGrid'
import aboutContent from '@/content/pages/about.json'

// Placeholder team data - replace with actual team members
const teamMembers = [
  {
    id: '1',
    name: 'Emma Hansen',
    role: 'President',
    bio: 'Data Science student passionate about AI and community building.',
    linkedinUrl: '#',
    email: 'emma@cbsitunion.com',
  },
  {
    id: '2',
    name: 'Jakob Nielsen',
    role: 'Vice President',
    bio: 'Digital Business student focused on strategy and innovation.',
    linkedinUrl: '#',
    email: 'jakob@cbsitunion.com',
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    role: 'Events Lead',
    bio: 'Information Systems student organizing workshops and networking.',
    linkedinUrl: '#',
    email: 'sofia@cbsitunion.com',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
        description={aboutContent.hero.description}
        variant="centered"
      />

      {/* Mission */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="text-center mb-6">
              {aboutContent.mission.title}
            </Heading>
            <p className="text-lg text-text-secondary leading-relaxed text-center">
              {aboutContent.mission.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            {aboutContent.whatWeDo.title}
          </Heading>
          <Features
            features={aboutContent.whatWeDo.content}
          />
        </Container>
      </Section>

      {/* Board */}
      <Section className="bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Board Members
          </Heading>
          <TeamGrid members={teamMembers} />
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title={aboutContent.cta.title}
        subtitle={aboutContent.cta.subtitle}
        cta={aboutContent.cta.cta}
      />
    </>
  )
}
