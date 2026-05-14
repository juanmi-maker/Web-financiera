import Link from 'next/link';
import { useEffect } from 'react';
import SEO from '../../components/SEO';
import Newsletter from '../../components/Newsletter';
import ArticleCard from '../../components/ArticleCard';
import AuthorBox from '../../components/AuthorBox';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '../../lib/posts';
import siteConfig from '../../lib/config';

const extraRelated = [
  { slug: 'interes-compuesto-como-funciona', title: 'Interés compuesto: cómo tu dinero trabaja por ti', excerpt: 'La fuerza más poderosa de las finanzas personales, explicada con ejemplos reales.', category: 'inversion', emoji: '📈', readingTime: 6 },
  { slug: '5-errores-tarjetas-credito',      title: '5 errores comunes al usar tarjetas de crédito',  excerpt: 'Evita las trampas más frecuentes y deja de pagar dinero de más cada mes.',         category: 'deudas',    emoji: '💳', readingTime: 5 },
  { slug: 'fondo-emergencia-6-meses',        title: 'Cómo crear tu fondo de emergencia en 6 meses',  excerpt: 'El colchón financiero que te libera del estrés económico.',                        category: 'basicos',   emoji: '🛡️', readingTime: 5 },
  { slug: 'guia-invertir-50-euros',          title: 'Guía para invertir tus primeros 50 euros',       excerpt: 'Con 50€ puedes dar tu primer paso en los mercados financieros hoy mismo.',        category: 'inversion', emoji: '🌱', readingTime: 7 },
];

export default function ArticlePage({ post, relatedPosts }) {
  if (!post) return (
    <div className="max-w-site mx-auto px-5 py-20 text-center">
      <p className="text-5xl mb-4">🔍</p>
      <p className="text-ink-muted">Artículo no encontrado.</p>
      <Link href="/articulos" className="mt-6 inline-flex text-sm font-semibold text-forest-mid no-underline hover:underline">← Volver a artículos</Link>
    </div>
  );

  // Barra de progreso de lectura
  useEffect(() => {
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    document.body.appendChild(bar);
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      bar.style.width = `${Math.min((scrollTop / (scrollHeight - clientHeight)) * 100, 100)}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('scroll', update); document.body.removeChild(bar); };
  }, []);

  // Combinar relacionados dinámicos + fijos sin duplicados, max 4
  const dynamicSlugs = relatedPosts.map(p => p.slug);
  const combined = [
    ...relatedPosts,
    ...extraRelated.filter(p => !dynamicSlugs.includes(p.slug)),
  ].slice(0, 4);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/articulos/${post.slug}` },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/articulos/${post.slug}`}
        type="article"
        article={{ publishedTime: post.date, modifiedTime: post.updatedDate, author: siteConfig.author, tags: post.tags || [] }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Header */}
      <section className="bg-forest-dark py-12">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4 flex-wrap">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/articulos" className="text-white/40 hover:text-white/70 no-underline transition-colors">Artículos</Link>
            <span>›</span>
            <span className="text-white/40 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            {post.category && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-emerald-300 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
            )}
            {post.readingTime && (
              <span className="text-xs text-white/50">⏱ {post.readingTime} min de lectura</span>
            )}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl leading-tight mb-4">
            {post.emoji && <span className="mr-2">{post.emoji}</span>}
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-white/65 max-w-xl text-base leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12">
        <div className="max-w-site mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-start">

            {/* Main */}
            <div>
              <article className="bg-white border border-cream-sand rounded-2xl p-7 md:p-10">
                <div
                  className="prose-article"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
              </article>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-5">
                  <span className="text-xs font-semibold text-ink-light">Etiquetas:</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gold-light text-gold font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <AuthorBox />

              {/* Related */}
              {combined.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-display text-xl font-bold text-forest-dark tracking-tight mb-5">
                    Sigue aprendiendo
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {combined.map(p => <ArticleCard key={p.slug} post={p} />)}
                  </div>
                </div>
              )}

              <div className="mt-12">
                <Newsletter />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-5">
              <div className="bg-white border border-cream-sand rounded-2xl p-5">
                <h3 className="font-display font-bold text-forest-dark text-sm mb-3 pb-3 border-b border-cream-sand">
                  📋 En este artículo
                </h3>
                <p className="text-sm text-ink-muted">⏱ {post.readingTime} min de lectura</p>
              </div>

              <div className="bg-forest-pale border border-forest-mint rounded-2xl p-5">
                <h3 className="font-display font-bold text-forest-mid text-sm mb-2">💡 Consejo rápido</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-4">
                  Ahorrar 50€ al mes durante 10 años, con un 5% de interés compuesto, se convierte en más de 7.700€.
                </p>
                <Link href="/articulos"
                  className="block text-center bg-forest-dark text-white text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-forest-mid transition-colors no-underline">
                  Ver más guías →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllPostSlugs(), fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  const relatedPosts = getRelatedPosts(params.slug, post.category, 3);
  return { props: { post, relatedPosts }, revalidate: 3600 };
}
