import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // You need to install react-icons

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-6 text-center text-slate-400">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/patil-virendra/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/virendra_100_?igsh=YWJwNzBqemVvaXZt" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Virendra Patil. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;