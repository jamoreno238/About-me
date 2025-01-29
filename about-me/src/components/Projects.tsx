import { useState, useEffect, useRef } from "react";
import systemA from "../img/systemA.png";
import inpro360 from "../img/inpro360.png";
import guitar from "../img/guitar.png";
import { GithubFilled, ChromeFilled } from "@ant-design/icons";
import { gsap } from "gsap";

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power1.out",
        }
      );
    }
  }, []);

  return (
    <div className="relative">
      {selectedImage && (
        <button
          className="fixed inset-0 bg-black/500 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[70%] max-h-[70%] object-contain rounded-lg shadow-lg"
          />
        </button>
      )}

      <div
        ref={cardsRef}
        className="w-full mt-10 bg-primary-500 shadow-lg rounded-lg flex flex-wrap gap-6 p-6 justify-center"
      >
        {/* Card 1 */}
        <div className="flex-grow basis-full sm:basis-[48%] lg:basis-[30%] bg-gray-800 rounded-lg shadow-md">
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

        {/* Card 2 */}
        <div className="flex-grow basis-full sm:basis-[48%] lg:basis-[30%] bg-gray-800 rounded-lg shadow-md">
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
              className="text-lime-500 hover:text-lime-400 text-4xl mb-4"
            >
              <GithubFilled />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-grow basis-full sm:basis-[48%] lg:basis-[30%] bg-gray-800 rounded-lg shadow-md">
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
              className="text-lime-500 hover:text-lime-400 text-4xl mb-4"
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
