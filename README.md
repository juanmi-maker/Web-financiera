# 💸 Dinero Joven — v3

Blog de finanzas personales para jóvenes en España y Latinoamérica.
Construido con **Next.js 14 + Tailwind CSS 3**.

---

## 🚀 Instalación y arranque

```bash
# 1. Entra en la carpeta
cd dinero-joven

# 2. Instala dependencias
npm install

# 3. Arranca en local
npm run dev

# 4. Abre en el navegador
# http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
dinero-joven/
├── pages/
│   ├── index.js                  # Portada
│   ├── _app.js                   # Layout global
│   ├── _document.js              # HTML base
│   ├── 404.js                    # Página de error
│   ├── sitemap.xml.js            # Sitemap automático
│   ├── robots.txt.js             # Robots.txt automático
│   ├── articulos/
│   │   ├── index.js              # Listado de artículos
│   │   └── [slug].js             # Artículo individual
│   ├── categoria/
│   │   └── [slug].js             # Página de categoría
│   ├── sobre-nosotros.js
│   ├── contacto.js
│   ├── privacidad.js
│   ├── cookies.js
│   └── aviso-legal.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── SEO.js
│   ├── ArticleCard.js
│   ├── AuthorBox.js
│   ├── CookieBanner.js
│   └── Newsletter.js
├── lib/
│   ├── config.js                 # Configuración global
│   └── posts.js                  # Utilidades para leer posts
├── posts/                        # Artículos en Markdown
│   └── *.md
├── styles/
│   └── globals.css               # Solo directivas Tailwind
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── vercel.json
└── .gitignore
```

---

## ✏️ Cómo añadir un artículo nuevo

Crea un archivo `.md` en la carpeta `posts/`:

```markdown
---
title: "El título de tu artículo"
slug: "url-del-articulo"
excerpt: "Descripción corta para SEO y tarjetas (máx 160 caracteres)"
date: "2024-05-01"
category: "ahorro"       # ahorro | inversion | deudas | basicos | vivienda
tags: ["tag1", "tag2"]
emoji: "💰"
featured: false          # true = aparece destacado en portada
readingTime: 5
---

Aquí empieza tu contenido en Markdown.

## Título H2

Párrafo normal.

### Título H3

- Lista item 1
- Lista item 2
```

El artículo aparece automáticamente en el listado y en la categoría correspondiente.

---

## 🐙 Subir a GitHub y Vercel

### GitHub

```bash
git init
git add .
git commit -m "Primer commit 🚀"
git remote add origin https://github.com/TU_USUARIO/dinero-joven.git
git push -u origin main
```

### Vercel

1. Ve a [vercel.com](https://vercel.com) y conéctalo con tu GitHub
2. Importa el repositorio `dinero-joven`
3. Framework: **Next.js** (se detecta automáticamente)
4. Clic en **Deploy**

Cada `git push` desplegará automáticamente.

---

## ⚙️ Personalización

Edita `lib/config.js` para cambiar:
- Nombre del blog
- Descripción y tagline
- Email de contacto
- URL del sitio (importante para el sitemap y SEO)
- Links de navegación

---

## 🎨 Colores del diseño (Tailwind)

Definidos en `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `forest-dark` | `#064E3B` | Fondos principales, headers |
| `forest-mid` | `#065F46` | Hover states |
| `forest-light` | `#059669` | Acentos, links |
| `forest-pale` | `#ECFDF5` | Fondos suaves |
| `forest-mint` | `#D1FAE5` | Bordes verdes |
| `cream` | `#FAFAF7` | Fondo general |
| `cream-dark` | `#F0EDE6` | Secciones alternativas |
| `ink` | `#1C1917` | Texto principal |
| `ink-muted` | `#57534E` | Texto secundario |

---

## 📋 Comandos útiles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # Revisar erroresclaro
```
