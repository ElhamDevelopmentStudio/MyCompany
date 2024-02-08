import { motion } from 'framer-motion';
import NavBar from '../Home/Navbar'; 
import ServiceCard from './ServiceCard';
import { faCode, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
  exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut', duration: 0.3 } }
};

const gridVariants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const containersVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } }
};

const ServicesGrid = () => {
  // Replace these with actual icons and content
  const services = [
    { icon: faCode, title: "Website Development", description: "Custom websites tailored to your needs." },
    { icon: faSearch, title: "SEO Services", description: "Improve your site's visibility on search engines." },
    { icon: faUsers, title: "Social Media Marketing", description: "Engage and grow your audience online." },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={gridVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {services.map((service, index) => (
        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
      ))}
    </motion.div>
  );
};

const ServicesContainer = () => {
  return (
    <motion.div
      className="bg-black text-white py-20 px-10 lg:px-20"
      variants={containersVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-orange-500 text-lg uppercase tracking-widest">What were offering</h2>
        <h1 className="text-4xl lg:text-6xl font-bold my-6">Services We’re Providing To Our Customers</h1>
        <ServicesGrid />
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const backgroundImage = '/image1.jpg'; 

  return (
    <div>
      <NavBar />
      <motion.div
        className="bg-no-repeat bg-cover bg-center text-white flex"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex justify-start items-center pl-12 md:pl-24 lg:pl-32"> 
          <h1 className="text-6xl md:text-8xl font-bold capitalize">Services</h1>
        </div>
      </motion.div>
      <ServicesContainer />
    </div>
  );
};



export default ServicesPage;
