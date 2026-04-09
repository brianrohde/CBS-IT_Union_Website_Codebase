import React from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export default function Heading({ level, children, className = '' }: HeadingProps) {
  const baseClasses = 'text-text-primary font-semibold'

  const sizeClasses = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl',
  }

  const HeadingTag = `h${level}` as const

  return React.createElement(
    HeadingTag,
    { className: `${baseClasses} ${sizeClasses[level]} ${className}` },
    children
  )
}
