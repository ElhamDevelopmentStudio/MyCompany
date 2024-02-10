import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '@fontsource/plus-jakarta-sans';
import TranslucentNavbar from './Navbar';
import "./style.css";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5 },
  },
};

const HomeHero = () => {
  const imageUrl = "/image11.jpg";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromLeft}
    >
      <div
        className="font-plus-jakarta-sans text-white min-h-screen flex flex-col justify-between relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <TranslucentNavbar />
        <div className="flex flex-col items-center justify-center flex-grow px-4 sm:px-8 md:px-20 lg:px-40">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight gradient-text hero-text-gradient">
              Empowering Your Digital Presence
            </h1>
            <p className="mt-6 mb-8 text-lg sm:text-sm md:text-base lg:text-lg leading-snug">
              Bridging the Gap Between Vision and Reality with Cutting-Edge Web
              Solutions
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Example button with gradient shadow */}
              <motion.button
                className="bg-purple-800 text-white px-6 py-2 rounded shadow-lg transition duration-300 ease-in-out hover:bg-purple-700"
                variants={buttonVariants}
                style={{
                  animation: "moveShadow 3s infinite linear",
                }}
              >
                Discover Our Services
              </motion.button>
              <motion.button
                className="gradient-button border border-white px-6 py-2 rounded"
                variants={buttonVariants}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social Icons - Vertically arranged, centered to the left */}
        <div className="flex sm:hidden justify-center bottom-0 left-0 right-0 mx-auto pb-4 absolute space-x-2">
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
        </div>
        <div className="hidden sm:flex sm:flex-col sm:absolute sm:left-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 space-y-2">
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          />
        </div>
      </div>
    </motion.div>
  );
};

const WelcomeSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromLeft}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-16 bg-black min-h-screen text-white">
        <div className="relative mb-8 lg:mb-0 lg:mr-12">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-white">
            <img
              src="/image2.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Adjusting the position and size of the decorative circle for responsiveness */}
          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-yellow-500 rounded-full absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%]" />
        </div>

        <div className="flex flex-col max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Nucleus Web Studio
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl mb-8">
            where innovation meets excellence in web development.
          </p>
          <p className="text-sm sm:text-md md:text-lg mb-6">
            As the CEO and lead developer, I bring extensive experience...
          </p>
          {/* Button styling adjusted for a more cohesive look with the rest of the site's aesthetic */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-shadow-button"
          >
            Discover More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInFromLeft}
    >
      <div className="min-h-screen flex flex-col">
        <HomeHero />
        <WelcomeSection />
      </div>
    </motion.div>
  );
};

export default HomePage;
