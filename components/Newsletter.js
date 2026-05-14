import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) { setStatus('error'); return; }
    // Conecta aquí con Mailchimp, Brevo, ConvertKit, etc.
    setStatus('success');
    setEmail('');
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
        <div className="inline-flex items-center gap-2 bg-emerald-300/20 border border-emerald-300/40 text-emerald-300 font-semibold text-sm px-5 py-3 rounded-lg">
          ✅ ¡Perfecto! Revisa tu email para confirmar.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center" noValidate>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            aria-label="Tu dirección de email"
            className="flex-1 min-w-0 px-4 py-3 rounded-md text-sm font-body text-ink outline-none focus:ring-2 focus:ring-forest-light"
          />
          <button
            type="submit"
            className="bg-forest-light hover:bg-forest-mid text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Suscribirme →
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2">Introduce un email válido.</p>
      )}

      <p className="text-white/30 text-xs mt-4">Sin spam. Puedes darte de baja cuando quieras.</p>
    </section>
  );
}
