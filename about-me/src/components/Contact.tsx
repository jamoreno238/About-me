import { useState, useRef, useEffect } from "react";
import {
  LinkedinFilled,
  PhoneFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const btn = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailjs.init("HIJ9Nag2a_swtfp7U");
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (btn.current) {
      btn.current.value = "Sending...";
    }

    const serviceID = "service_io3ntja";
    const templateID = "template_nv5kibs";

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current).then(
        () => {
          if (btn.current) {
            btn.current.value = "Send Email";
          }
          alert("Message sent successfully!.");
        },
        (err) => {
          if (btn.current) {
            btn.current.value = "Error Send Email";
          }
          alert(JSON.stringify(err));
        }
      );
    }
  };

  return (
    <div className="mt-20 mb-10 md:mb-0 lg:mb-0 md:mt-0 lg:mt-0 w-full max-w-[1000px] bg-primary-500 flex flex-col-reverse lg:flex-row relative rounded-lg shadow-md">
      <div className="w-full h-auto bg-gray-900 shadow-lg rounded-lg flex flex-col lg:flex-row items-center ">
        {/* Formulario */}
        <div className="w-full p-5">
          <p className="text-3xl md:text-6xl lg:text-3xl font-title font-extrabold text-lime-500 text-center mb-4">
            Send me a message!
          </p>
          <p className="text-lime-500 text-center mb-10 text-lg md:text-2xl lg:text-lg">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <form
            className="space-y-8"
            id="form"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="text-lime-500 block mb-2 text-lg md:text-2xl lg:text-lg font-montserrat"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900 border-b border-neutral-400 text-lg md:text-2xl lg:text-lg focus:outline-none focus:border-lime-500 focus:bg-gray-900 focus:text-lime-500 py-2 text-lime-500 font-montserrat"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label
                  className="text-lime-500 block mb-2 text-lg md:text-2xl lg:text-lg font-montserrat"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-900 border-b border-neutral-400 text-lg md:text-2xl lg:text-lg focus:outline-none focus:border-lime-500 focus:bg-gray-900 focus:text-lime-500 py-2 text-lime-500 font-montserrat resize-none"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="text-lime-500 block mb-2 text-lg md:text-2xl lg:text-lg font-montserrat"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello! Write to me whatever you want to tell me!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-900 border-b border-neutral-400 text-lg md:text-2xl lg:text-lg focus:outline-none focus:border-lime-500 focus:bg-gray-900 focus:text-lime-500 py-2 text-lime-500 font-montserrat resize-none"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <input
                type="submit"
                id="button"
                ref={btn}
                className="bg-transparent border border-lime-500 text-lime-500 py-3 px-8 rounded-md font-semibold text-lg md:text-2xl lg:text-lg hover:bg-lime-500 hover:text-black flex items-center justify-center gap-2"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="w-full p-2 m-auto lg:w-1/3 mt-10 md:mt-0 lg:p-2 items-center lg:h-full lg:justify-cente lg:items-center ">
          {/* Contenedor de redes sociales (solo móvil y tablet) */}
          <div className="lg:hidden w-full ">
            <div className="flex items-center gap-3 mb-4 text-lime-500 justify-center md:text-2xl">
              <LinkedinFilled className="text-3xl md:text-4xl" />
              <a
                href="https://www.linkedin.com/in/josue-moreno-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-medium hover:underline"
              >
                josue-moreno-developer
              </a>
            </div>

            <div className="flex items-center gap-3 mb-4 text-lime-500 justify-center md:text-2xl">
              <PhoneFilled className="text-3xl md:text-4xl" />
              <a
                href="https://wa.link/gmrsd3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-medium hover:underline"
              >
                +593-998060648
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <div className="flex items-center gap-2 text-lime-500 md:text-2xl">
                <InstagramFilled className="text-3xl md:text-4xl" />
                <a
                  href="https://www.instagram.com/josue23_08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-medium hover:underline text-center"
                >
                  josue23_08
                </a>
              </div>
              <div className="flex items-center gap-2 text-lime-500 md:text-2xl">
                <GithubFilled className="text-3xl md:text-4xl" />
                <a
                  href="https://github.com/jamoreno238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-medium hover:underline text-center"
                >
                  jamoreno238
                </a>
              </div>
            </div>
          </div>

          {/* Vista de escritorio */}
          <div className="hidden w-full lg:flex lg:flex-col gap-4 lg:h-full lg:justify-center ">
            <div className="flex items-center gap-3 text-lime-500">
              <LinkedinFilled className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/josue-moreno-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium hover:underline"
              >
                josue-moreno-developer
              </a>
            </div>
            <div className="flex items-center gap-3 text-lime-500">
              <PhoneFilled className="text-2xl" />
              <a
                href="https://wa.link/gmrsd3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium hover:underline"
              >
                +593-998060648
              </a>
            </div>
            <div className="flex items-center gap-3 text-lime-500">
              <InstagramFilled className="text-2xl" />
              <a
                href="https://www.instagram.com/josue23_08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium hover:underline"
              >
                josue23_08
              </a>
            </div>
            <div className="flex items-center gap-3 text-lime-500">
              <GithubFilled className="text-2xl" />
              <a
                href="https://github.com/jamoreno238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium hover:underline"
              >
                jamoreno238
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
