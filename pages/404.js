// pages/404.js
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada" description="Esta página no existe." noindex />
      <section className="min-h-[60vh] flex items-center justify-center text-center px-5 py-20">
        <div>
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="font-display text-2xl font-bold text-forest-dark mb-2">Página no encontrada</h1>
          <p className="text-ink-muted text-sm max-w-sm mx-auto mb-7">Esta página no existe o ha sido movida. Pero tenemos muchos artículos útiles que pueden interesarte.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-flex text-sm font-semibold bg-forest-dark text-white px-5 py-2.5 rounded-md hover:bg-forest-mid transition-colors no-underline">Ir al inicio →</Link>
            <Link href="/articulos" className="inline-flex text-sm font-semibold border border-forest-dark text-forest-dark px-5 py-2.5 rounded-md hover:bg-forest-pale transition-colors no-underline">Ver artículos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
