import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '@fontsource/plus-jakarta-sans';
import TranslucentNavbar from './Navbar';

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: 'spring',
    },
  },
  tap: {
    scale: 0.95,
  },
};

const HomeHero = () => {
  const imageUrl = "/image3.jpg";
  return (
    <div className="font-plus-jakarta-sans text-white min-h-screen flex flex-col justify-between relative"
    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center',  }}>
      {/* Translucent Navbar */}
      

      <TranslucentNavbar />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-8 md:px-20 lg:px-40">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Empowering Your Digital Presence</h1>
          <p className="text-sm md:text-base lg:text-lg mt-4 leading-snug">Bridging the Gap Between Vision and Reality with Cutting-Edge Web Solutions</p>
          
          
          {/* Call to Action Buttons */}
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-6 py-2 rounded mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={buttonVariants}
            >
              Discover Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-2 rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={buttonVariants}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </div>
      

      {/* Social Icons - Vertically arranged, centered to the left */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4">
      <div className="flex flex-col space-y-2">
        <FontAwesomeIcon icon={faTwitter} size="lg" className="text-white hover:text-gray-300 transition-colors duration-200" />
        <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-white hover:text-gray-300 transition-colors duration-200" />
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white hover:text-gray-300 transition-colors duration-200" />
        <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white hover:text-gray-300 transition-colors duration-200" />
      </div>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <div className="flex items-center justify-center px-8 py-16 bg-black min-h-screen text-white">
      <div className="relative mr-12">
        {/* Image container to make the image round and responsive */}
        <div className="w-64 h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-white">
          <img src="/image2.jpg" alt="Profile" className="object-cover w-full h-full" />
        </div>
        {/* Yellow circle positioned as a small bubble */}
        <div className="w-8 h-8 lg:w-12 lg:h-12 bg-yellow-500 rounded-full absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%]" />
      </div>

      {/* Text and button */}
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">Welcome to Nucleus Web Studio</h1>
        <p className="text-xl lg:text-2xl mb-8">where innovation meets excellence in web development.</p>
        <p className="mb-6">As the CEO and lead developer, I bring extensive experience in React JS, Next JS, HTML, CSS, Tailwind, Bootstrap, and more, to the forefront of every project. Our team, skilled in Python, Django, and various DBMS, complements our front-end prowess with robust back-end solutions.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start px-8 py-4 bg-yellow-500 text-black rounded-md font-semibold tracking-wide cursor-pointer shadow-lg"
        >
          Discover More
        </motion.button>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHero />
      <WelcomeSection />
    </div>
  );
};

export default HomePage;
