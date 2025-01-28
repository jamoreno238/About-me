import React, { useState } from "react";
import {
  LinkedinFilled,
  PhoneFilled,
  InstagramFilled,
  GithubFilled,
  RightSquareFilled,
} from "@ant-design/icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Especifica el tipo de evento aquí
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito!");
    // Reinicia los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 ">
      <div className="w-[1000px] h-auto bg-gray-900 shadow-lg rounded-lg p-10 flex items-center">
        <div className="w-1/3 pr-8 text-lime-500 flex flex-col space-y-6">
          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            <LinkedinFilled className="text-lime-500 text-2xl" />
            <a
              href="https://www.linkedin.com/in/josue-moreno-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:underline"
            >
              josue-moreno-developer
            </a>
          </div>
          <div className="flex items-center gap-3">
            <PhoneFilled className="text-lime-500 text-2xl" />
            <a
              href="https://w.app/josuedeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:underline"
            >
              +593-998060648
            </a>
          </div>
          <div className="flex items-center gap-3">
            <InstagramFilled className="text-lime-500 text-2xl" />
            <a
              href="https://www.instagram.com/josue23_08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:underline"
            >
              josue23_08
            </a>
          </div>
          <div className="flex items-center gap-3">
            <GithubFilled className="text-lime-500 text-2xl" />
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

        <div className="w-2/3">
          <h1 className="text-3xl font-title font-extrabold text-lime-500 text-center mb-4">
            Send me a message!
          </h1>
          <p className="text-lime-500 text-center mb-10 text-lg">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <form
            name="contact"
            // netlify // Agrega esta propiedad sin tipos
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="text-lime-500 block mb-2 text-lg font-montserrat"
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
                  className="w-full bg-gray-800 border-b border-neutral-400 focus:outline-none focus:border-lime-500 py-2 text-lime-500 text-base font-montserrat"
                />
              </div>
              <div>
                <label
                  className="text-lime-500 block mb-2 text-lg font-montserrat"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border-b border-neutral-400 focus:outline-none focus:border-lime-500 py-2 text-lime-500 text-base font-montserrat"
                />
              </div>
            </div>
            <div>
              <label
                className="text-lime-500 block mb-2 text-lg font-montserrat"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-800 border-b border-neutral-400 focus:outline-none focus:border-lime-500 py-2 text-lime-500 text-base font-montserrat resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-transparent border border-lime-500 text-lime-500 py-3 px-8 rounded-md font-semibold text-lg hover:bg-lime-500 hover:text-black flex items-center justify-center gap-2"
              >
                Send <RightSquareFilled className="text-lime-500 text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
