import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, } from '@fortawesome/free-solid-svg-icons';
import NavBar from './Navbar';
import { motion } from 'framer-motion';

const HeroSection = () => {


  return (
    <section className="hero-section text-center py-20 bg-blue-600 text-white relative">
      <h1 className="hero-headline text-5xl font-bold">Empowering Your Digital Presence</h1>
      <p className="text-xl mt-4">Bridging the Gap Between Vision and Reality with Cutting-Edge Web Solutions</p>
      <div className="mt-8 hero-cta">
        <a href="/services" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-300">Discover Our Services</a>
        <a href="/contact" className="ml-4 border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition duration-300">Get in Touch</a>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="font-sans">
      <NavBar />

      <HeroSection />

      {/* Overview Section */}
      <section className="container mx-auto my-20">
  <div className="text-center">
    <h2 className="text-4xl font-bold">Welcome to [Your Company Name]</h2>
    {/* Introduction and USP with more engaging text styling */}
    <p className="mt-6 text-lg leading-relaxed">Welcome to [Your Company Name], where innovation meets excellence in web development...</p>
  </div>

  {/* Example of using Framer Motion for scroll animations */}
  <motion.div 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true }} 
    transition={{ duration: 0.6 }} 
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 }
    }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
  >
    {/* Content blocks for each point */}
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <h3 className="font-semibold text-xl">Innovative Solutions</h3>
      <p>Our team is skilled in the latest technologies...</p>
    </div>
    {/* Repeat for other points */}
  </motion.div>
</section>



      {/* Our Expertise Section */}
      <section className="bg-gray-100 py-12">
  <div className="container mx-auto">
    {/* Grid layout for expertise areas with hover effects */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="p-6 hover:scale-105 transition-transform duration-300">
        <FontAwesomeIcon icon={faCode} size="3x" className="mb-4" />
        <h4 className="font-semibold text-lg">Front-End Development</h4>
        <p>Crafting stunning, user-centric interfaces...</p>
      </div>
      {/* Repeat for each expertise area */}
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto my-12">
      For Startups and SMBs: We understand the unique challenges and opportunities that startups and small to medium-sized businesses face. Thats why we tailor our solutions to not just meet, but exceed your expectations, helping you stand out in a crowded digital landscape.
Clear Communication: Direct access to me, the CEO, ensures your ideas are heard, understood, and brought to life with precision. Our use of email, WhatsApp, and direct calls guarantees youre always in the know.
Comprehensive Tools: Leveraging industry-leading tools like Visual Studio Code for development, GitHub and Vercel for project management, and robust communication platforms, we ensure seamless workflow and impeccable results.
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white text-center py-20 relative motion-safe:hover:bg-blue-800">
  {/* Parallax or dynamic background effect */}
  <div className="absolute inset-0 bg-call-to-action-pattern opacity-20"></div>
  <div className="relative z-10">
    <h3 className="text-3xl font-bold">Ready to Elevate Your Digital Identity?</h3>
    <p className="mt-4 text-lg">Lets discuss how we can transform your vision into a digital masterpiece.</p>
    <a href="/contact" className="mt-8 inline-block bg-white text-blue-700 py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300">Contact Us Today</a>
  </div>
</section>

    </div>
    // </div>
  );
};

export default HomePage;
