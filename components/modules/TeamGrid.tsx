interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  imageUrl?: string
  linkedinUrl?: string
  email?: string
}

interface TeamGridProps {
  members: TeamMember[]
  className?: string
}

export default function TeamGrid({ members, className = '' }: TeamGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-lg overflow-hidden border border-gray-200"
        >
          {member.imageUrl && (
            <div className="w-full h-64 bg-gradient-to-br from-soft-100 to-soft-300 overflow-hidden">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              {member.name}
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              {member.role}
            </p>
            {member.bio && (
              <p className="text-text-secondary text-sm mb-4">
                {member.bio}
              </p>
            )}
            <div className="flex gap-4">
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  className="text-primary hover:text-secondary transition-colors text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-primary hover:text-secondary transition-colors text-sm font-medium"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
