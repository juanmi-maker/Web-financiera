import { useState } from 'react';

const NEWSLETTER_URL = 'https://formspree.io/f/mwvyddbj';

export default function Newsletter() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) { setStatus('error'); return; }
    setStatus('sending');

    try {
      const res = await fetch(NEWSLETTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      className="bg-forest-dark rounded-2xl px-8 py-12 text-center relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(5,150,105,.25),transparent_60%)] pointer-events-none" />

      <p className="text-2xl mb-2">📬</p>
      <h2 id="newsletter-heading" className="font-display text-2xl font-extrabold text-white mb-2 tracking-tight">
        Finanzas reales, sin rodeos
      </h2>
      <p className="text-white/65 text-sm mb-7 max-w-sm mx-auto">
        Un consejo accionable cada semana. Se lee en 3 minutos. Gratis, siempre.
      </p>

      {status === 'success' ? (
        <div className="flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-emerald-300/20 border border-emerald-300/40 text-emerald-300 font-semibold text-sm px-5 py-3 rounded-lg">
            ✅ ¡Suscripción confirmada! Revisa tu bandeja de entrada.
          </div>
          <p className="text-white/40 text-xs mt-2">
            Te hemos enviado un email de bienvenida. Si no lo ves, revisa la carpeta de spam.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center" noValidate>
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            aria-label="Tu dirección de email"
            className="flex-1 min-w-0 px-4 py-3 rounded-md text-sm font-body text-ink outline-none focus:ring-2 focus:ring-forest-light"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-forest-light hover:bg-forest-mid text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Enviando…' : 'Suscribirme →'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2">Introduce un email válido e inténtalo de nuevo.</p>
      )}

      <p className="text-white/30 text-xs mt-4">Sin spam. Puedes darte de baja cuando quieras.</p>
    </section>
  );
}
