import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home/HomeHero';
import ServicesPage from './Components/ServicesPage/Services';
import { AnimatePresence } from "framer-motion";
import GradientButton from "./Components/Home/GradientButton";
import DynamicGradientButton from "./Components/Helpers/DynamicGradientButton";
import { MdStar } from "react-icons/md";
import AboutUs from "./Components/About/AboutUs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/button" element={<GradientButton />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
