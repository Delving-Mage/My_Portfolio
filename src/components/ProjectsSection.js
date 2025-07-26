import React from 'react';

const projects = [
  {
    title: 'Weather App',
    description: 'A React app that shows weather information from an API.',
    link: 'https://github.com/Delving-Mage/weather-app'
  },
  {
    title: 'Todo List',
    description: 'A simple todo list built with React and local storage.',
    link: 'https://github.com/Delving-Mage/todo-react'
  },
  {
    title: 'Blog Platform',
    description: 'Full stack blog application with Express backend.',
    link: 'https://github.com/Delving-Mage/blog-platform'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map(project => (
          <div key={project.title} className="project-card p-4 border rounded-lg shadow-md bg-white text-gray-800">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
