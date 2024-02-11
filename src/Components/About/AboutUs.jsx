import { motion } from "framer-motion";
import TranslucentNavbar from "../Home/Navbar"; // Assuming you have this component created
import "./AboutUs.css"; // Assuming you have created a CSS file for non-Tailwind styles

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.4 },
  },
  tap: {
    scale: 0.95,
  },
};

const titleVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
};

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col spotlight-gradient text-white"
      // ... any other styles or attributes
    >
      <TranslucentNavbar />
      <motion.div
        className="flex-grow flex flex-col justify-center items-center px-4 sm:px-8 lg:px-20"
        initial="initial"
        animate="animate"
      >
        {/* Your text content here */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4 gradient-text"
          variants={titleVariants}
        >
          Welcome to Nucleus Web Studio
        </motion.h1>
        <motion.h2
          className="subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-center"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          Your Digital Architect for the Future
        </motion.h2>
        <p className="description text-center mb-6 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
          At Nucleus Web Studio, we believe in the power of digital
          transformation to reshape businesses, empower startups, and create
          innovative solutions that stand the test of time. Founded by a
          visionary front-end developer with extensive experience in creating
          dynamic and user-friendly web applications, our mission is to deliver
          digital solutions that not only meet but exceed our clients
          expectations.
        </p>
        {/* Button with gradient effect */}
        <motion.button
          className="about-gradient-button relative inline-block px-8 py-3 rounded overflow-hidden border-2 border-transparent"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"></span>
          <span className="relative">Get in touch</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
