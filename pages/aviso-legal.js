import SEO from '../components/SEO';
import Link from 'next/link';

export default function AvisoLegalPage() {
  return (
    <>
      <SEO
        title="Aviso Legal"
        description="Aviso Legal de Dinero Joven. Información sobre el titular, condiciones de uso, propiedad intelectual, descargo de responsabilidad financiera y legislación aplicable conforme a la LSSI-CE."
        canonical="/aviso-legal"
      />

      {/* Header */}
      <section className="bg-forest-dark py-14">
        <div className="max-w-site mx-auto px-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
            <Link href="/" className="text-white/40 hover:text-white/70 no-underline transition-colors">Inicio</Link>
            <span>›</span>
            <span className="text-white/60">Aviso Legal</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">⚖️</span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">Aviso Legal</h1>
          </div>
          <p className="text-white/50 text-sm mt-2">Última actualización: junio de 2025 · Conforme a la Ley 34/2002 (LSSI-CE) y el RGPD (UE) 2016/679</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-[#FAFAF7]">
        <div className="max-w-prose mx-auto px-5 space-y-10 text-ink-muted text-sm leading-relaxed">

          <p className="text-base text-ink leading-relaxed">
            En cumplimiento de las obligaciones establecidas en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (en adelante, <strong>LSSI-CE</strong>), se pone a disposición de los usuarios la siguiente información legal relativa al titular y operador del sitio web <strong>Dinero Joven</strong>.
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              1. Información General del Titular (Art. 10 LSSI-CE)
            </h2>
            <div className="bg-white border border-cream-sand rounded-2xl p-6 space-y-2">
              {[
                ['Denominación del sitio', 'Dinero Joven'],
                ['Domicilio a efectos de notificaciones', 'Valencia, Comunidad Valenciana, España'],
                ['Correo electrónico de contacto legal', 'dinerojovenblog@gmail.com'],
                ['Ámbito de actividad', 'España y Latinoamérica'],
                ['Actividad principal', 'Publicación de contenido educativo e informativo sobre finanzas personales'],
                ['Normativa aplicable', 'Ley 34/2002 (LSSI-CE), RGPD (UE) 2016/679, LOPDGDD 3/2018'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-3 py-2 border-b border-gray-100 last:border-0">
                  <span className="font-semibold text-ink sm:w-64 shrink-0">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">
              El titular del sitio web es responsable del contenido publicado en el dominio <strong>dinerojoven.com</strong> y opera de conformidad con la legislación española vigente. Cualquier comunicación de carácter legal debe dirigirse exclusivamente al correo electrónico indicado anteriormente.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              2. Objeto y Ámbito de Aplicación
            </h2>
            <p className="mb-3">
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>Dinero Joven</strong> (en adelante, "el Sitio"), así como las relaciones entre el Titular y los usuarios que accedan, naveguen o utilicen el Sitio.
            </p>
            <p className="mb-3">
              El acceso al Sitio implica la aceptación plena y sin reservas de todas las disposiciones contenidas en el presente Aviso Legal, en la Política de Privacidad y en la Política de Cookies, en la versión publicada en el momento en que el usuario acceda al Sitio. En consecuencia, el usuario debe leer atentamente estos textos en cada ocasión en que se proponga utilizar el Sitio.
            </p>
            <p>
              El Titular se reserva el derecho a modificar, sin previo aviso, la presentación y configuración del Sitio, así como el presente Aviso Legal. Por ello, se recomienda al usuario que lo lea periódicamente, ya que el acceso continuado al Sitio implica la aceptación de las modificaciones introducidas.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              3. Condiciones de Uso
            </h2>
            <p className="mb-3">
              El acceso al Sitio es gratuito. Los usuarios se comprometen a utilizar el Sitio, sus contenidos y servicios de conformidad con la ley, la moral, las buenas costumbres y el orden público, y de acuerdo con lo establecido en el presente Aviso Legal.
            </p>
            <h3 className="font-semibold text-ink mb-2 mt-4">3.1 Obligaciones del Usuario</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>No utilizar el Sitio con fines ilícitos, ilegales o contrarios a lo establecido en el presente Aviso Legal.</li>
              <li>No realizar actividades que dañen, inutilicen, sobrecarguen, deterioren o impidan la normal utilización del Sitio.</li>
              <li>No introducir, almacenar o difundir mediante el Sitio cualquier programa, dato, virus, código o cualquier otro dispositivo que sea susceptible de causar daños al Sitio, al servidor, a la red o a cualquier equipo informático.</li>
              <li>No intentar acceder a áreas restringidas de los sistemas informáticos del Titular sin estar autorizado para ello.</li>
              <li>No reproducir, copiar, distribuir, transformar o modificar los contenidos del Sitio sin autorización del Titular.</li>
            </ul>
            <h3 className="font-semibold text-ink mb-2 mt-4">3.2 Prohibición de Uso Ilícito</h3>
            <p className="mb-3">
              Queda expresamente prohibido el uso del Sitio o de cualquiera de sus contenidos con fines comerciales, publicitarios o de cualquier otro tipo de explotación económica sin la previa autorización escrita del Titular. Asimismo, queda prohibida cualquier actuación que pueda ser considerada como competencia desleal o que infrinja los derechos de propiedad intelectual e industrial del Titular o de terceros.
            </p>
            <h3 className="font-semibold text-ink mb-2 mt-4">3.3 Veracidad de los Datos</h3>
            <p>
              En los casos en que el usuario proporcione datos personales a través de formularios del Sitio, el usuario declara que los datos facilitados son verdaderos, exactos, completos y actualizados, siendo el usuario el único responsable de cualquier daño o perjuicio que pudiera ocasionarse por el incumplimiento de dicha obligación.
            </p>
          </div>

          {/* 4 — WARNING BOX */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              4. Descargo de Responsabilidad Financiera
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl px-6 py-5 mb-5">
              <p className="text-amber-900 font-bold text-base mb-2">⚠️ Aviso Importante sobre el Contenido Financiero</p>
              <p className="text-amber-800 leading-relaxed">
                Todo el contenido publicado en <strong>Dinero Joven</strong> tiene carácter exclusivamente <strong>educativo, divulgativo e informativo</strong>. En ningún caso constituye asesoramiento financiero personalizado, recomendación de inversión, asesoramiento fiscal, jurídico ni de ninguna otra clase. El usuario es el único y exclusivo responsable de las decisiones financieras que adopte basándose en los contenidos del Sitio.
              </p>
            </div>
            <p className="mb-3">
              Los contenidos publicados en el Sitio tienen como único propósito la divulgación de conceptos generales sobre finanzas personales, ahorro, inversión y gestión del dinero. Dinero Joven <strong>no es una entidad financiera, ni una empresa de servicios de inversión, ni un asesor financiero registrado</strong> ante ningún organismo regulador español o europeo.
            </p>
            <p className="mb-3">
              Los artículos, guías, comparativas y cualquier otro contenido publicado en el Sitio se elaboran con fines exclusivamente educativos. La información publicada puede no estar actualizada o puede no ser aplicable a la situación financiera particular de cada usuario. El Titular no garantiza que la información contenida en el Sitio sea exacta, completa, actualizada o adecuada para las circunstancias específicas de cada usuario.
            </p>
            <p className="mb-3">
              <strong>Antes de tomar cualquier decisión financiera</strong>, el usuario deberá consultar con un profesional cualificado —asesor financiero registrado, gestor patrimonial, abogado o asesor fiscal— que pueda evaluar su situación personal y proporcionar un asesoramiento adaptado a sus necesidades específicas.
            </p>
            <p>
              El Titular no asume ninguna responsabilidad por las pérdidas, daños, perjuicios o costes de cualquier naturaleza que puedan derivarse, directa o indirectamente, del uso de la información contenida en el Sitio, incluyendo, sin limitación, pérdidas de beneficios o pérdidas financieras de cualquier tipo.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              5. Propiedad Intelectual e Industrial
            </h2>
            <p className="mb-3">
              Todos los contenidos del Sitio, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, logotipos, diseño gráfico, código fuente, estructura, marca y demás elementos susceptibles de protección, son titularidad exclusiva del Titular o de los correspondientes propietarios cuyos derechos el Titular tiene debidamente licenciados, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p className="mb-3">Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro acto de explotación de los contenidos del Sitio, tanto de forma total como parcial, sin la autorización previa y por escrito del Titular. En particular, queda prohibido:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Copiar, reproducir o distribuir los textos, artículos o guías publicados en el Sitio, en cualquier medio o soporte, sin autorización expresa por escrito.</li>
              <li>Modificar, transformar o crear obras derivadas a partir de los contenidos del Sitio.</li>
              <li>Reproducir el logotipo, nombre comercial u otros signos distintivos del Sitio sin autorización previa.</li>
              <li>Utilizar los contenidos del Sitio con fines comerciales sin la previa autorización escrita del Titular.</li>
              <li>Realizar cualquier acto de descompilación, ingeniería inversa o cualquier otro acto tendente a obtener el código fuente del Sitio.</li>
            </ul>
            <p>
              El Titular se reserva el ejercicio de todas las acciones civiles y penales que correspondan en caso de infracción de los derechos de propiedad intelectual e industrial protegidos por la legislación vigente.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              6. Política sobre Enlaces de Terceros
            </h2>
            <p className="mb-3">
              El Sitio puede contener enlaces a sitios web de terceros que son ajenos al Titular. Dichos enlaces se facilitan únicamente como referencia informativa para el usuario, sin que el Titular tenga control alguno sobre los contenidos, productos o servicios ofrecidos en tales sitios web.
            </p>
            <p className="mb-3">
              El Titular no asume ninguna responsabilidad sobre los contenidos, informaciones, datos, archivos, productos y servicios que figuren en los sitios web de terceros a los que se pueda acceder a través de los enlaces presentes en el Sitio. La presencia de un enlace en el Sitio no implica la aprobación, patrocinio o recomendación por parte del Titular del sitio web enlazado.
            </p>
            <p>
              Los usuarios que deseen establecer un enlace desde sus propios sitios web al Sitio deberán obtener la autorización previa y por escrito del Titular.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              7. Limitación de Responsabilidad Técnica
            </h2>
            <p className="mb-3">
              El Titular adoptará todas las medidas técnicas razonables para garantizar la seguridad, accesibilidad y disponibilidad del Sitio; no obstante, no puede garantizar la ausencia de interrupciones, fallos o errores en su funcionamiento.
            </p>
            <p className="mb-3">El Titular queda exonerado de cualquier responsabilidad derivada de:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Errores técnicos:</strong> Interrupciones o fallos del Sitio por causas ajenas a la voluntad del Titular, incluyendo fallos de telecomunicaciones o de software de terceros.</li>
              <li><strong>Virus y código malicioso:</strong> La presencia de virus u otros elementos lesivos en los contenidos.</li>
              <li><strong>Accesos no autorizados:</strong> El acceso no autorizado a los contenidos del Sitio por parte de terceros.</li>
              <li><strong>Información desactualizada:</strong> La falta de exactitud, exhaustividad o actualidad de los contenidos publicados.</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              8. Publicidad y Monetización
            </h2>
            <p className="mb-3">
              El Sitio muestra anuncios publicitarios gestionados a través de <strong>Google AdSense</strong>, servicio ofrecido por Google LLC. Estos anuncios pueden personalizarse en función de los intereses del usuario, para lo cual Google puede hacer uso de cookies y tecnologías similares, conforme a lo detallado en la{' '}
              <Link href="/cookies" className="text-forest-mid underline underline-offset-2">Política de Cookies</Link>.
            </p>
            <p>
              El Titular no tiene control sobre los anuncios concretos mostrados. Asimismo, el Sitio puede contener <strong>enlaces de afiliados</strong> a productos o servicios de terceros, en cuyo caso se informará expresamente de dicho carácter. El Titular puede percibir una comisión si el usuario realiza una compra a través de dichos enlaces, sin coste adicional para el usuario.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              9. Protección de Datos Personales
            </h2>
            <p>
              El tratamiento de los datos personales de los usuarios se realiza de conformidad con el RGPD (UE) 2016/679 y la LOPDGDD 3/2018. Para información completa, el usuario puede consultar la{' '}
              <Link href="/privacidad" className="text-forest-mid underline underline-offset-2">Política de Privacidad</Link>{' '}del Sitio.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-display text-xl font-bold text-forest-dark mb-4 pb-2 border-b border-gray-200">
              10. Jurisdicción y Legislación Aplicable
            </h2>
            <p className="mb-3">
              El presente Aviso Legal se rige íntegramente por la legislación española vigente. Para la resolución de cualesquiera controversias, las partes se someten expresamente a la jurisdicción de los <strong>Juzgados y Tribunales de Valencia (España)</strong>, con renuncia a cualquier otro fuero que pudiera corresponderles.
            </p>
            <p className="mb-3">La normativa española de referencia aplicable incluye, entre otras:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).</li>
              <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).</li>
              <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD).</li>
              <li>Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual.</li>
              <li>Ley 3/1991, de 10 de enero, de Competencia Desleal.</li>
            </ul>
          </div>

          {/* Footer notice */}
          <div className="bg-white border border-cream-sand rounded-2xl p-6 text-center">
            <p className="text-ink-muted text-xs leading-relaxed">
              Para cualquier consulta o comunicación legal, puede contactar con el titular del Sitio en{' '}
              <a href="mailto:dinerojovenblog@gmail.com" className="text-forest-mid font-semibold underline underline-offset-2">
                dinerojovenblog@gmail.com
              </a>
              . El titular se compromete a responder en un plazo máximo de 30 días hábiles.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
