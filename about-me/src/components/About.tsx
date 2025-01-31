import { saveAs } from "file-saver";

function About() {
  // Función descargar pdf
  const downloadCVSpanish = () => {
    const url = "/assets/Josue Moreno CV.pdf"; 
    saveAs(url, "Josue Moreno CV.pdf");
  };

  const downloadCVEnglish = () => {
    const url = "/assets/Josue Moreno CV - English.pdf"; 
    saveAs(url, "Josue Moreno CV - English.pdf");
  };

  return (
    <div className="mt-20 mb-10 md:mb-0 lg:mb-0 md:mt-0 lg:mt-0 w-full max-w-[1000px] bg-primary-500 flex flex-col md:flex-row relative rounded-lg shadow-md">
      <div className="basis-2/3 bg-gray-800 flex items-center justify-center p-5 relative rounded-l-lg">
        <div className="text-justify">
          <p className="text-lg mt-4 mb-4 text-lime-500">
            Hello. I am Josué Moreno (🇪🇨), a Software Engineer graduated from
            the Universidad de las Fuerzas Armadas (ESPE). I am 24 years old.
          </p>
          <p className="text-lg mt-4 mb-4 text-lime-500">
            Spanish: <span className="text-lime-700">Native language</span>
          </p>
          <p className="text-lg mt-4 mb-4 text-lime-500">
            English: <span className="text-lime-700">Intermediate</span>
          </p>
          <p className="text-xl font-title font-bold mb-4 text-lime-500">
            Work Experience:
          </p>
          <div className="text-lg mb-4 text-lime-700">
            <p className="text-lime-500">
              TICKETSTAR365 - Quito, Ecuador (May 2023 - July 2023)
            </p>
            <p className="text-lime-500">Software Developer</p>
            <p className="text-lime-700">
              Development and maintenance of a web platform for event management
              and ticket sales, using technologies such as HTML, CSS, Bootstrap,
              PHP, and JavaScript.
            </p>
          </div>
          <div className="text-lg mb-4">
            <p className="text-lime-500">
              FAME S.A. – Sangolquí, Ecuador (October 2022 - December 2022)
            </p>
            <p className="text-lime-500">Software Developer (Internship)</p>
            <p className="text-lime-700">
              Led the development of a footwear management application in
              Android Studio, automating manual processes with Java. Implemented
              Firebase Realtime Database for real-time data management and
              enhanced user security by integrating Firebase authentication.
            </p>
          </div>
        </div>
      </div>

      <div className="basis-1/3 mt-8 md:mt-0 lg:mt-0 bg-gray-900 relative rounded-r-lg flex flex-col items-center justify-center">
        <div className="absolute top-0 left-10 w-8 h-8 border-l-2 border-t-2 border-lime-500"></div>
        <div className="absolute top-0 right-10 w-8 h-8 border-r-2 border-t-2 border-lime-500"></div>
        <div className="absolute bottom-0 left-10 w-8 h-8 border-l-2 border-b-2 border-lime-500"></div>
        <div className="absolute bottom-0 right-10 w-8 h-8 border-r-2 border-b-2 border-lime-500"></div>

        <div className="flex flex-col space-y-4 ">
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
