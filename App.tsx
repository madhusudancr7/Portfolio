
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';
import Header from './components/Header';
import CursorLight from './components/CursorLight';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <CursorLight position={mousePosition} />
      <Header />
      <Hero />
      <main className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;