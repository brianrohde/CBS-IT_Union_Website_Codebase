interface GalleryItem {
  id: string
  title: string
  imageUrl: string
  description?: string
  date?: string
  category?: string
}

interface GalleryProps {
  items: GalleryItem[]
  columns?: 2 | 3
  className?: string
}

export default function Gallery({
  items,
  columns = 3,
  className = '',
}: GalleryProps) {
  const gridClasses = columns === 2
    ? 'grid-cols-1 md:grid-cols-2'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${gridClasses} gap-8 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-full h-64 bg-gray-200 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-6">
            {item.category && (
              <span className="inline-block px-3 py-1 bg-soft-400 text-xs font-semibold text-text-primary rounded-full mb-3">
                {item.category}
              </span>
            )}
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {item.title}
            </h3>
            {item.date && (
              <p className="text-sm text-primary font-medium mb-2">
                {item.date}
              </p>
            )}
            {item.description && (
              <p className="text-text-secondary text-sm">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
