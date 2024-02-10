import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "@fontsource/plus-jakarta-sans";
import TranslucentNavbar from "./Navbar";
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
            icon={faXTwitter}
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
            icon={faXTwitter}
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
            Where innovation meets excellence in web development.
          </p>
          <p className="text-sm sm:text-md md:text-lg mb-6">
            What sets us apart is not just our technical expertise but our
            commitment to clear, direct communication and a collaborative
            approach. You're not just hiring a web development firm; you're
            partnering with a team that sees your success as our own. From
            conception to deployment, we ensure every project is managed with
            the utmost precision, leveraging GitHub, Vercel, and a suite of
            professional tools to guarantee timely delivery and impeccable
            quality.
          </p>

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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white font-bold text-lg mb-4">About Us</h5>
            <p className="text-gray-400 text-sm mb-4">
              Nucleus Web Studios is dedicated to innovating, creating, and
              elevating web solutions. We offer comprehensive web design,
              development, and marketing services to help your business succeed
              online.
            </p>
            <a
              href="#about"
              className="text-primary hover:text-primary-light transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

          <div>
            <h5 className="text-white font-bold text-lg mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#web-design" className="hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#web-development" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#seo" className="hover:underline">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="hover:underline">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold text-lg mb-4">
              Stay Connected
            </h5>
            <form action="#" method="POST" className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-700"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <faLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <faXTwitter />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <faInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p>© 2024 Nucleus Web Studios. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
