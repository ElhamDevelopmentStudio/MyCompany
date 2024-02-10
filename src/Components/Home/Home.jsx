import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./HeroSection.css"; // Assuming you have additional styles defined in this CSS file

const DynamicText = ({ text, style }) => {
  const props = useSpring({
    ...style,
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    config: { duration: 1000 },
  });
  return <animated.div style={props}>{text}</animated.div>;
};

const GradientButton = ({ buttonText }) => {
  return (
    <button
      className="relative inline-block px-8 py-3 overflow-hidden text-lg font-medium text-white transition duration-300 transform rounded-xl group focus:outline-none focus:ring"
      style={{ background: "linear-gradient(90deg, #0065ff, #6942ef)" }}
    >
      <span className="absolute inset-0 w-full h-full mt-2 ml-2 transition-transform transform bg-gray-900 rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:bg-opacity-0"></span>
      <span className="relative text-white">
        <DynamicText
          text={buttonText}
          style={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        />
      </span>
    </button>
  );
};

const Overview = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-24">
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Overview
              </div>
              <p className="mt-2 text-white">
                Welcome to [Your Company Name], where innovation meets
                excellence in web development...
              </p>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  // Navigation bar with links
  return (
    <nav className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">[Your Company Logo]</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            Portfolio
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            Contact Us
          </a>
        </nav>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [buttonText, setButtonText] = useState("Get Started");

  useEffect(() => {
    // Change button text or perform other actions on mount or based on specific conditions
    setButtonText("Discover Our Services");
  }, []);

  return (
    <section className="flex items-center justify-center w-full min-h-screen px-8 text-center text-white bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          <DynamicText
            text="Empowering Your Digital Presence"
            style={{ opacity: 1 }}
          />
        </h1>
        <p className="mt-6 mb-8 text-lg md:text-xl lg:text-2xl">
          <DynamicText
            text="Bridging the Gap Between Vision and Reality with Cutting-Edge Web Solutions"
            style={{ opacity: 1 }}
          />
        </p>
        <GradientButton buttonText={buttonText} />
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Overview />
      {/* You can add a footer here */}
    </div>
  );
};

export default LandingPage;
