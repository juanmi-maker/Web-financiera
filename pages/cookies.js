import SEO from '../components/SEO';
import Link from 'next/link';

const cookieRows = [
  ['dj_cookies',    'Esencial',                '1 año',    'Guarda tu preferencia de aceptación del banner de cookies. No almacena datos personales identificables.'],
  ['_ga',           'Análisis (Google)',        '2 años',   'Google Analytics — identifica sesiones de forma anónima para estadísticas de uso del Sitio.'],
  ['_gid',          'Análisis (Google)',        '24 horas', 'Google Analytics — distingue usuarios de forma anónima entre sesiones.'],
  ['_gat',          'Análisis (Google)',        '1 minuto', 'Google Analytics — se usa para reducir el número de solicitudes al servidor en sitios con mucho tráfico.'],
  ['__gads / _gac', 'Publicitaria (Google)',    '13 meses', 'Google AdSense — mide la interacción con los anuncios y evita que se muestren los mismos anuncios repetidamente al mismo usuario.'],
  ['IDE',           'Publicitaria (DoubleClick)','1 año',   'Utilizada por Google DoubleClick para registrar y notificar las acciones del usuario en el sitio web después de haber visto un anuncio con el fin de medir su eficacia.'],
  ['test_cookie',   'Publicitaria (Google)',    'Sesión',   'Utilizada para verificar si el navegador del usuario soporta el uso de cookies.'],
];

export default function CookiesPage() {
  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Política de Cookies de Dinero Joven. Información completa sobre las cookies utilizadas, incluidas las de Google AdSense y DoubleClick, y cómo gestionarlas conforme al RGPD."
        canonical="/cookies"
      />

      {/* Header */}
      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <span className="text-white/60">Política de Cookies</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🍪</span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Política de Cookies</h1>
          </div>
          <p className="text-white/50 text-sm mt-2">Última actualización: junio de 2025 · Conforme al RGPD (UE) 2016/679 y la LSSI-CE</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-[#FAFAF7]">
        <div className="max-w-prose mx-auto px-5 space-y-10 text-ink-muted text-sm leading-relaxed">

          <p className="text-base text-ink leading-relaxed">
            En cumplimiento de lo establecido en el artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), así como del Reglamento (UE) 2016/679 (RGPD) y las directrices de la Agencia Española de Protección de Datos (AEPD), <strong>Dinero Joven</strong> pone a disposición de sus usuarios la presente Política de Cookies, que detalla qué cookies se utilizan, con qué finalidad y cómo el usuario puede gestionarlas.
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              1. ¿Qué son las Cookies?
            </h2>
            <p className="mb-3">
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario (ordenador, tableta, teléfono móvil, etc.) cuando este visita un sitio web. Sirven para que el sitio web recuerde información sobre la visita del usuario, como su idioma preferido y otras opciones, con el fin de facilitar su próxima visita y hacer que el sitio le resulte más útil.
            </p>
            <p className="mb-3">
              Las cookies pueden ser <strong>propias</strong> (establecidas por el propio sitio web visitado) o <strong>de terceros</strong> (establecidas por un dominio distinto al sitio visitado). Asimismo, según su duración, pueden clasificarse en <strong>cookies de sesión</strong> (que se eliminan cuando el usuario cierra el navegador) y <strong>cookies persistentes</strong> (que permanecen en el dispositivo durante el período indicado o hasta que el usuario las elimine manualmente).
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              2. Tipos de Cookies que Utilizamos
            </h2>
            <p className="mb-4">En <strong>Dinero Joven</strong> utilizamos los siguientes tipos de cookies:</p>

            <div className="space-y-4">
              <div className="bg-white border border-cream-sand rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">🔒 Cookies Estrictamente Necesarias</h3>
                <p>Son imprescindibles para el correcto funcionamiento del Sitio. Sin ellas, el sitio web no puede funcionar adecuadamente. No almacenan ningún dato personal identificable. No requieren consentimiento del usuario y no pueden desactivarse desde nuestras opciones de configuración.</p>
              </div>
              <div className="bg-white border border-cream-sand rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">📊 Cookies de Análisis o Medición</h3>
                <p>Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del Sitio. Para ello se analiza su navegación en el Sitio con el fin de mejorar la oferta de contenidos. Solo se activan si el usuario otorga su consentimiento.</p>
              </div>
              <div className="bg-white border border-cream-sand rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">📢 Cookies Publicitarias (Google AdSense)</h3>
                <p>Permiten la gestión eficaz de los espacios publicitarios del Sitio. Son gestionadas por proveedores de servicios de publicidad de terceros, en particular <strong>Google AdSense</strong>. Recogen información sobre los anuncios mostrados a los usuarios y las acciones realizadas en respuesta a dichos anuncios. Solo se activan si el usuario otorga su consentimiento.</p>
              </div>
            </div>
          </div>

          {/* 3 — CRITICAL AdSense section */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              3. Cookies Publicitarias de Terceros: Google AdSense
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 mb-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>ℹ️ Información importante sobre publicidad:</strong> Este sitio web utiliza Google AdSense para mostrar anuncios publicitarios. Google puede usar cookies para mostrar anuncios basados en visitas anteriores del usuario a este sitio u otros sitios web.
              </p>
            </div>
            <p className="mb-3">
              <strong>Dinero Joven</strong> utiliza <strong>Google AdSense</strong>, un servicio de publicidad ofrecido por Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, EE. UU.). Google AdSense utiliza cookies —entre ellas la cookie <strong>DoubleClick</strong>— para publicar anuncios relevantes para los usuarios.
            </p>
            <p className="mb-3">
              Mediante el uso de estas cookies, Google registra las visitas del usuario al Sitio y a otros sitios web en los que se utiliza la tecnología publicitaria de Google. Esta información puede combinarse con otra obtenida previamente para mostrar al usuario anuncios más relevantes basados en sus intereses (<strong>publicidad basada en intereses</strong> o <strong>publicidad de remarketing</strong>).
            </p>
            <p className="mb-3">
              Los proveedores de terceros, incluido Google, utilizan cookies para publicar anuncios basados en las visitas anteriores del usuario a este sitio web o a otros sitios web. Google puede combinar los datos recogidos sobre el usuario en el Sitio con otros datos que haya obtenido de terceros para prestar sus servicios publicitarios.
            </p>
            <h3 className="font-semibold text-ink mb-2 mt-5">3.1 Publicidad Personalizada y Cookie DoubleClick (IDE)</h3>
            <p className="mb-3">
              La cookie <strong>IDE</strong>, gestionada por <strong>DoubleClick by Google</strong>, es una de las principales cookies utilizadas para la publicidad personalizada. Esta cookie se almacena en el dispositivo del usuario bajo el dominio <code className="bg-gray-100 px-1 rounded text-xs">.doubleclick.net</code> y su función principal es identificar al usuario de forma pseudónima, registrar sus interacciones con los anuncios y evitar que se le muestren repetidamente los mismos anuncios.
            </p>
            <p className="mb-3">
              El usuario puede <strong>inhabilitar el uso de la cookie DoubleClick</strong> para la publicidad basada en intereses y, de este modo, desactivar la personalización de anuncios. Para ello, puede acceder a la <strong>Configuración de anuncios de Google</strong> disponible en{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">
                adssettings.google.com
              </a>
              , donde podrá gestionar sus preferencias de personalización publicitaria.
            </p>
            <p>
              Más información sobre las prácticas de privacidad de Google en relación con AdSense puede encontrarse en la{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">
                Política de privacidad de Google
              </a>.
            </p>
          </div>

          {/* 4 — Cookie table */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              4. Detalle de las Cookies Utilizadas
            </h2>
            <p className="mb-4">A continuación se detalla la relación completa de cookies utilizadas en el Sitio:</p>
            <div className="overflow-x-auto rounded-xl border border-cream-sand">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-forest-dark text-white">
                  <tr>
                    {['Cookie', 'Tipo', 'Duración', 'Propósito'].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-xs tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map(([name, type, dur, desc], i) => (
                    <tr key={name} className={`border-b border-cream-sand last:border-0 ${i % 2 === 1 ? 'bg-forest-pale' : 'bg-white'}`}>
                      <td className="px-4 py-3 font-semibold text-ink whitespace-nowrap">{name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{type}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{dur}</td>
                      <td className="px-4 py-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              5. Base Legal para el Uso de Cookies
            </h2>
            <p className="mb-3">
              De conformidad con el artículo 6 del RGPD, la base legal para el uso de las diferentes cookies es la siguiente:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies estrictamente necesarias:</strong> Interés legítimo del Titular (Art. 6.1.f RGPD) y artículo 22.2 LSSI-CE, que exime del requisito de consentimiento para las cookies necesarias para la prestación del servicio expresamente solicitado.</li>
              <li><strong>Cookies de análisis y publicitarias:</strong> Consentimiento explícito del usuario (Art. 6.1.a RGPD), otorgado a través del banner de cookies. El usuario puede retirar su consentimiento en cualquier momento.</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              6. Cómo Gestionar y Desactivar las Cookies
            </h2>
            <p className="mb-4">
              El usuario dispone de varias vías para gestionar sus preferencias sobre cookies:
            </p>

            <h3 className="font-semibold text-ink mb-2">6.1 A través del banner de cookies del Sitio</h3>
            <p className="mb-4">
              Al acceder por primera vez al Sitio, se mostrará un banner de consentimiento de cookies. El usuario podrá aceptar o rechazar las cookies no estrictamente necesarias. En cualquier momento, el usuario puede revocar su consentimiento eliminando las cookies desde su navegador, momento en el cual el banner volverá a aparecer en su próxima visita.
            </p>

            <h3 className="font-semibold text-ink mb-2">6.2 A través de la configuración del navegador</h3>
            <p className="mb-3">El usuario puede configurar su navegador para rechazar, eliminar o ser notificado sobre las cookies:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">Microsoft Edge</a></li>
            </ul>
            <p className="mb-4 text-xs bg-white border border-cream-sand rounded-xl p-4">
              ⚠️ La desactivación de cookies puede afectar al correcto funcionamiento de algunas funciones del Sitio.
            </p>

            <h3 className="font-semibold text-ink mb-2">6.3 A través de herramientas de terceros</h3>
            <p className="mb-3">
              Para la gestión de cookies publicitarias de terceros, el usuario también puede recurrir a las siguientes herramientas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Configuración de anuncios de Google:</strong>{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">adssettings.google.com</a>
                {' '}— permite inhabilitar la publicidad personalizada de Google.
              </li>
              <li>
                <strong>Your Online Choices:</strong>{' '}
                <a href="https://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">youronlinechoices.com/es/</a>
                {' '}— herramienta desarrollada por la industria publicitaria europea que permite gestionar las preferencias de publicidad comportamental de múltiples proveedores.
              </li>
              <li>
                <strong>Network Advertising Initiative (NAI):</strong>{' '}
                <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-forest-mid underline underline-offset-2">optout.networkadvertising.org</a>
                {' '}— permite rechazar las cookies de publicidad comportamental de las empresas miembro de la NAI.
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              7. Transferencias Internacionales de Datos
            </h2>
            <p className="mb-3">
              Algunos de los proveedores de cookies de terceros mencionados en esta política, en particular <strong>Google LLC</strong>, están ubicados en los Estados Unidos de América. La transferencia de datos personales a dicho país se ampara en las <strong>Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea, que garantizan un nivel de protección de datos equivalente al exigido por la legislación de la Unión Europea.
            </p>
            <p>
              Para más información sobre las transferencias internacionales de datos, puede consultar la{' '}
              <Link href="/privacidad" className="text-forest-mid underline underline-offset-2">
                Política de Privacidad
              </Link>{' '}del Sitio.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              8. Actualización de la Política de Cookies
            </h2>
            <p>
              El Titular se reserva el derecho a modificar la presente Política de Cookies en cualquier momento, en función de las exigencias legislativas, jurisprudenciales o de las finalidades propias de los servicios prestados. Se recomienda al usuario que la revise periódicamente. La fecha de última actualización figura en el encabezado de esta página.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              9. Contacto
            </h2>
            <p>
              Para cualquier consulta relacionada con el uso de cookies en el Sitio, puede ponerse en contacto con el titular a través de la dirección de correo electrónico{' '}
              <a href="mailto:dinerojovenblog@gmail.com" className="text-forest-mid font-semibold underline underline-offset-2">
                dinerojovenblog@gmail.com
              </a>
              {' '}o a través de la{' '}
              <Link href="/contacto" className="text-forest-mid underline underline-offset-2">
                página de contacto
              </Link>.
            </p>
          </div>

          <div className="bg-white border border-cream-sand rounded-2xl p-6 text-center">
            <p className="text-ink-muted text-xs leading-relaxed">
              Esta Política de Cookies ha sido redactada conforme al RGPD (UE) 2016/679, la LSSI-CE y las directrices de la AEPD sobre el uso de cookies. Última actualización: junio de 2025.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
