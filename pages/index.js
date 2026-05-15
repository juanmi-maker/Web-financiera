import Link from 'next/link';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';
import { getAllPosts } from '../lib/posts';
import siteConfig from '../lib/config';

export default function Home({ featuredPost, recentPosts }) {
  return (
    <>
      <SEO title={null} description={siteConfig.description} canonical="/" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            inLanguage: 'es',
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="bg-forest-dark relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(5,150,105,.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-site mx-auto px-5 relative">
          <span className="inline-block bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
            💰 Finanzas personales en español
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 max-w-2xl">
            Toma el control de tu dinero{' '}
            <em className="not-italic text-emerald-300">antes de los 35</em>
          </h1>
          <p className="text-white/70 text-lg max-w-lg mb-8 leading-relaxed">
            Guías prácticas para ahorrar más, invertir sin miedo y dejar atrás las deudas.
            Sin tecnicismos. Desde cero.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/articulos" className="inline-flex items-center gap-1.5 bg-forest-light hover:bg-forest-mid text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors no-underline">
              Explorar artículos →
            </Link>
            <Link href="/categoria/basicos" className="inline-flex items-center gap-1.5 border border-white/25 text-white/85 hover:bg-white/10 font-semibold text-sm px-5 py-3 rounded-md transition-colors no-underline">
              Empezar desde cero
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/15">
            {[
              ['+30',  'Artículos gratuitos'],
              ['5 min', 'Lectura media'],
              ['0€',   'Cuesta acceder'],
            ].map(([num, label]) => (
              <div key={label}>
                <span className="font-display text-3xl font-extrabold text-emerald-300 block">{num}</span>
                <span className="text-xs text-white/50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-8">
        <div className="max-w-site mx-auto px-5">
          <nav className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1" aria-label="Categorías">
            {siteConfig.categories.map(cat => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-cream-sand text-sm font-semibold text-ink hover:bg-forest-dark hover:text-white hover:border-forest-dark transition-all whitespace-nowrap no-underline shrink-0"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ── FEATURED ── */}
      {featuredPost && (
        <section className="py-6">
          <div className="max-w-site mx-auto px-5">
            <p className="text-xs font-bold tracking-widest uppercase text-ink-light mb-4">🌟 Artículo destacado</p>
            <ArticleCard post={featuredPost} featured />
          </div>
        </section>
      )}

      {/* ── RECENT ARTICLES ── */}
      <section className="py-10">
        <div className="max-w-site mx-auto px-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-forest-dark tracking-tight">Artículos recientes</h2>
            <Link href="/articulos" className="text-sm font-semibold text-forest-mid hover:text-forest-dark no-underline transition-colors">
              Ver todos →
            </Link>
          </div>
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPosts.map(post => <ArticleCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <div className="bg-white border border-cream-sand rounded-2xl p-12 text-center">
              <p className="text-4xl mb-3">✍️</p>
              <p className="text-ink-muted">Artículos en camino. ¡Vuelve pronto!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-forest-dark tracking-tight mb-3">
              ¿Por qué {siteConfig.name}?
            </h2>
            <p className="text-ink-muted max-w-md mx-auto">
              Contenido honesto, práctico y sin venderte nada que no necesitas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🎯', title: 'Directo al grano',     desc: 'Sin relleno. Solo lo que necesitas saber para actuar hoy.' },
              { icon: '🆓', title: '100% gratuito',        desc: 'Todo el contenido es libre. Sin muros de pago.' },
              { icon: '🇪🇸', title: 'Para tu contexto',    desc: 'Adaptado a sueldos, bancos e impuestos de España y LATAM.' },
              { icon: '📊', title: 'Basado en datos',      desc: 'Cifras reales, no solo teoría. Ejemplos concretos.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-cream rounded-xl p-5 border border-cream-sand">
                <p className="text-3xl mb-3">{icon}</p>
                <h3 className="font-display font-bold text-forest-dark text-base mb-1.5">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-16">
        <div className="max-w-site mx-auto px-5">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPosts    = getAllPosts();
  const featuredPost = allPosts.find(p => p.featured) || allPosts[0] || null;
  const recentPosts  = allPosts.filter(p => p !== featuredPost).slice(0, 6);
  return { props: { featuredPost, recentPosts }, revalidate: 3600 };
}
