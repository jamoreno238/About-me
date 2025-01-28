import { Button } from "antd";
import React from "react";
import { saveAs } from "file-saver";

function About() {
  // Función para manejar la descarga del CV en español
  const downloadCVSpanish = () => {
    const url = "/assets/CV.pdf"; // Ruta corregida al archivo PDF
    saveAs(url, "CV Josue Moreno.pdf");
  };

  const downloadCVEnglish = () => {
    const url = "/assets/CV.pdf"; // Ruta corregida al archivo PDF
    saveAs(url, "CV Josue Moreno English.pdf");
  };

  return (
    <div className="w-[1000px] min-h-[500px] bg-primary-500 flex relative rounded-lg shadow-md">
      <div className="basis-2/3 bg-gray-800 flex items-center justify-center p-5 relative rounded-l-lg">
        <div className="text-justify">
          <p className="text-lg mt-4 mb-4 text-lime-500">
            Hola. Soy Josué Moreno (🇪🇨), Ingeniero de Software graduado de la
            Universidad de las Fuerzas Armadas ESPE. Tengo 24 años de edad.
          </p>
          <p className="text-lg mt-4 mb-4 text-lime-500">
            Español: <span className="text-lime-700">Idioma nativo</span>
          </p>
          <p className="text-lg mt-4 mb-4 text-lime-500">
            Inglés: <span className="text-lime-700">Intermedio</span>
          </p>
          <p className="text-xl font-title font-bold mb-4 text-lime-500">
            Experiencia laboral:
          </p>
          <div className="text-lg mb-4 text-lime-700">
            <p className="text-lime-500">
              TICKETSTAR365 - Quito, Ecuador (mayo 2023 - julio 2023)
            </p>
            <p className="text-lime-500">Desarrollador de Software</p>
            <p className="text-lime-700">
              Desarrollo y mantenimiento de una plataforma web para gestión de
              eventos y venta de tickets, utilizando tecnologías como HTML, CSS,
              Bootstrap, PHP y JavaScript.
            </p>
          </div>
          <div className="text-lg mb-4">
            <p className="text-lime-500">
              FAME S.A. – Sangolquí, Ecuador (octubre 2022 - diciembre 2022)
            </p>
            <p className="text-lime-500">
              Desarrollador de Software (Pasantía)
            </p>
            <p className="text-lime-700">
              Liderazgo en el desarrollo de una aplicación de gestión de calzado
              en Android Studio, automatizando procesos manuales con Java.
              Implementación de Firebase Realtime Database para gestión de datos
              en tiempo real y refuerzo de la seguridad de los usuarios mediante
              la integración de la autenticación de Firebase.
            </p>
          </div>
        </div>
      </div>

      <div className="basis-1/3 bg-gray-900 relative rounded-r-lg flex flex-col items-center justify-center">
        <div className="absolute top-0 left-10 w-8 h-8 border-l-2 border-t-2 border-lime-500"></div>
        <div className="absolute top-0 right-10 w-8 h-8 border-r-2 border-t-2 border-lime-500"></div>
        <div className="absolute bottom-0 left-10 w-8 h-8 border-l-2 border-b-2 border-lime-500"></div>
        <div className="absolute bottom-0 right-10 w-8 h-8 border-r-2 border-b-2 border-lime-500"></div>

        <div className="flex flex-col space-y-4 mt-8">
          <button
            className="ml-4 text-white bg-lime-700 w-32 h-auto p-2 text-lg rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-lime-900 hover:scale-105"
            onClick={downloadCVSpanish}
          >
            CV Español
          </button>

          <button
            className="ml-4 text-white bg-lime-700 w-32 h-auto p-2 text-lg rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-lime-900 hover:scale-105"
            onClick={downloadCVEnglish}
          >
            CV English
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
