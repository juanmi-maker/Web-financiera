import Link from 'next/link';

const meta = {
  ahorro:    { emoji: '💰', label: 'Ahorro',    bg: 'bg-forest-pale',   text: 'text-forest-mid',  badge: 'bg-forest-mint text-forest-dark' },
  inversion: { emoji: '📈', label: 'Inversión', bg: 'bg-sky-50',        text: 'text-sky-700',     badge: 'bg-sky-100 text-sky-800' },
  deudas:    { emoji: '💳', label: 'Deudas',    bg: 'bg-red-50',        text: 'text-red-700',     badge: 'bg-red-100 text-red-800' },
  basicos:   { emoji: '🎯', label: 'Básicos',   bg: 'bg-violet-50',     text: 'text-violet-700',  badge: 'bg-violet-100 text-violet-800' },
  vivienda:  { emoji: '🏠', label: 'Vivienda',  bg: 'bg-amber-50',      text: 'text-amber-700',   badge: 'bg-amber-100 text-amber-800' },
  general:   { emoji: '📝', label: 'General',   bg: 'bg-cream-dark',    text: 'text-ink-muted',   badge: 'bg-cream-sand text-ink-muted' },
};

export default function ArticleCard({ post, featured = false }) {
  const { slug, title, excerpt, category, readingTime, emoji } = post;
  const c = meta[category] || meta.general;

  if (featured) {
    return (
      <article className="bg-white border border-cream-sand rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-card">
        <div className={`${c.bg} flex items-center justify-center text-7xl min-h-[220px]`} aria-hidden="true">
          {emoji || c.emoji}
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-gold-light text-gold px-3 py-1 rounded-full mb-3 w-fit">
            ⭐ Artículo destacado
          </span>
          <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${c.badge} px-2.5 py-1 rounded-full mb-4 w-fit`}>
            {c.emoji} {c.label}
          </span>
          <h2 className="font-display text-2xl font-bold text-forest-dark leading-tight mb-3">
            <Link href={`/articulos/${slug}`} className="hover:text-forest-mid no-underline transition-colors">
              {title}
            </Link>
          </h2>
          {excerpt && <p className="text-sm text-ink-muted leading-relaxed mb-5">{excerpt}</p>}
          {readingTime && <p className="text-xs text-ink-light mb-5">⏱ {readingTime} min de lectura</p>}
          <Link href={`/articulos/${slug}`} className="inline-flex items-center gap-1.5 bg-forest-dark text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-forest-mid transition-colors no-underline w-fit">
            Leer artículo →
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white border border-cream-sand rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lift transition-all duration-200">
      <div className={`${c.bg} flex items-center justify-center text-5xl h-36`} aria-hidden="true">
        {emoji || c.emoji}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${c.badge} px-2.5 py-1 rounded-full`}>
            {c.emoji} {c.label}
          </span>
          {readingTime && <span className="text-xs text-ink-light">⏱ {readingTime} min</span>}
        </div>
        <h3 className="font-display font-bold text-forest-dark leading-snug mb-2 text-base">
          <Link href={`/articulos/${slug}`} className="hover:text-forest-mid no-underline transition-colors">
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 flex-1">{excerpt}</p>
        )}
      </div>
      <div className="px-5 py-3.5 border-t border-cream-sand">
        <Link href={`/articulos/${slug}`} className="text-sm font-semibold text-forest-mid hover:text-forest-dark no-underline transition-colors">
          Leer artículo →
        </Link>
      </div>
    </article>
  );
}
