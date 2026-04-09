interface EventCardProps {
  title: string
  date: string
  time?: string
  location?: string
  description: string
  category?: string
  imageUrl?: string
  href?: string
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  imageUrl,
  href,
}: EventCardProps) {
  const Card = href ? 'a' : 'div'
  const cardProps = href ? { href } : {}

  return (
    <Card
      {...cardProps}
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow ${
        href ? 'cursor-pointer' : ''
      }`}
    >
      {imageUrl && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 bg-soft-400 text-xs font-semibold text-text-primary rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-primary font-semibold mb-2">
          📅 {date}
        </p>
        {time && (
          <p className="text-sm text-text-secondary mb-2">
            ⏰ {time}
          </p>
        )}
        {location && (
          <p className="text-sm text-text-secondary mb-4">
            📍 {location}
          </p>
        )}
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
        {href && (
          <div className="mt-4 text-primary font-semibold text-sm">
            Learn more →
          </div>
        )}
      </div>
    </Card>
  )
}
