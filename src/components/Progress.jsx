import React from "react";

const Progress = () => {
  // Example data: replace solved numbers + URLs with yours
  const platforms = [
    { 
      name: "LeetCode", 
      solved: 250, 
      url: "https://leetcode.com/your-username/" 
    },
    { 
      name: "Codeforces", 
      solved: 120, 
      url: "https://codeforces.com/profile/your-username" 
    },
    { 
      name: "HackerRank", 
      solved: 80, 
      url: "https://www.hackerrank.com/your-username" 
    },
    { 
      name: "GeeksforGeeks", 
      solved: 150, 
      url: "https://auth.geeksforgeeks.org/user/your-username/practice/" 
    },
  ];

  return (
    <section
      id="progress"
      className="py-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-teal-400">
        Problem Solving Progress
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-11/12 md:w-3/4">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center block"
          >
            <h3 className="text-2xl font-semibold mb-4">{platform.name}</h3>
            <p className="text-3xl font-bold text-teal-400">
              {platform.solved}
            </p>
            <p className="text-gray-400 mt-2">Problems Solved</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Progress;
