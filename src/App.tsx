import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Freedie from './pages/Freedie/Freedie';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freedie" element={<Freedie />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
