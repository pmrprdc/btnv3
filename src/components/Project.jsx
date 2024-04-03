import React, { useState, useEffect } from 'react';

function ProjectsList({ projects }) {
  const [isFlashing, setIsFlashing] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Start flashing by default for all buttons
    const interval = setInterval(() => {
      setIsFlashing((prev) => !prev);
    }, 500); // Changes the color every 500 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;
        // Adjust styles based on hover state; keep flashing effect as default
        const linkStyle = {
          color: isFlashing ? '#FFFF00' : '#FFD700', // Alternating between two shades of yellow
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          margin: '5px',
          textDecoration: 'none', // Remove underline from links
          background: isHovered ? 'lightgray' : 'transparent',
          display: 'inline-block', // Necessary for applying padding and margins correctly
          transition: 'background-color 0.3s', // Smooth transition for background color
        };

        return (
          <a
            href="https://forms.gle/FoVRZrgqbE3RGnSN7"
            key={index}
            style={linkStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank" // Opens the link in a new tab/window
            rel="noopener noreferrer" // Security measure for opening links in a new tab
          >
            {project}
          </a>
        );
      })}
    </>
  );
}

export default ProjectsList;
