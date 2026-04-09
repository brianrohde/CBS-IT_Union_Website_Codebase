import Link from 'next/link'
import Container from '@/components/common/Container'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <Container className="py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">IT</span>
          </div>
          <span className="font-bold text-text-primary hidden sm:inline">CBS IT Union</span>
        </Link>

        <nav className="flex gap-6 md:gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm md:text-base text-text-primary hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
