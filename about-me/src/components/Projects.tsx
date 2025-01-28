import React, { useState } from "react";
import systemA from "../img/systemA.png";
import inpro360 from "../img/inpro360.png";
import guitar from "../img/guitar.png";
import { GithubFilled, ChromeFilled } from "@ant-design/icons";

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado acepta string o null

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Actualiza el estado con la URL de la imagen seleccionada
  };

  const closeImage = () => {
    setSelectedImage(null); // Restablece el estado a null
  };

  return (
    <div className="relative">
      {/* Modal para mostrar la imagen ampliada */}
      {selectedImage && (
        <button
          className="fixed inset-0 bg-black/500  backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[70%] max-h-[70%] object-contain rounded-lg shadow-lg"
          />
        </button>
      )}

      {/* Contenido principal */}
      <div className="w-[1100px] bg-primary-500 shadow-lg rounded-lg flex gap-6 p-6">
        <div className="flex-1 bg-gray-800 rounded-lg shadow-md">
          <button
            className="w-full focus:outline-none"
            onClick={() => handleImageClick(systemA)}
          >
            <img
              src={systemA}
              alt="systemA"
              className="object-cover w-full rounded-lg p-2 cursor-pointer"
            />
          </button>
          <div className="p-4">
            <h3 className="text-lg font-title text-lime-500 mb-2 font-bold">
              System for Evaluating Significant Works
            </h3>
            <p className="text-sm text-lime-500 mb-4">
              The developed web application aims to optimize the administrative
              management of the Commission of Significant Works, facilitating
              the evaluation of works requested by academic staff. The platform
              allows teachers to register requests online, attach digital
              documents, and monitor the progress of their processes in real
              time.
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <a
              href="https://github.com/jamoreno238/Tesis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500 hover:text-lime-400 text-4xl"
            >
              <GithubFilled />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-lg shadow-md">
          <button
            className="w-full focus:outline-none"
            onClick={() => handleImageClick(guitar)}
          >
            <img
              src={guitar}
              alt="guitar"
              className="object-cover w-full rounded-lg p-2 cursor-pointer"
            />
          </button>
          <div className="p-4">
            <h3 className="text-lg font-title text-lime-500 mb-2 font-bold">
              Guitar
            </h3>
            <p className="text-sm text-lime-500 mb-4">
              Guitar is an e-commerce project simulating an online guitar store.
              Users can browse a catalog of guitars and add their favorites to a
              shopping cart. The platform allows users to easily adjust
              quantities and remove items from the cart.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/jamoreno238/Guitar-TS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500 hover:text-lime-400 text-4xl"
            >
              <GithubFilled />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-lg shadow-md">
          <button
            className="w-full focus:outline-none"
            onClick={() => handleImageClick(inpro360)}
          >
            <img
              src={inpro360}
              alt="inpro360"
              className="object-cover w-full rounded-lg p-2 cursor-pointer"
            />
          </button>
          <div className="p-4">
            <h3 className="text-lg font-title text-lime-500 mb-2 font-bold">
              Inpro360
            </h3>
            <p className="text-sm text-lime-500 mb-4">
              Inpro360 is a real estate platform that simplifies property
              management. Administrators can easily add, edit, and delete
              properties, while users can browse a wide catalog of properties
              and access detailed information for each one.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.inpro360.com/catalogoView"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500 hover:text-lime-400 text-4xl"
            >
              <ChromeFilled />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
