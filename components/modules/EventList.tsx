import EventCard from './EventCard'

interface Event {
  id: string
  title: string
  date: string
  time?: string
  location?: string
  description: string
  category?: string
  imageUrl?: string
  href?: string
}

interface EventListProps {
  events: Event[]
  columns?: 1 | 2 | 3
  className?: string
}

export default function EventList({
  events,
  columns = 3,
  className = '',
}: EventListProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={`grid ${gridClasses[columns]} gap-8 ${className}`}>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}
