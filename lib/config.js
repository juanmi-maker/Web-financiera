const siteConfig = {
  name:        'Dinero Joven',
  tagline:     'Finanzas personales para jóvenes que quieren más',
  description: 'Aprende a ahorrar, invertir y manejar tu dinero con guías prácticas para jóvenes en España y Latinoamérica. Sin tecnicismos, sin excusas.',
  url:         'https://dinerojoven.com',
  locale:      'es_ES',
  author:      'Equipo Dinero Joven',
  twitter:     '@dinerojoven',
  email:       'dinerojovenblog@gmail.com',

  navLinks: [
    { label: 'Ahorro',            href: '/categoria/ahorro' },
    { label: 'Inversión',         href: '/categoria/inversion' },
    { label: 'Deudas',            href: '/categoria/deudas' },
    { label: 'Todos los artículos', href: '/articulos' },
  ],

  categories: [
    { label: '✦ Todo',       href: '/articulos',          slug: 'all' },
    { label: '💰 Ahorro',    href: '/categoria/ahorro',   slug: 'ahorro' },
    { label: '📈 Inversión', href: '/categoria/inversion', slug: 'inversion' },
    { label: '💳 Deudas',   href: '/categoria/deudas',   slug: 'deudas' },
    { label: '🎯 Básicos',  href: '/categoria/basicos',  slug: 'basicos' },
    { label: '🏠 Vivienda', href: '/categoria/vivienda', slug: 'vivienda' },
  ],
};

module.exports = siteConfig;
