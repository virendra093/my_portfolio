import React from 'react';

const projects = [
  {
    title: 'KRISHI MITRA',
    description: 'A Web platform for the farmers to get the information of farming related knowledge.',
    link: 'https://krishi-mitra-j3iaxpfb4-virendra-patils-projects-71b17790.vercel.app'
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project, highlighting the technologies used and its purpose.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of your third project, highlighting the technologies used and its purpose.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-semibold text-teal-500">{project.title}</h3>
            <p className="mt-2 text-slate-400 flex-grow">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-teal-500 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;