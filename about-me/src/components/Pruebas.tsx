import { useState } from "react";
import { X, Menu } from "lucide-react";

function Pruebas() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="principal"
      className="flex h-screen w-screen overflow-hidden bg-amber-400"
    >
   {/* Botón menú hamburguesa para móvil */}
   <button
        className="absolute top-4 left-4 text-white md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Nav - Lado izquierdo */}
      <div
        className={`fixed h-screen w-3/5 md:w-1/4 lg:w-1/5 bg-gray-800 flex flex-col items-center justify-center space-y-6 px-6 transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        {/* Contenido del menú */}
      </div>

      {/* Contenedor principal */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          id="home"
          className="w-full max-w-[1000px] bg-primary-500 flex flex-col md:flex-row relative rounded-lg shadow-md"
        >
          <div className="w-full md:basis-1/3 bg-gray-800 text-lime-500 flex-grow flex items-center justify-center p-10 relative rounded-l-lg">
            <div>
              <h1 className="text-6xl font-title font-bold text-center">
                Web & Mobile Developer
              </h1>
              <br />
              <p className="text-lg mt-4 text-center mb-10">
                Software Engineer graduated from the Escuela Superior Politécnica
                del Ejército (ESPE) in Ecuador with experience in Full Stack
                development, focused on creating innovative and high-impact
                technological solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pruebas;