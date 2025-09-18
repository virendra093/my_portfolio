import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Progress from './components/Progress';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <Skills />
        <Projects />
        <Progress />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;