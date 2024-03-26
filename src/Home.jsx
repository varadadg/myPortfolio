import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import myImage from "./assets/Varada.jpg"; // Import the image

const Home = () => {
  const animationStyleFromLeft = {
    position: "relative",
    animationName: "fromLeft",
    animationDuration: "4s",
  };

  const animationStyleFromRight = {
    position: "relative",
    animationName: "fromRight",
    animationDuration: "4s",
  };

  const keyframes = `
    @keyframes fromLeft {
      100%   { left: 0px; }
      0% { left: calc(100% - 500px); } /* Adjust the width of the text container */
    }

    @keyframes fromRight {
      100%   { right: 0px; }
      0% { right: calc(100% - 500px); } /* Adjust the width of the text container */
    }
  `;

  return (
    <div className="flex justify-center w-full">
      <style>{keyframes}</style>
      <div className="xs:grid  grid-cols-1 gap-2 sm:grid grid-cols-1 gap-2  justify-center md:grid grid-cols-1 gap-2  justify-center   lg:flex ">
        <div className="xs:w-64 xs:h-64 xs:mt-8  xs:place-self-center sm:w-72 sm:h-72 flex items-center justify-center">
          <p
            className="text-center text-black lg:text-xl "
            style={animationStyleFromLeft}>
            I am a web developer living in Karnataka, India. I enjoy building
            everything from scratch using React. With every line of code, I
            strive to make the web aesthetically pleasing. Have a look at my
            work{" "}
            <Link to="/projects" className="text-blue-500 hover:underline">
              here!
            </Link>
          </p>
        </div>

        <div className="lg:w-96 2xl:mt-[25rem] xl:mt-[25rem]  lg:mt-[32rem] md:mt-6 xs:w-96 xs:h-64 xs:-mt-[1.9rem] bg-contain bg-center xs:place-self-center sm:w-72 sm:h-72  overflow-hidden">
          <img
            src={myImage}
            alt="Your image description"
            className="w-full h-full object-cover"
          />
          <a
            href="https://www.instagram.com/elixirofthoughts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-blue-500 hover:underline"
            style={{ ...animationStyleFromLeft, fontSize: "1.25rem" }}>
            Visit my Instagram
          </a>
        </div>

        <div className="xs:w-64 xs:h-64 xs:mt-8 xs:place-self-center sm:w-72 sm:h-72 md:mt-32 lg:text-xl ">
          <p className="text-center text-black" style={animationStyleFromRight}>
            I write poetry centered on mental health and provide spiritual
            counsel to individuals navigating life's challenges through tarot
            cards. Our Instagram community boasts a following of 40k. Feel free
            to explore!
            <a
              href="https://www.instagram.com/elixirofthoughts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;