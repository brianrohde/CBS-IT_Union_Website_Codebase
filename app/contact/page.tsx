import Hero from '@/components/sections/Hero'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import Heading from '@/components/common/Heading'
import contactContent from '@/content/pages/contact.json'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Hero
        title={contactContent.hero.title}
        subtitle={contactContent.hero.subtitle}
        description={contactContent.hero.description}
        variant="centered"
      />

      {/* Contact Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              {/* Left: Info */}
              <div className="md:col-span-2">
                <Heading level={3} className="mb-6">
                  {contactContent.form.title}
                </Heading>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-text-primary mb-2">Email</p>
                    <a
                      href="mailto:hello@cbsitunion.com"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      hello@cbsitunion.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-2">Location</p>
                    <p className="text-text-secondary">
                      Copenhagen Business School<br />
                      Copenhagen, Denmark
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-2">Follow Us</p>
                    <div className="flex gap-4">
                      <a href="#" className="text-primary hover:text-secondary transition-colors">
                        LinkedIn
                      </a>
                      <a href="#" className="text-primary hover:text-secondary transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="md:col-span-3">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-text-primary mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="student">Student Inquiry</option>
                      <option value="company">Company Partnership</option>
                      <option value="event">Event Related</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
