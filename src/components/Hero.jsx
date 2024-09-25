import React, { useState, useEffect } from "react";
import heroImage from "../assets/header.png";

function Hero() {
  const [text] = useState("Transform Your Career with Data Mastery !!!");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === text.length) {
          return 0; // Reset index jika sudah mencapai akhir teks
        } else {
          return prevIndex + 1;
        }
      });
    }, 250); // Sesuaikan kecepatan mengetik

    return () => clearInterval(intervalId);
  }, [text]);

  const currentText = text.substring(0, index);
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-16 lg:px-32 pt-48"
    >
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
          {currentText}
        </h1>
        <p className="text-gray-700 mt-4">
          Join our immersive bootcamp designed for aspiring Data Analytics, Data
          Science, and Data Engineering experts. Gain the skills to thrive in
          today's data-driven world.
        </p>

        {/* Call to Action Button */}
        <a
          href="#contact"
          className="bg-green-500 text-white font-semibold py-3 px-6 mt-6 inline-block rounded-full hover:bg-green-600 transition duration-300"
        >
          Join to Become a Data Expert!
        </a>

        {/* Guarantee Icons */}
        <div className="mt-6 space-y-2">
          <p className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✔️</span> Money back guarantee
          </p>
          <p className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✔️</span> Scalable data tools
          </p>
          <p className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✔️</span> Access to
            members-only community
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Data Expert Toolkit"
          className="w-full max-w-md mx-auto animate-jump"
        />
      </div>
    </section>
  );
}

export default Hero;
