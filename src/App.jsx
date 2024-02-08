import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home/HomeHero';
import ServicesPage from './Components/ServicesPage/Services';
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <div className="App">
      <AnimatePresence>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          
        </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
