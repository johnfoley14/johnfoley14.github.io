import React, { useState, useEffect } from "react";

const Projects: React.FC = () => {
  const repos = [
    "BucolCompiler",
    "CS4437DSA",
    "BlockchainWeb3DApp",
    "HumanCentricComputing",
    "ZorkGame",
  ];

  // Initialize theme state based on localStorage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark"
      ? "vision-friendly-dark"
      : "default"
  );

  // Function to toggle theme and update images
  const toggleTheme = () => {
    const newTheme =
      theme === "vision-friendly-dark" ? "default" : "vision-friendly-dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Find the theme toggle button and add click event listener
    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", toggleTheme);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (themeToggleButton) {
        themeToggleButton.removeEventListener("click", toggleTheme);
      }
    };
  }, [theme]);

  return (
    <div className="flex flex-row justify-center items-center h-[60vh] pt-[5%]">
      <div className="grid grid-cols-2 gap-4 max-w-5xl h-full rounded">
        {repos.map((repo, index) => (
          <a
            key={index}
            href={`https://www.github.com/johnfoley14/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=johnfoley14&repo=${repo}&theme=${theme}`}
              alt={`${repo} Repository`}
            />
          </a>
        ))}
        <a
          href={`https://www.github.com/newsyd04/doj-site`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full"
            src={`https://github-readme-stats.vercel.app/api/pin/?username=newsyd04&repo=doj-site&theme=${theme}`}
            alt={`CyberSec Repository`}
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
