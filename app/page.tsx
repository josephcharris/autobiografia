export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">

      <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wider text-sky-400 uppercase">
            Autobiografía
          </span>
          <nav className="flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#quien-soy" className="hover:text-sky-400 transition-colors">
              Quién soy
            </a>
            <a href="#mi-historia" className="hover:text-sky-400 transition-colors">
              Mi historia
            </a>
            <a href="#mi-formacion" className="hover:text-sky-400 transition-colors">
              Mi formación
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-24">

        <section id="quien-soy" className="scroll-mt-28 bg-slate-900/60 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl">
          <div className="space-y-4 text-center md:text-left">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 mb-2">
                Presentación Personal
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                JOSEPH CHARRIS SILVERA
              </h1>
              <p className="text-slate-400 text-sm font-medium mt-1">
                Lugar de nacimiento: <span className="text-slate-200">Palmar de Varela, Colombia</span>
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              ¡Hola! Bienvenidos a mi autobiografía. Soy Joseph Charris Silvera, un joven apasionado por la tecnología, además de los videojuegos y el desarrollo personal. Me considero una persona curiosa, persistente y en constante aprendizaje. Disfruto mucho aprender cosas nuevas y aplicarlas en mi vida diaria. Además, me gusta compartir momentos valiosos con quienes me rodean y crear vínculos significativos.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                Curioso
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                Persistente
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                En constante aprendizaje
              </span>
            </div>
          </div>
        </section>

        <section id="mi-historia" className="scroll-mt-28 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mi Historia</h2>
            <p className="text-slate-400 text-sm mt-1">
              Un recorrido por los momentos y vivencias que han moldeado mi camino.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-10">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-slate-950" />
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Etapa Inicial
                </span>
                <h3 className="text-xl font-semibold text-white">Infancia</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Crecí en un entorno familiar amoroso y de apoyo, donde siempre primó el respeto, la honestidad y el esfuerzo propio. Mi familia ha sido mi mayor inspiración y mi motor para seguir adelante.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Valores y Apoyo
                </span>
                <h3 className="text-xl font-semibold text-white">Familia</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mi familia ha sido el pilar fundamental de mi vida. De ellos aprendí el valor de la honestidad, el trabajo duro y el respeto hacia los demás. Su apoyo incondicional me dio la confianza para perseguir mis metas.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-950" />
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Hitos de Vida
                </span>
                <h3 className="text-xl font-semibold text-white">Momentos Importantes</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A lo largo de los años he vivido experiencias transformadoras: desde tomar decisiones importantes sobre mi futuro profesional hasta superar desafíos personales que reforzaron mi resiliencia y carácter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mi-formacion" className="scroll-mt-28 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mi Formación</h2>
            <p className="text-slate-400 text-sm mt-1">
              Educación, capacitaciones y las lecciones más valiosas que he adquirido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Estudios</h3>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm leading-relaxed">
                  <li>Bachiller en Explotación Agropecuaria</li>
                  <li>Estudiante de Ingeniería de Sistemas</li>
                </ul>
              </div>
              <span className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-800/80">
                Educación Formal
              </span>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cursos</h3>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm leading-relaxed">
                  <li>Coursera</li>
                  <li>Código abierto</li>
                  <li>SENA</li>
                </ul>
              </div>
              <span className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-800/80">
                Capacitación Continua
              </span>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Aprendizajes Clave</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Habilidades blandas, resolución de problemas y la capacidad de adaptarme activamente ante cualquier entorno.
                </p>
              </div>
              <span className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-800/80">
                Crecimiento Personal
              </span>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>© cuc-joseph</p>
      </footer>
    </div>
  );
}




