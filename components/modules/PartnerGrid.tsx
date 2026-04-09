interface Partner {
  id: string
  name: string
  logoUrl: string
  href?: string
}

interface PartnerGridProps {
  partners: Partner[]
  className?: string
}

export default function PartnerGrid({ partners, className = '' }: PartnerGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ${className}`}>
      {partners.map((partner) => {
        const Card = partner.href ? 'a' : 'div'
        const cardProps = partner.href ? { href: partner.href } : {}

        return (
          <Card
            key={partner.id}
            {...cardProps}
            className={`flex items-center justify-center p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow ${
              partner.href ? 'cursor-pointer' : ''
            }`}
          >
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="max-w-full max-h-16 object-contain"
            />
          </Card>
        )
      })}
    </div>
  )
}
