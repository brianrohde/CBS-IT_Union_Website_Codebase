import React from 'react'
import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  variant?: 'split' | 'centered'
  imageUrl?: string
  className?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  variant = 'centered',
  imageUrl,
  className = '',
}: HeroProps) {
  const isSplit = variant === 'split' && imageUrl

  return (
    <section className={`bg-gradient-to-br from-soft-100 to-soft-300 py-16 md:py-32 ${className}`}>
      <Container>
        {isSplit ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="order-2 md:order-1">
              {subtitle && (
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                  {subtitle}
                </p>
              )}
              <Heading level={1} className="mb-6">
                {title}
              </Heading>
              {description && (
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              {(cta || secondaryCta) && (
                <div className="flex flex-wrap gap-4">
                  {cta && (
                    <a
                      href={cta.href}
                      className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      {cta.label}
                    </a>
                  )}
                  {secondaryCta && (
                    <a
                      href={secondaryCta.href}
                      className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      {secondaryCta.label}
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="w-full h-64 md:h-96 bg-soft-500 rounded-lg flex items-center justify-center">
                {imageUrl ? (
                  <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-soft-400 text-center">
                    <p className="text-sm">Image placeholder</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Centered variant */
          <div className="max-w-3xl mx-auto text-center">
            {subtitle && (
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                {subtitle}
              </p>
            )}
            <Heading level={1} className="mb-6">
              {title}
            </Heading>
            {description && (
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                {description}
              </p>
            )}
            {(cta || secondaryCta) && (
              <div className="flex flex-wrap justify-center gap-4">
                {cta && (
                  <a
                    href={cta.href}
                    className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    {cta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
