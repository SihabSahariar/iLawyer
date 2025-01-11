import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import HireUs from './components/HireUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Attorneys />
      <HireUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;