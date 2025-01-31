import { useState, useEffect, useRef } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import perfil from "../img/perfil.png";
import {
  LinkedinFilled,
  PhoneFilled,
  InstagramFilled,
  GithubFilled,
  FolderOpenFilled,
  HomeFilled,
  EyeFilled,
} from "@ant-design/icons";
import gsap from "gsap";
import { X, Menu } from "lucide-react";

function Home() {
  const [content, setContent] = useState<
    "main" | "about" | "projects" | "contact"
  >("main");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonsRef = useRef<(HTMLSpanElement | HTMLButtonElement)[]>([]);
  const menuButtonsRef2 = useRef<
    (HTMLSpanElement | HTMLButtonElement | null)[]
  >([]);

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
        <div
          id="home"
          className="mt-20 mb-10 md:mb-0 lg:mb-0 md:mt-0 lg:mt-0 w-full max-w-[1000px] bg-primary-500 flex flex-col md:flex-row relative rounded-lg shadow-md "
        >
          <div className="w-full md:basis-1/3 bg-gray-800 text-lime-500 flex-grow flex items-center justify-center p-6 md:p-10 relative rounded-l-lg">
            <div>
              <h1
                ref={titleRef}
                className="text-6xl font-title font-bold text-center"
              >
                Web & Mobile Developer
              </h1>
              <br />
              <p ref={textRef} className="text-lg mt-4 text-center mb-10">
                Software Engineer graduated from the Universidad de las Fuerzas
                Armadas (ESPE) in Ecuador with experience in Full Stack
                development, focused on creating innovative and high-impact
                technological solutions.
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

          <div className="w-full md:basis-1/3 flex-grow bg-black relative flex items-center justify-center">
            <img
              ref={imageRef}
              src={perfil}
              alt="perfil"
              className="object-cover w-full h-full rounded-lg p-10"
            />

            {/* Bordes */}
            <div className="absolute top-0 left-10 w-8 h-8 border-l-2 border-t-2 border-lime-500 pointer-events-none"></div>
            <div className="absolute top-0 right-10 w-8 h-8 border-r-2 border-t-2 border-lime-500 pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-8 h-8 border-l-2 border-b-2 border-lime-500 pointer-events-none"></div>
            <div className="absolute bottom-0 right-10 w-8 h-8 border-r-2 border-b-2 border-lime-500 pointer-events-none"></div>
          </div>
        </div>
      );
  }

  // Animaciones GSAP

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

      menuButtonsRef.current.forEach((button, index) => {
        gsap.fromTo(
          button,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 1 + index * 0.2 }
        );
      });

      menuButtonsRef2.current.forEach((button, index) => {
        gsap.fromTo(
          button,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 1 + index * 0.2 }
        );
      });
    }
  }, [content]);

  return (
    <div
      id="principal"
      className="flex min-h-screen w-screen overflow-auto bg-gray-900"
    >
      {/* Botón menú hamburguesa para móvil */}
      <button
        className="absolute top-4 left-4 text-white  lg:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      {/* Nav - Lado izquierdo */}
      <div
        className={`fixed h-screen w-3/5 md:w-1/4 lg:w-1/5 bg-gray-800 flex flex-col  justify-center space-y-6 px-6 transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        <div className="flex flex-col space-y-8 ml-4">
          <div className="flex group">
            <HomeFilled
              ref={(el) => (menuButtonsRef.current[0] = el!)}
              className="!text-lime-500 text-4xl group-hover:text-white"
            />
            <button
              ref={(el) => (menuButtonsRef.current[1] = el!)}
              className="ml-4 text-lime-500 text-lg group-hover:text-white"
              onClick={() => {
                handleButtonClick("main");
                setMenuOpen(false);
              }}
            >
              HOME
            </button>
          </div>

          <div className="flex  group">
            <EyeFilled
              ref={(el) => (menuButtonsRef.current[2] = el!)}
              className="!text-lime-500 text-4xl group-hover:text-white"
            />
            <button
              ref={(el) => (menuButtonsRef2.current[3] = el)}
              className="ml-4 text-lime-500 text-lg group-hover:text-white"
              onClick={() => {
                handleButtonClick("about");
                setMenuOpen(false);
              }}
            >
              ABOUT ME
            </button>
          </div>

          <div className="flex  group">
            <FolderOpenFilled
              ref={(el) => (menuButtonsRef.current[4] = el!)}
              className="!text-lime-500 text-4xl group-hover:text-white"
            />
            <button
              ref={(el) => (menuButtonsRef2.current[5] = el)}
              className="ml-4 text-lime-500 text-lg group-hover:text-white"
              onClick={() => {
                handleButtonClick("projects");
                setMenuOpen(false);
              }}
            >
              PROJECTS
            </button>
          </div>

          <div className="flex  group">
            <PhoneFilled
              ref={(el) => (menuButtonsRef.current[6] = el!)}
              className="!text-lime-500 text-4xl group-hover:text-white"
            />
            <button
              ref={(el) => (menuButtonsRef2.current[7] = el)}
              className="ml-4 text-lime-500 text-lg group-hover:text-white"
              onClick={() => {
                handleButtonClick("contact");
                setMenuOpen(false);
              }}
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>

      {/* Content - Parte central */}
      <div
        ref={contentRef}
        id="content"
        className="flex-1 flex items-center justify-center "
      >
        {contentComponent}
      </div>
    </div>
  );
}

export default Home;
