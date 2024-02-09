import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home/HomeHero';
import ServicesPage from './Components/ServicesPage/Services';
import { AnimatePresence } from "framer-motion";
import GradientButton from "./Components/Home/GradientButton";
import LandingPage from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/home" element={<LandingPage />} />

            <Route path="/button" element={<GradientButton />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
