import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Donate from './Components/Donate';
import Events from './Components/Events';
import Sermons from './Components/Sermons';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Beliefs from './Components/Beliefs';
import Code from './Components/Code';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/code" element={<Code />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
