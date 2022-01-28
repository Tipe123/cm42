

import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return(
    <div className="App">
    <Header />
     <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
       </Routes>
     </Router>
     <Footer instagram={"/"} facebook={"/"} twitter={"/"} linkedin={"/"} />
    </div>
  );
}

export default App;
