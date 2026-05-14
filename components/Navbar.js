import Link from 'next/link';
import { useState } from 'react';
import siteConfig from '../lib/config';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-sand">
      <div className="max-w-site mx-auto px-5">
        <nav className="flex items-center justify-between h-16" aria-label="Navegación principal">

          {/* Logo */}
          <Link href="/" className="font-display text-xl font-extrabold text-forest-dark tracking-tight flex items-center gap-1.5">
            💸 Dinero<span className="text-forest-light">Joven</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {siteConfig.navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-ink-muted hover:text-forest-dark transition-colors no-underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contacto" className="text-sm font-semibold bg-forest-dark text-white px-4 py-2 rounded-md hover:bg-forest-mid transition-colors no-underline">
                Contacto →
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream-sand bg-cream px-5 py-3 flex flex-col gap-1">
          {siteConfig.navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-ink-muted border-b border-cream-sand last:border-0 no-underline hover:text-forest-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setOpen(false)} className="mt-2 py-2.5 text-sm font-semibold text-forest-dark no-underline">
            Contacto →
          </Link>
        </div>
      )}
    </header>
  );
}
