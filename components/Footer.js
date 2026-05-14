import Link from 'next/link';
import siteConfig from '../lib/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white/75 pt-14 pb-0 mt-20" role="contentinfo">
      <div className="max-w-site mx-auto px-5">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-extrabold text-white mb-3 tracking-tight">
              💸 Dinero<span className="text-emerald-300">Joven</span>
            </p>
            <p className="text-sm leading-relaxed text-white/55 max-w-[240px]">
              Guías prácticas de finanzas personales para jóvenes en España y Latinoamérica.
              Sin tecnicismos. Solo consejos que funcionan.
            </p>
            <p className="mt-4 text-xs text-white/35">📧 {siteConfig.email}</p>
          </div>

          {/* Temas */}
          <div>
            <h3 className="font-display text-white font-bold text-sm mb-4">Temas</h3>
            <ul className="space-y-2.5 list-none">
              {[
                ['💰 Ahorro',    '/categoria/ahorro'],
                ['📈 Inversión', '/categoria/inversion'],
                ['💳 Deudas',   '/categoria/deudas'],
                ['🏠 Vivienda', '/categoria/vivienda'],
                ['🎯 Básicos',  '/categoria/basicos'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/55 hover:text-emerald-300 transition-colors no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* La web */}
          <div>
            <h3 className="font-display text-white font-bold text-sm mb-4">La web</h3>
            <ul className="space-y-2.5 list-none">
              {[
                ['Sobre nosotros',      '/sobre-nosotros'],
                ['Todos los artículos', '/articulos'],
                ['Contacto',            '/contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/55 hover:text-emerald-300 transition-colors no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-white font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5 list-none">
              {[
                ['Privacidad',       '/privacidad'],
                ['Política de cookies', '/cookies'],
                ['Aviso legal',      '/aviso-legal'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/55 hover:text-emerald-300 transition-colors no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-start justify-between gap-4">
          <p className="text-xs text-white/35">© {year} {siteConfig.name}. Todos los derechos reservados.</p>
          <p className="text-xs text-white/30 max-w-md leading-relaxed">
            ⚠️ Este sitio es solo informativo. No constituye asesoría financiera profesional.
            Consulta a un asesor antes de tomar decisiones de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
}
