import React from 'react';
import { motion } from 'framer-motion';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const TranslucentNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for logo
  const logoVariants = {
    hover: { scale: 1.1 }
  };

  // Animation variants for nav links
  const linkVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className="absolute top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md text-white py-4 px-4 flex justify-between items-center z-50"
      style={{position: "fixed"}}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Left Side - Logo or Brand Name */}
      <motion.div 
        className="flex items-center space-x-4 cursor-pointer"
        variants={logoVariants}
        whileHover="hover"
      >
        <motion.div 
          className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-black font-bold text-xl">L</span>
        </motion.div>
        <motion.span 
          className="hidden md:block font-semibold text-xl"
          whileHover={{ scale: 1.05 }}
        >
          Nucleus
        </motion.span>
      </motion.div>
      
      {/* Center - Navigation Links */}
      <div className={`flex-1 justify-center justify-self-center items-center md:flex ${isOpen ? "flex" : "hidden"} md:flex`}>
        <motion.ul 
          className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((text, index) => (
            <motion.li key={index} variants={linkVariants} whileHover="hover" whileTap="tap">
              <a href={`/${text.toLowerCase()}`} className="text-base font-medium hover:text-orange-400 transition-colors duration-300">
                {text}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <button onClick={toggleMenu} className="md:hidden z-50">
        {isOpen ? <CloseOutlined /> : <MenuOutlined />} 
      </button>
    </motion.nav>
  );
};

export default TranslucentNavbar;
