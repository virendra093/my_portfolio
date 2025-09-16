import React from 'react';

// Organized skills from your resume
const skills = {
  'Programming Languages': ['C++', 'JavaScript', 'Python'],
  'Frontend Development': ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'React.js'],
  'Backend Development': ['Node.js', 'Express.js'],
  'Database': ['MySQL', 'MongoDB'],
  'Core Skills': ['Data Structures and Algorithms', 'Problem Solving'],
  'Tools & Version Control': ['Git', 'GitHub', 'VS Code'],
};

// Soft skills from your resume
const softSkills = ['Teamwork', 'Leadership', 'Communication', 'Adaptability', 'Hardworking'];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">My Skills</h2>
      
      {/* Technical Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div 
            key={category} 
            className="bg-slate-800 p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-teal-500 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-slate-900 text-slate-300 px-4 py-2 rounded-full font-medium text-sm border border-slate-700 hover:border-teal-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <span key={index} className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;