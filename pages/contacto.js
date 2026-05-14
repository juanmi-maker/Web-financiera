import { useState } from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO title="Contacto" description="¿Tienes dudas o sugerencias? Escríbenos y te respondemos en 24-48 horas." canonical="/contacto" />

      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">Escríbenos</h1>
          <p className="text-white/60 max-w-lg">¿Tienes alguna duda, sugerencia o simplemente quieres saludar? Leemos todos los mensajes.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-site mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-forest-dark tracking-tight mb-3">Hablemos</h2>
              <p className="text-sm text-ink-muted mb-7 leading-relaxed">No somos asesores financieros, pero podemos orientarte hacia los recursos correctos y responder dudas sobre el contenido del blog.</p>

              {[
                { icon: '📧', label: 'Email',      value: 'hola@dinerojoven.com' },
                { icon: '⏰', label: 'Respuesta',  value: '24-48 horas laborables' },
                { icon: '🌍', label: 'Cobertura',  value: 'España y Latinoamérica' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 bg-forest-pale border border-forest-mint rounded-lg flex items-center justify-center text-lg shrink-0">{icon}</div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-light">{label}</p>
                    <p className="text-sm font-medium text-ink">{value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                <p className="text-xs text-amber-800 leading-relaxed">⚠️ <strong>Importante:</strong> No proporcionamos asesoría financiera personalizada. El contenido del blog es solo informativo. Para decisiones de inversión, consulta con un asesor certificado.</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-cream-sand rounded-2xl p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-forest-dark mb-6">Envíanos un mensaje</h2>

              {sent ? (
                <div className="bg-forest-pale border border-forest-mint rounded-xl p-6 text-center">
                  <p className="text-3xl mb-2">✅</p>
                  <p className="font-semibold text-forest-dark mb-1">¡Mensaje enviado!</p>
                  <p className="text-sm text-ink-muted">Te respondemos en 24-48 horas.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="name">Nombre *</label>
                      <input id="name" type="text" required placeholder="Tu nombre"
                        className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm font-body text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="email">Email *</label>
                      <input id="email" type="email" required placeholder="tu@email.com"
                        className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm font-body text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="subject">Asunto *</label>
                    <select id="subject" required defaultValue=""
                      className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm font-body text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light appearance-none cursor-pointer">
                      <option value="" disabled>Selecciona un asunto…</option>
                      <option>Duda sobre un artículo</option>
                      <option>Propuesta de colaboración</option>
                      <option>Error en el contenido</option>
                      <option>Sugerencia de tema</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="message">Mensaje *</label>
                    <textarea id="message" required rows={4} placeholder="Cuéntanos…"
                      className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm font-body text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light resize-y" />
                  </div>

                  <div className="flex items-start gap-2.5">
                    <input type="checkbox" id="privacy" required className="mt-0.5 accent-forest-dark cursor-pointer" />
                    <label htmlFor="privacy" className="text-xs text-ink-muted leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <Link href="/privacidad" className="text-forest-mid underline underline-offset-2">Política de Privacidad</Link>.
                    </label>
                  </div>

                  <button type="submit"
                    className="w-full bg-forest-dark text-white font-semibold text-sm py-3 rounded-lg hover:bg-forest-mid transition-colors cursor-pointer">
                    Enviar mensaje →
                  </button>
                  <p className="text-xs text-ink-light text-center">Respondemos en 24-48h. Sin spam.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
