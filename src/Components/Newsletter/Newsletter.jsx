import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FiCalendar, FiHeart, FiShare2, FiRepeat } from "react-icons/fi";
import PropTypes from "prop-types";
import { FiHome, FiFileText, FiMail } from "react-icons/fi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faNewspaper,
//   faAddressBook,
//   faBars,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

const colors = {
  primary: "#6D28D9", // Deep purple
  accent: "#DB2777", // Soft pink
  background: "#F0F2F5",
  text: "#374151",
  highlight: "#22D3EE",
};

// Assuming you've already set up images at the specified paths in the public directory
const posts = [
  {
    id: 1,
    title: "The Art of Web Design",
    summary:
      "Discover how aesthetics and functionality merge in the latest web design trends.",
    imageUrl: "/images/web-design.jpg",
    date: "2024-02-06",
  },
  {
    id: 2,
    title: "Mobile UX: Beyond the Screen",
    summary:
      "Exploring innovative UX strategies for engaging mobile app experiences.",
    imageUrl: "/images/mobile-ux.jpg",
    date: "2024-02-04",
  },
  {
    id: 3,
    title: "Decoding App Development",
    summary:
      "A deep dive into the frameworks shaping the future of app development.",
    imageUrl: "/images/app-development.jpg",
    date: "2024-01-30",
  },
];

const ElegantNewsletterPost = ({ posts }) => {
  // Animation for post cards
  const postAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 200,
  });

  return (
    <animated.div
      className="container mx-auto px-4 py-8"
      style={({ backgroundColor: colors.background }, postAnimation)}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-500 ease-in-out"
            style={{ borderColor: colors.highlight, borderWidth: "1px" }}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div
                className="flex items-center text-sm"
                style={{ color: colors.accent }}
              >
                <FiCalendar className="mr-2" />
                {post.date}
              </div>
              <h3
                className="font-semibold text-xl mb-2"
                style={{ color: colors.primary }}
              >
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <div className="flex justify-between items-center">
                <button
                  style={{ backgroundColor: colors.background }}
                  className="btn flex items-center text-black bg-secondary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <FiRepeat className="mr-2" />
                  Read More
                </button>
                <div className="flex items-center">
                  <FiHeart
                    className="mr-2 cursor-pointer"
                    style={{ color: colors.accent }}
                  />
                  <FiShare2
                    className="cursor-pointer"
                    style={{ color: colors.accent }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

ElegantNewsletterPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const NavLink = ({ icon: Icon, children, href }) => {
  const [hovered, setHovered] = React.useState(false);
  const animation = useSpring({
    width: hovered ? "100px" : "0px",
    opacity: hovered ? 1 : 0,
    config: { tension: 300, friction: 20 },
  });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center text-gray-800 hover:text-gray-600 text-sm font-medium p-2 lg:mr-4"
    >
      <Icon className="text-gray-800 hover:text-gray-600 text-lg" />
      <span> </span>
      <animated.a
        href={href}
        style={animation}
        className="overflow-hidden text-gray-800 hover:text-gray-600 text-sm font-medium"
      >
        {children}
      </animated.a>
    </div>
  );
};

const Header = () => (
  <header className="bg-white shadow-md">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <a className="font-bold text-xl text-gray-800" href="#">
        TechNews
      </a>
      <div className="flex items-center">
        <NavLink icon={FiHome} href="#">
          Home
        </NavLink>
        <NavLink icon={FiFileText} href="#">
          Articles
        </NavLink>
        <NavLink icon={FiMail} href="#">
          Contact
        </NavLink>
      </div>
    </nav>
  </header>
);

NavLink.propTypes = {
  icon: PropTypes.elementType.isRequired, // elementType for components
  children: PropTypes.node.isRequired, // node for anything that can be rendered
  href: PropTypes.string.isRequired, // string for URL
};

const HeroSection = () => (
  <div
    className="relative flex flex-col justify-center items-center text-center py-16 px-4 min-h-screen"
    style={{
      backgroundImage: "url(/hero.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-500 opacity-60"></div>
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white z-10 relative leading-tight">
      Stay Updated with the Latest Tech Trends
    </h1>
    <p className="text-xl md:text-2xl lg:text-3xl text-white my-4 z-10 relative">
      Join our community of tech enthusiasts.
    </p>
    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-95">
      Subscribe Now
    </button>
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
      <a href="#" className="text-white hover:text-gray-300">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M..."></path>
        </svg>{" "}
        {/* Icon SVG Path */}
      </a>
      {/* Repeat for other social icons */}
    </div>
  </div>
);

// Use ElegantNewsletterPost component here, passing the mock data as props
const ContentSection = () => (
  <div className="container mx-auto px-4 py-8">
    <ElegantNewsletterPost posts={posts} />
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-sm">TechNews © 2024. All rights reserved.</div>
        <div className="flex items-center">
          <a
            href="#"
            className="text-white hover:text-gray-400 text-sm font-medium mr-4"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 text-sm font-medium"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Newsletter = () => {
  return (
    // Ensure you use the return statement to return JSX
    <div>
      <Header />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Newsletter;
