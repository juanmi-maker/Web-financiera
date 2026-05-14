import SEO from '../components/SEO';
import Link from 'next/link';
import Newsletter from '../components/Newsletter';

export default function SobreNosotrosPage() {
  return (
    <>
      <SEO title="Sobre nosotros" description="Quiénes somos y por qué creamos Dinero Joven, el blog de finanzas personales para jóvenes." canonical="/sobre-nosotros" />

      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">Sobre Dinero Joven</h1>
          <p className="text-white/60 max-w-lg">Empezamos desde cero, sin conocer nada de finanzas. Ahora compartimos lo que aprendimos.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-prose mx-auto px-5">
          <div className="bg-white border border-cream-sand rounded-2xl p-8 space-y-6 text-sm text-ink-muted leading-relaxed">

            <div>
              <h2 className="font-display text-2xl font-bold text-forest-dark mb-3">¿Por qué existe este blog?</h2>
              <p>Porque nadie nos enseñó esto en el colegio. Llegamos a los 25 años sin saber qué era un fondo de inversión, sin entender por qué nuestra tarjeta costaba dinero cada mes y sin tener un euro ahorrado.</p>
              <p className="mt-3"><strong className="text-ink">Dinero Joven</strong> nació de la frustración de buscar información financiera en español y encontrar solo tecnicismos, cursos caros o consejos que no aplican a nuestra realidad.</p>
            </div>

            <div className="bg-forest-pale border border-forest-mint rounded-xl p-5">
              <h3 className="font-display font-bold text-forest-dark text-base mb-3">Nuestro compromiso</h3>
              <ul className="space-y-2">
                {[
                  '✅ Contenido 100% gratuito, siempre',
                  '✅ Sin asesoría financiera (somos educadores, no asesores)',
                  '✅ Transparencia total sobre cómo funciona la web',
                  '✅ Información verificada antes de publicar',
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-forest-dark mb-3">Aviso legal importante</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-xs leading-relaxed">⚠️ <strong>Dinero Joven no es un asesor financiero.</strong> Todo el contenido es únicamente educativo e informativo. Las decisiones de inversión son tu responsabilidad. Consulta siempre con un asesor financiero certificado antes de invertir.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/articulos" className="inline-flex text-sm font-semibold bg-forest-dark text-white px-5 py-2.5 rounded-md hover:bg-forest-mid transition-colors no-underline">
                Ver todos los artículos →
              </Link>
              <Link href="/contacto" className="inline-flex text-sm font-semibold border border-forest-dark text-forest-dark px-5 py-2.5 rounded-md hover:bg-forest-pale transition-colors no-underline">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 pb-16">
        <div className="max-w-prose mx-auto px-5">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
