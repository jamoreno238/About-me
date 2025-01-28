import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import perfil from "../img/perfil.png";
import {
  LinkedinFilled,
  PhoneFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";
import gsap from "gsap";

function Inicio() {
  const [content, setContent] = useState<
    "main" | "about" | "projects" | "contact"
  >("main");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  // Referencias para los botones del menú
  const menuButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleButtonClick = (
    section: "main" | "about" | "projects" | "contact"
  ) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setContent(section);
        gsap.to(contentRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  let contentComponent;
  switch (content) {
    case "about":
      contentComponent = <About />;
      break;
    case "projects":
      contentComponent = <Projects />;
      break;
    case "contact":
      contentComponent = <Contact />;
      break;
    default:
      contentComponent = (
        <div className="w-[1000px] min-h-[500px] bg-primary-500 flex relative rounded-lg shadow-md">
          <div className="basis-2/3 bg-gray-800 text-lime-500 flex items-center justify-center p-10 relative rounded-l-lg">
            <div>
              <h1
                ref={titleRef}
                className="text-6xl font-title font-bold text-center"
              >
                Web & Mobile Developer
              </h1>
              <br />
              <p ref={textRef} className="text-lg mt-4 text-center mb-10">
                Software Engineer graduated from the Escuela Superior
                Politécnica del Ejército (ESPE) in Ecuador with experience in
                Full Stack development, focused on creating innovative and
                high-impact technological solutions.
              </p>
              <div
                ref={iconsRef}
                className="flex justify-center items-center gap-3"
              >
                <a
                  href="https://www.linkedin.com/in/josue-moreno-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinFilled className="text-lime-500 text-2xl hover:underline" />
                </a>
                <a
                  href="https://w.app/josuedeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneFilled className="text-lime-500 text-2xl hover:underline" />
                </a>
                <a
                  href="https://www.instagram.com/josue23_08/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramFilled className="text-lime-500 text-2xl hover:underline" />
                </a>
                <a
                  href="https://github.com/jamoreno238"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubFilled className="text-lime-500 text-2xl hover:underline" />
                </a>
              </div>
            </div>
          </div>

          <div className="basis-1/3 bg-gray-900 relative rounded-r-lg">
            <div className="absolute inset-8">
              <img
                ref={imageRef}
                src={perfil}
                alt="perfil"
                className="object-cover w-full h-full rounded-lg p-2"
              />
            </div>

            <div className="absolute top-0 left-10 w-8 h-8 border-l-2 border-t-2 border-lime-500"></div>
            <div className="absolute top-0 right-10 w-8 h-8 border-r-2 border-t-2 border-lime-500"></div>
            <div className="absolute bottom-0 left-10 w-8 h-8 border-l-2 border-b-2 border-lime-500"></div>
            <div className="absolute bottom-0 right-10 w-8 h-8 border-r-2 border-b-2 border-lime-500"></div>
          </div>
        </div>
      );
  }

  useEffect(() => {
    if (content === "main") {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 }
      );
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6 }
      );
      gsap.fromTo(
        iconsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.9 }
      );

      // Animación para el menú
      menuButtonsRef.current.forEach((button, index) => {
        gsap.fromTo(
          button,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 1 + index * 0.2 }
        );
      });
    }
  }, [content]);

  return (
    <div className="bg-black w-full h-screen flex">
      {/* Nav - Lado izquierdo */}
      <div className="bg-gray-800 w-1/5 h-full flex flex-col justify-center space-y-6 px-18">
        <div className="flex items-center group">
          <svg
            className="w-auto h-8 text-lime-500 mr-4 group-hover:text-blue-400"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
              fill="currentColor"
            />
          </svg>
          <button
            ref={(el) => (menuButtonsRef.current[0] = el)}
            className="text-lime-500 text-lg group-hover:text-blue-400"
            onClick={() => handleButtonClick("main")}
          >
            HOME
          </button>
        </div>

        <div className="flex items-center group w-full h-16">
          <svg
            className="w-8 h-8 text-lime-500 group-hover:text-blue-400"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M256,0C114.613,0,0,114.616,0,255.996C0,397.382,114.613,512,256,512c141.386,0,256-114.617,256-256.004 C512,114.616,397.387,0,256,0z M255.996,401.912c-69.247-0.03-118.719-9.438-117.564-18.058 c6.291-47.108,44.279-51.638,68.402-70.94c10.832-8.666,16.097-6.5,16.097-20.945c0-5.053,0-14.446,0-23.111 c-6.503-7.219-8.867-6.317-14.366-34.663c-11.112,0-10.396-14.446-15.638-27.255c-4.09-9.984-0.988-14.294,2.443-16.165 c-1.852-9.87-0.682-43.01,13.532-60.259l-2.242-15.649c0,0,4.47,1.121,15.646-1.122c11.181-2.227,38.004-8.93,53.654,4.477 c37.557,5.522,47.53,36.368,40.204,72.326c3.598,1.727,7.178,5.962,2.901,16.392c-5.238,12.809-4.522,27.255-15.634,27.255 c-5.496,28.346-7.863,27.444-14.366,34.663c0,8.666,0,18.058,0,23.111c0,14.445,5.261,12.279,16.093,20.945 c24.126,19.301,62.111,23.831,68.406,70.94C374.715,392.474,325.246,401.882,255.996,401.912z" />
          </svg>
          <button
            ref={(el) => (menuButtonsRef.current[1] = el)} // Guardar referencia
            className="ml-4 text-lime-500 text-lg group-hover:text-blue-400"
            onClick={() => handleButtonClick("about")}
          >
            ABOUT ME
          </button>
        </div>

        <div className="flex items-center group w-full h-16">
          <svg
            className="w-8 h-8 text-lime-500 group-hover:text-blue-400"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z" />
          </svg>
          <button
            ref={(el) => (menuButtonsRef.current[2] = el)} // Guardar referencia
            className="ml-4 text-lime-500 text-lg group-hover:text-blue-400"
            onClick={() => handleButtonClick("projects")}
          >
            PROJECTS
          </button>
        </div>

        <div className="flex items-center group w-full h-16">
          <svg
            className="w-8 h-8 text-lime-500 group-hover:text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" />
          </svg>
          <button
            ref={(el) => (menuButtonsRef.current[3] = el)} // Guardar referencia
            className="ml-4 text-lime-500 text-lg group-hover:text-blue-400"
            onClick={() => handleButtonClick("contact")}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        {/* Content - Parte central */}
        <div
          ref={contentRef}
          className="flex-1 bg-gray-900 flex items-center justify-center"
        >
          {contentComponent}
        </div>

        {/* Footer - Parte inferior */}
        <div
          id="footer"
          className="bg-gray-800 h-12 flex items-center justify-center"
        >
          <p className="text-white text-sm">© 2025 ABOUT ME</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
