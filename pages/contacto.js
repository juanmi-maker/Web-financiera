import { useState } from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

const FORMSPREE_URL = 'https://formspree.io/f/xgodjjop';

export default function ContactoPage() {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!privacyChecked) return;
    setStatus('sending');

    const form = e.target;
    const data = {
      name:    form.name.value,
      email:   form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <SEO
        title="Contacto"
        description="¿Tienes dudas o sugerencias sobre finanzas personales? Escríbenos y te respondemos en 24-48 horas. Dinero Joven."
        canonical="/contacto"
      />

      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <span className="text-white/60">Contacto</span>
          </nav>
          <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">Escríbenos</h1>
          <p className="text-white/60 max-w-lg">¿Tienes alguna duda, sugerencia o quieres saludar? Leemos todos los mensajes y respondemos en 24-48 horas.</p>
        </div>
      </section>

      <section className="py-14 bg-[#FAFAF7]">
        <div className="max-w-site mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Info lateral */}
            <div>
              <h2 className="font-display text-2xl font-bold text-forest-dark tracking-tight mb-3">Hablemos</h2>
              <p className="text-sm text-ink-muted mb-7 leading-relaxed">
                No somos asesores financieros, pero podemos orientarte hacia los recursos correctos y responder
                dudas sobre el contenido del blog.
              </p>

              {[
                { icon: '📧', label: 'Email',     value: 'dinerojovenblog@gmail.com' },
                { icon: '⏰', label: 'Respuesta', value: '24-48 horas laborables' },
                { icon: '🌍', label: 'Cobertura', value: 'España y Latinoamérica' },
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
                <p className="text-xs text-amber-800 leading-relaxed">
                  ⚠️ <strong>Importante:</strong> No proporcionamos asesoría financiera personalizada.
                  El contenido del blog es solo informativo. Para decisiones de inversión, consulta con un asesor certificado.
                </p>
              </div>

              {/* Links útiles */}
              <div className="mt-8 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-light mb-3">Quizás encuentras la respuesta aquí</p>
                {[
                  ['📊 Cómo hacer un presupuesto', '/articulos/como-hacer-presupuesto-personal'],
                  ['💰 Fondo de emergencia', '/articulos/fondo-de-emergencia-que-es-cuanto-necesitas'],
                  ['📈 Invertir desde cero', '/articulos/como-invertir-desde-cero-con-100-euros'],
                  ['🏠 Hipoteca para jóvenes', '/articulos/hipoteca-jovenes-guia-completa'],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-forest-mid hover:text-forest-dark underline underline-offset-2 no-underline hover:underline transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white border border-cream-sand rounded-2xl p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-forest-dark mb-6">Envíanos un mensaje</h2>

              {status === 'sent' ? (
                <div className="bg-forest-pale border border-forest-mint rounded-xl p-6 text-center">
                  <p className="text-4xl mb-3">✅</p>
                  <p className="font-semibold text-forest-dark mb-1">¡Mensaje enviado!</p>
                  <p className="text-sm text-ink-muted">Te respondemos en 24-48 horas laborables.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="name">
                        Nombre *
                      </label>
                      <input
                        id="name" name="name" type="text" required placeholder="Tu nombre"
                        className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email" name="email" type="email" required placeholder="tu@email.com"
                        className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="subject">
                      Asunto *
                    </label>
                    <select
                      id="subject" name="subject" required defaultValue=""
                      className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecciona un asunto…</option>
                      <option>Duda sobre un artículo</option>
                      <option>Propuesta de colaboración</option>
                      <option>Error en el contenido</option>
                      <option>Sugerencia de tema</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5" htmlFor="message">
                      Mensaje *
                    </label>
                    <textarea
                      id="message" name="message" required rows={4} placeholder="Cuéntanos…"
                      className="w-full px-3.5 py-2.5 border border-cream-sand rounded-lg text-sm text-ink bg-cream outline-none focus:ring-2 focus:ring-forest-light resize-y"
                    />
                  </div>

                  {/* Checkbox privacidad — controla el botón */}
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyChecked}
                      onChange={e => setPrivacyChecked(e.target.checked)}
                      className="mt-0.5 accent-forest-dark cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-ink-muted leading-relaxed cursor-pointer select-none">
                      He leído y acepto la{' '}
                      <Link href="/privacidad" className="text-forest-mid underline underline-offset-2">
                        Política de Privacidad
                      </Link>{' '}de Dinero Joven. *
                    </label>
                  </div>

                  {/* Botón bloqueado si no se acepta privacidad */}
                  <button
                    type="submit"
                    disabled={!privacyChecked || status === 'sending'}
                    className={`w-full font-semibold text-sm py-3 rounded-lg transition-all ${
                      privacyChecked && status !== 'sending'
                        ? 'bg-forest-dark text-white hover:bg-forest-mid cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-600 text-center">
                      Ha ocurrido un error. Por favor, inténtalo de nuevo o escríbenos directamente a{' '}
                      <a href="mailto:dinerojovenblog@gmail.com" className="underline">dinerojovenblog@gmail.com</a>.
                    </p>
                  )}

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
