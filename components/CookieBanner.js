import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('dj_cookies');
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage no disponible (SSR o modo privado restrictivo)
    }
  }, []);

  const accept = (value) => {
    try { localStorage.setItem('dj_cookies', value); } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Sin overlay: el banner flota en la parte inferior sin bloquear el contenido */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Aviso de cookies"
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{ animation: 'djSlideUp 0.45s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <div className="bg-forest-dark border-t-4 border-emerald-400 shadow-2xl">
          <div className="max-w-site mx-auto px-5 py-5 md:py-6">

            <div className="flex flex-col md:flex-row md:items-center gap-4">

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl" aria-hidden="true">🍪</span>
                  <h2 className="font-display text-base font-bold text-white leading-tight">
                    Usamos cookies
                  </h2>
                </div>
                <p className="text-white/65 text-xs leading-relaxed">
                  Utilizamos cookies esenciales, de análisis (Google Analytics) y publicitarias (Google AdSense).
                  Consulta nuestra{' '}
                  <Link href="/cookies" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200 transition-colors">
                    Política de Cookies
                  </Link>{' '}y{' '}
                  <Link href="/privacidad" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200 transition-colors">
                    Privacidad
                  </Link>.
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={() => accept('all')}
                  className="bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-forest-dark font-bold text-sm px-6 py-2.5 rounded-lg transition-colors shadow cursor-pointer whitespace-nowrap"
                >
                  ✓ Aceptar todas
                </button>
                <button
                  onClick={() => accept('essential')}
                  className="border border-white/30 hover:border-white/60 text-white/75 hover:text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Solo esenciales
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes djSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}
