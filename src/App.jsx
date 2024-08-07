import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App
