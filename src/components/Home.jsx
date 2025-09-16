import React from 'react';
import yourPhoto from '../assets/virendra.png'; // Import your image

const Home = () => {
  return (
    <section id="home" className="text-center py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
          <img
            src={yourPhoto} // Use the imported image
            alt="Your Photo"
            className="w-full h-full object-scaled "
          />
        </div>
        <div className="md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Hello, I'm <span className="text-teal-500">Viredra Patil</span></h1>
          <p className="text-xl md:text-2xl mt-2 font-medium">A passionate Software Developer</p>
          <p className="mt-4 max-w-lg mx-auto md:mx-0">
            I specialize in building responsive and dynamic web applications. With a keen eye for detail and a passion for problem-solving, I strive to create efficient and user-friendly digital experiences.
          </p>
           <a
            href="my-project/public/Virendra_Patil_Resume.pdf" // The path to your resume file in the public folder
            download="Virendra_Patil_Resume.pdf" 
            className="mt-6 inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;