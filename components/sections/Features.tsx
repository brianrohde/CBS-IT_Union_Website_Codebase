import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'

interface Feature {
  title: string
  description: string
  icon?: string
}

interface FeaturesProps {
  title?: string
  features: Feature[]
  className?: string
}

export default function Features({ title, features, className = '' }: FeaturesProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        {title && (
          <Heading level={2} className="text-center mb-12">
            {title}
          </Heading>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
