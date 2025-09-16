import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">Virendra Patil</a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-teal-500 transition-colors">Home</a>
          <a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-teal-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;