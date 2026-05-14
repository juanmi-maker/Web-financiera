import Link from 'next/link';
import SEO from '../../components/SEO';
import ArticleCard from '../../components/ArticleCard';
import { getPostsByCategory } from '../../lib/posts';
import siteConfig from '../../lib/config';

const categoryMeta = {
  ahorro:    { emoji: '💰', title: 'Ahorro',             description: 'Estrategias reales para guardar más dinero cada mes, aunque tu sueldo sea ajustado.',                                  color: 'bg-forest-dark' },
  inversion: { emoji: '📈', title: 'Inversión',          description: 'Cómo invertir desde cero. Fondos indexados, ETFs y más. Sin conocimientos previos.',                                   color: 'bg-slate-800' },
  deudas:    { emoji: '💳', title: 'Deudas',             description: 'Métodos probados para salir de deudas rápido y recuperar tu libertad financiera.',                                      color: 'bg-red-900' },
  basicos:   { emoji: '🎯', title: 'Conceptos básicos',  description: 'Todo lo que debes saber sobre finanzas personales: presupuestos, fondos de emergencia e interés compuesto.',           color: 'bg-violet-900' },
  vivienda:  { emoji: '🏠', title: 'Vivienda',           description: 'Alquilar o comprar, hipotecas y ayudas para jóvenes. Todo sobre vivienda y dinero.',                                  color: 'bg-amber-900' },
};

export default function CategoryPage({ slug, posts }) {
  const meta = categoryMeta[slug] || { emoji: '📝', title: slug, description: `Artículos sobre ${slug}`, color: 'bg-forest-dark' };

  return (
    <>
      <SEO
        title={`${meta.title}: guías y consejos prácticos`}
        description={meta.description}
        canonical={`/categoria/${slug}`}
      />

      <section className={`${meta.color} py-14`}>
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline">Inicio</Link>
            <span>›</span>
            <span>{meta.title}</span>
          </nav>
          <p className="text-4xl mb-3">{meta.emoji}</p>
          <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">{meta.title}</h1>
          <p className="text-white/65 max-w-lg">{meta.description}</p>
          <p className="text-white/40 text-xs mt-3">{posts.length} {posts.length === 1 ? 'artículo' : 'artículos'}</p>
        </div>
      </section>

      <div className="py-5 border-b border-cream-sand">
        <div className="max-w-site mx-auto px-5">
          <nav className="flex gap-2.5 overflow-x-auto pb-1" aria-label="Otras categorías">
            {siteConfig.categories.map(cat => (
              <Link key={cat.slug} href={cat.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap no-underline shrink-0 transition-all
                  ${cat.slug === slug
                    ? 'bg-forest-dark text-white border-forest-dark'
                    : 'bg-white border-cream-sand text-ink hover:bg-forest-dark hover:text-white hover:border-forest-dark'}`}>
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-site mx-auto px-5">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map(post => <ArticleCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <div className="bg-white border border-cream-sand rounded-2xl p-16 text-center">
              <p className="text-5xl mb-4">{meta.emoji}</p>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-2">Próximamente: {meta.title}</h2>
              <p className="text-ink-muted text-sm mb-6">Estamos preparando artículos sobre este tema.</p>
              <Link href="/articulos" className="inline-flex text-sm font-semibold bg-forest-dark text-white px-5 py-2.5 rounded-md hover:bg-forest-mid transition-colors no-underline">
                Ver todos los artículos →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: Object.keys(categoryMeta).map(slug => ({ params: { slug } })), fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const posts = getPostsByCategory(params.slug);
  return { props: { slug: params.slug, posts }, revalidate: 3600 };
}
