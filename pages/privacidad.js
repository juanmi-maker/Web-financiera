import SEO from '../components/SEO';
import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de Privacidad de Dinero Joven. Cómo tratamos tus datos personales conforme al RGPD, derechos ARCO-POL, publicidad de Google AdSense y transferencias internacionales."
        canonical="/privacidad"
      />

      {/* Header */}
      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <span className="text-white/60">Política de Privacidad</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔒</span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Política de Privacidad</h1>
          </div>
          <p className="text-white/50 text-sm mt-2">Última actualización: junio de 2025 · Conforme al RGPD (UE) 2016/679 y la LOPDGDD 3/2018</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-[#FAFAF7]">
        <div className="max-w-prose mx-auto px-5 space-y-10 text-ink-muted text-sm leading-relaxed">

          <p className="text-base text-ink leading-relaxed">
            En <strong>Dinero Joven</strong> nos comprometemos a proteger la privacidad de nuestros usuarios. La presente Política de Privacidad describe cómo recopilamos, utilizamos, conservamos y protegemos la información personal de los usuarios del sitio web, de conformidad con el <strong>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo</strong> (en adelante, RGPD) y la <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales</strong> (en adelante, LOPDGDD).
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              1. Responsable del Tratamiento
            </h2>
            <div className="bg-white border border-cream-sand rounded-2xl p-6 space-y-2">
              {[
                ['Denominación', 'Dinero Joven'],
                ['Domicilio', 'Valencia, Comunidad Valenciana, España'],
                ['Correo electrónico de privacidad', 'dinerojovenblog@gmail.com'],
                ['Actividad', 'Publicación de contenido educativo sobre finanzas personales'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-3 py-2 border-b border-gray-100 last:border-0">
                  <span className="font-semibold text-ink sm:w-64 shrink-0">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              2. Datos Personales que Recopilamos
            </h2>
            <p className="mb-4">
              En función de la forma en que el usuario interactúe con el Sitio, podemos recopilar las siguientes categorías de datos personales:
            </p>
            <div className="space-y-3">
              {[
                ['📧 Formulario de contacto', 'Nombre, dirección de correo electrónico y contenido del mensaje remitido. Estos datos son proporcionados voluntariamente por el usuario con el fin de gestionar su consulta o solicitud.'],
                ['📰 Suscripción al boletín', 'Dirección de correo electrónico proporcionada voluntariamente por el usuario al suscribirse al boletín de noticias (newsletter) del Sitio.'],
                ['📊 Datos de navegación', 'Datos técnicos y estadísticos de uso del Sitio recopilados a través de cookies de análisis, siempre de forma anonimizada: páginas visitadas, tiempo de permanencia, dispositivo utilizado, navegador y país de acceso. Estos datos no permiten identificar al usuario de forma directa.'],
                ['📢 Datos publicitarios', 'Información sobre las interacciones del usuario con los anuncios mostrados en el Sitio, recopilada por Google AdSense a través de cookies publicitarias, siempre condicionada al consentimiento previo del usuario.'],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white border border-cream-sand rounded-xl p-4">
                  <h3 className="font-semibold text-ink mb-1">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              El Sitio <strong>no recopila datos personales de categorías especiales</strong> (datos sobre salud, origen étnico, ideología política, religión, vida sexual u otros datos sensibles según el artículo 9 del RGPD).
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              3. Finalidad del Tratamiento
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gestión de consultas:</strong> Responder a las solicitudes, preguntas o comentarios enviados a través del formulario de contacto del Sitio.</li>
              <li><strong>Envío del boletín de noticias:</strong> Remitir periódicamente al usuario el newsletter al que se ha suscrito voluntariamente, con contenidos sobre finanzas personales, ahorro e inversión.</li>
              <li><strong>Análisis estadístico:</strong> Analizar el uso del Sitio de forma agregada y anonimizada, con el fin de mejorar su rendimiento, contenidos y usabilidad. En ningún caso esta finalidad implica la identificación del usuario.</li>
              <li><strong>Publicidad:</strong> Mostrar anuncios relevantes a través de Google AdSense, personalizados en función de los intereses del usuario cuando éste haya dado su consentimiento para el uso de cookies publicitarias.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> Conservar la información necesaria para dar cumplimiento a las obligaciones legales aplicables al Titular.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              4. Base Jurídica del Tratamiento
            </h2>
            <div className="overflow-x-auto rounded-xl border border-cream-sand">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-forest-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-xs tracking-wide">Finalidad</th>
                    <th className="px-4 py-3 text-left font-semibold text-xs tracking-wide">Base jurídica (Art. 6 RGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gestión de consultas', 'Consentimiento del interesado (Art. 6.1.a)'],
                    ['Newsletter', 'Consentimiento del interesado (Art. 6.1.a)'],
                    ['Análisis estadístico anónimo', 'Interés legítimo del responsable (Art. 6.1.f)'],
                    ['Publicidad (AdSense)', 'Consentimiento del interesado (Art. 6.1.a)'],
                    ['Obligaciones legales', 'Cumplimiento de obligación legal (Art. 6.1.c)'],
                  ].map(([fin, base], i) => (
                    <tr key={fin} className={`border-b border-cream-sand last:border-0 ${i % 2 === 1 ? 'bg-forest-pale' : 'bg-white'}`}>
                      <td className="px-4 py-3 font-medium text-ink">{fin}</td>
                      <td className="px-4 py-3">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              5. Publicidad de Terceros: Google AdSense y DoubleClick
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 mb-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>ℹ️ Sobre la publicidad personalizada:</strong> Este sitio usa Google AdSense para mostrar anuncios. Google puede personalizar los anuncios en función del historial de navegación del usuario mediante cookies como la de DoubleClick.
              </p>
            </div>
            <p className="mb-3">
              El Sitio utiliza <strong>Google AdSense</strong>, un servicio de publicidad gestionado por <strong>Google LLC</strong>. Para prestar este servicio, Google hace uso de cookies propias y de terceros, entre ellas la cookie <strong>IDE</strong> (DoubleClick), que permite a Google identificar de forma pseudónima al usuario y mostrarle anuncios basados en sus intereses y en sus visitas previas tanto al Sitio como a otros sitios web que utilizan la tecnología publicitaria de Google.
            </p>
            <p className="mb-3">
              El uso de la cookie de DoubleClick para la publicidad basada en intereses puede inhabilitarse accediendo a la <strong>Configuración de anuncios de Google</strong> en{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">adssettings.google.com</a>.
              Al inhabilitar esta opción, los anuncios que se muestren al usuario dejarán de estar personalizados, aunque seguirán siendo visibles en el Sitio.
            </p>
            <p>
              El Titular no tiene acceso ni control sobre las cookies utilizadas por Google AdSense. Para más información, puede consultar la{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">Política de privacidad de Google</a>.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              6. Conservación de los Datos
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Datos de contacto:</strong> Se conservan durante el tiempo necesario para gestionar la consulta y, posteriormente, durante el período de prescripción de las acciones legales derivadas (en general, 3 años).</li>
              <li><strong>Datos de newsletter:</strong> Se conservan mientras el usuario mantenga su suscripción activa. Tras la baja, los datos se eliminan en un plazo máximo de 30 días, salvo obligación legal en contrario.</li>
              <li><strong>Datos de análisis:</strong> Los datos de navegación anonimizados se conservan conforme a los plazos establecidos por Google Analytics (por defecto, 26 meses).</li>
              <li><strong>Datos publicitarios:</strong> Se conservan conforme a la duración de las cookies de Google AdSense, detallada en la{' '}
                <Link href="/cookies" className="text-forest-mid underline underline-offset-2">Política de Cookies</Link>.
              </li>
            </ul>
          </div>

          {/* 7 — ARCO-POL */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              7. Derechos del Interesado (ARCO-POL)
            </h2>
            <p className="mb-4">
              De conformidad con el RGPD y la LOPDGDD, el usuario tiene reconocidos los siguientes derechos en relación con el tratamiento de sus datos personales:
            </p>
            <div className="space-y-3">
              {[
                ['🔍 Derecho de Acceso (Art. 15 RGPD)', 'El usuario tiene derecho a obtener confirmación sobre si sus datos personales están siendo objeto de tratamiento y, en tal caso, acceder a dichos datos y obtener información sobre la finalidad del tratamiento, las categorías de datos, los destinatarios y el plazo de conservación previsto.'],
                ['✏️ Derecho de Rectificación (Art. 16 RGPD)', 'El usuario tiene derecho a obtener la rectificación de los datos personales inexactos que le conciernan o a completar los que sean incompletos.'],
                ['🗑️ Derecho de Supresión o "Derecho al Olvido" (Art. 17 RGPD)', 'El usuario tiene derecho a solicitar la supresión de sus datos personales cuando, entre otros motivos, los datos ya no sean necesarios para los fines que motivaron su recogida, el usuario retire su consentimiento, o los datos hayan sido tratados ilícitamente.'],
                ['🚫 Derecho de Oposición (Art. 21 RGPD)', 'El usuario tiene derecho a oponerse en cualquier momento al tratamiento de sus datos personales basado en el interés legítimo del Titular, incluida la elaboración de perfiles. En tal caso, el Titular dejará de tratar los datos, salvo que acredite motivos legítimos imperiosos que prevalezcan sobre los intereses del usuario.'],
                ['📦 Derecho a la Portabilidad (Art. 20 RGPD)', 'El usuario tiene derecho a recibir los datos personales que le incumban en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento, cuando el tratamiento esté basado en el consentimiento y se efectúe por medios automatizados.'],
                ['⏸️ Derecho a la Limitación del Tratamiento (Art. 18 RGPD)', 'El usuario tiene derecho a solicitar la limitación del tratamiento de sus datos cuando impugne la exactitud de los datos, el tratamiento sea ilícito y se oponga a su supresión, o cuando el Titular ya no necesite los datos pero el usuario los precise para el ejercicio o defensa de reclamaciones.'],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white border border-cream-sand rounded-xl p-4">
                  <h3 className="font-semibold text-ink mb-1">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-forest-pale border border-forest-mint rounded-xl p-5">
              <h3 className="font-semibold text-forest-dark mb-2">¿Cómo ejercer tus derechos?</h3>
              <p>
                Para ejercer cualquiera de los derechos anteriores, el usuario deberá dirigir una comunicación escrita al Titular a través de la dirección de correo electrónico{' '}
                <a href="mailto:dinerojovenblog@gmail.com" className="text-forest-mid font-semibold underline underline-offset-2">
                  dinerojovenblog@gmail.com
                </a>
                , indicando: (i) el derecho que desea ejercer, (ii) su nombre completo y (iii) una copia de un documento que acredite su identidad. El Titular responderá en el plazo máximo de un mes desde la recepción de la solicitud, prorrogable dos meses adicionales en caso de solicitudes especialmente complejas.
              </p>
            </div>
          </div>

          {/* 8 — AEPD */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              8. Autoridad de Control: Derecho a Reclamar ante la AEPD
            </h2>
            <p className="mb-3">
              Si el usuario considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, o que sus derechos no han sido debidamente atendidos por el Titular, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, autoridad de control competente en materia de protección de datos en España.
            </p>
            <p className="mb-3">
              La AEPD puede ser contactada a través de los siguientes medios:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Sede electrónica: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">www.aepd.es</a></li>
              <li>Dirección postal: C/ Jorge Juan, 6, 28001 Madrid (España)</li>
              <li>Teléfono de información: 901 100 099</li>
            </ul>
            <p className="mt-3">
              El ejercicio de este derecho es independiente y compatible con el ejercicio previo o simultáneo de los derechos ARCO-POL ante el Titular.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              9. Transferencias Internacionales de Datos
            </h2>
            <p className="mb-3">
              El uso de determinados servicios de terceros en el Sitio —en particular <strong>Google Analytics</strong> y <strong>Google AdSense</strong>, ofrecidos por <strong>Google LLC</strong>, con sede en los Estados Unidos de América— puede implicar la transferencia de datos personales a un país tercero fuera del Espacio Económico Europeo (EEE).
            </p>
            <p className="mb-3">
              Dichas transferencias se realizan al amparo de las <strong>Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea (Decisión de Ejecución 2021/914/UE), que garantizan que los datos transferidos a Google LLC reciben un nivel de protección equivalente al exigido por la legislación de la Unión Europea en materia de protección de datos.
            </p>
            <p>
              El usuario puede obtener más información sobre las garantías aplicables a dichas transferencias consultando la{' '}
              <a href="https://policies.google.com/privacy/frameworks" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">
                documentación sobre cumplimiento normativo de Google
              </a>
              {' '}o contactando con el Titular en el correo indicado en esta política.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              10. Medidas de Seguridad
            </h2>
            <p className="mb-3">
              El Titular ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizados, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
            </p>
            <p>
              No obstante, el usuario debe ser consciente de que las medidas de seguridad en Internet no son infranqueables. En caso de detectar cualquier incidencia de seguridad relacionada con el Sitio, el usuario puede comunicarlo al Titular a través del correo electrónico de contacto habilitado a tal efecto.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              11. Menores de Edad
            </h2>
            <p>
              El Sitio no está dirigido a menores de 14 años. El Titular no recopila conscientemente datos personales de menores de dicha edad. Si el Titular llegase a tener conocimiento de que ha recibido datos personales de un menor de 14 años sin el consentimiento verificable de sus padres o tutores legales, procederá a su eliminación inmediata.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              12. Actualizaciones de la Política de Privacidad
            </h2>
            <p>
              El Titular se reserva el derecho a actualizar la presente Política de Privacidad en cualquier momento para adaptarla a las modificaciones legislativas, jurisprudenciales o tecnológicas que resulten aplicables. Se recomienda al usuario que la revise periódicamente. La fecha de última actualización figura en el encabezado de esta página.
            </p>
          </div>

          {/* Footer */}
          <div className="bg-white border border-cream-sand rounded-2xl p-6 text-center">
            <p className="text-ink-muted text-xs leading-relaxed">
              Para cualquier consulta sobre el tratamiento de sus datos personales, puede contactar con el responsable del tratamiento en{' '}
              <a href="mailto:dinerojovenblog@gmail.com" className="text-forest-mid font-semibold underline underline-offset-2">
                dinerojovenblog@gmail.com
              </a>
              . Comprometidos con tu privacidad desde Valencia, España.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
