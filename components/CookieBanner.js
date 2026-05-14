import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para que se vea la animación de entrada
    const timer = setTimeout(() => {
      if (!localStorage.getItem('dj_cookies')) setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (value) => {
    localStorage.setItem('dj_cookies', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay oscuro detrás del banner */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />

      {/* Banner centrado tipo modal en móvil, barra grande en desktop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Aviso de cookies"
        className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      >
        <div className="bg-forest-dark border-t-4 border-emerald-400 shadow-2xl px-6 py-8 md:px-12 md:py-10">
          <div className="max-w-site mx-auto">

            {/* Icono y título */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🍪</span>
              <h2 className="font-display text-2xl font-bold text-white">
                Usamos cookies
              </h2>
            </div>

            {/* Texto */}
            <p className="text-white/75 text-base leading-relaxed mb-2 max-w-3xl">
              Utilizamos cookies propias para que la web funcione correctamente y cookies de análisis
              (Google Analytics) para entender cómo se usa el sitio de forma completamente anónima.
              No vendemos tus datos ni los compartimos con terceros.
            </p>
            <p className="text-white/50 text-sm mb-8">
              Puedes aceptar todas las cookies o elegir solo las esenciales. Más información en nuestra{' '}
              <Link href="/cookies" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200">
                Política de Cookies
              </Link>.
            </p>

            {/* Botones grandes */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => dismiss('all')}
                className="flex-1 sm:flex-none bg-emerald-400 hover:bg-emerald-300 text-forest-dark font-bold text-base px-8 py-4 rounded-xl transition-colors cursor-pointer shadow-lg"
              >
                ✓ Aceptar todas las cookies
              </button>
              <button
                onClick={() => dismiss('essential')}
                className="flex-1 sm:flex-none border-2 border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors cursor-pointer"
              >
                Solo esenciales
              </button>
              <Link
                href="/cookies"
                className="flex-1 sm:flex-none text-center text-white/50 hover:text-white/75 font-medium text-sm px-6 py-4 rounded-xl transition-colors no-underline self-center"
              >
                Ver política completa →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </>
  );
}
