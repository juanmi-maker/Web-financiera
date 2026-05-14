import Link from 'next/link';
import SEO from '../../components/SEO';
import ArticleCard from '../../components/ArticleCard';
import { getAllPosts } from '../../lib/posts';
import siteConfig from '../../lib/config';

export default function ArticlesPage({ posts }) {
  return (
    <>
      <SEO
        title="Todos los artículos de finanzas personales"
        description="Guías completas sobre ahorro, inversión, deudas y libertad financiera para jóvenes. Contenido práctico y gratuito."
        canonical="/articulos"
      />

      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4 list-none">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <span>Artículos</span>
          </nav>
          <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">
            Todos los artículos 📚
          </h1>
          <p className="text-white/60 max-w-lg">
            {posts.length} guías prácticas de finanzas personales.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="py-5 border-b border-cream-sand">
        <div className="max-w-site mx-auto px-5">
          <nav className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1" aria-label="Filtrar por categoría">
            {siteConfig.categories.map(cat => (
              <Link key={cat.slug} href={cat.href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-cream-sand text-sm font-semibold text-ink hover:bg-forest-dark hover:text-white hover:border-forest-dark transition-all whitespace-nowrap no-underline shrink-0">
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
              <p className="text-5xl mb-4">✍️</p>
              <p className="text-ink-muted">Los artículos se están preparando. ¡Vuelve pronto!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts }, revalidate: 3600 };
}
