export default function AuthorBox() {
  return (
    <aside
      className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start bg-white border border-cream-sand rounded-2xl p-6 sm:p-8 mt-10"
      aria-label="Sobre el autor"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest-dark to-forest-light flex items-center justify-center text-3xl shrink-0">
        👨‍💼
      </div>
      <div>
        <p className="text-xs font-bold tracking-widest uppercase text-forest-light mb-0.5">
          Equipo editorial
        </p>
        <p className="font-display font-bold text-forest-dark text-lg mb-2">
          Dinero Joven
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Somos un equipo que aprendió finanzas personales desde cero — con sueldos normales,
          sin herencias y cometiendo errores propios. Llevamos años ayudando a jóvenes en España
          y Latinoamérica a tomar el control de su dinero. Todo lo que publicamos está contrastado
          y escrito pensando en ti, no en comisiones.
        </p>
      </div>
    </aside>
  );
}
