import React, { useState, useEffect } from "react";
import homepage from "./assets/homepage.png";
import services from "./assets/services.png";
import products from "./assets/products.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl: homepage,
      caption: "Homepage",
    },
    {
      id: 2,
      imageUrl: services,
      caption: "Services",
    },
    {
      id: 3,
      imageUrl: products,
      caption: "Crystal store ",
    },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full p-4 border rounded-lg shadow-lg xl:mb-32 lg:mb-32 xs:mt-10 sm:mt-10 md:mt-10">
        <div className="relative">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l"
            onClick={prevSlide}>
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r"
            onClick={nextSlide}>
            &#10095;
          </button>
          <div className="flex justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  index === currentIndex ? "block" : "hidden"
                } mx-auto max-w-[38rem] `}>
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  className="rounded-lg"
                />
                <p className="text-center mt-2 text-gray-700">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-48 text-center">
        <p>
          I am combining my passion for coding and my tarot reading skills to
          create a website offering spiritual services to people. It's still
          under development. The tech stack I'm using includes React, Supabase,
          Tailwind CSS, and Magic Link. It will also feature an e-store to sell
          crystals and other products. You can check out the progress so far{" "}
          <a
            href="https://crystalvisionsbykali.vercel.app/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Projects;
