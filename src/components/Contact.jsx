import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Get in Touch</h2>
      <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-lg shadow-md text-center">
        <p className="text-center mb-6">
          I'm actively seeking opportunities as a software developer. Feel free to connect with me!
        </p>

        {/* Updated Contact Links */}
        <div className="flex justify-center space-x-6">
          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/patil-virendra/" // Direct link from your resume [cite: 1]
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition-colors"
          >
            <FaLinkedin size={40} />
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/virendra093" // Direct link from your resume [cite: 1]
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition-colors"
          >
            <FaGithub size={40} />
          </a>
        </div>

        {/* Email Address */}
        <p className="mt-6 text-slate-400">
          Or, you can send me an email directly at:
          <a href="mailto:patilvirendra093@gmail.com" className="block text-teal-500 hover:underline mt-1">
            patilvirendra093@gmail.com 
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;