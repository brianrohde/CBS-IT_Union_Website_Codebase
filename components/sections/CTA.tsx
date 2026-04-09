import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'

interface CTAProps {
  title: string
  subtitle?: string
  cta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function CTA({
  title,
  subtitle,
  cta,
  secondaryCta,
  className = '',
  variant = 'primary',
}: CTAProps) {
  const bgClasses = variant === 'primary'
    ? 'bg-primary text-white'
    : 'bg-white border-2 border-primary'

  const buttonClasses = variant === 'primary'
    ? 'bg-white text-primary hover:bg-opacity-90'
    : 'bg-primary text-white hover:bg-opacity-90'

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className={`${bgClasses} rounded-lg p-12 md:p-16 text-center`}>
          <Heading level={2} className={variant === 'primary' ? 'text-white mb-4' : 'text-text-primary mb-4'}>
            {title}
          </Heading>
          {subtitle && (
            <p className={`text-lg mb-8 ${variant === 'primary' ? 'text-gray-100' : 'text-text-secondary'}`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={cta.href}
              className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors ${buttonClasses}`}
            >
              {cta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-colors ${
                  variant === 'primary'
                    ? 'border-white text-white hover:bg-white hover:text-primary'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
