import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Safaris from './pages/Safaris';
import TravelInfo from './pages/TravelInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/travel-info" element={<TravelInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
