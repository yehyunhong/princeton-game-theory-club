const links = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Puzzles', href: '#puzzles' },
  { label: 'Support Us', href: '#support' },
  { label: 'Join', href: '#join' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gtc-beige bg-gtc-cream/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/gtc_logo.png"
            alt="Princeton Game Theory Club logo"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden sm:block font-display text-sm uppercase tracking-[0.35em] text-gtc-brown">
            Princeton Game Theory Club
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-end gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-gtc-brown/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-princeton-orange">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
