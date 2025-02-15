import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Global Finance Service',
      description: 'Automated CI/CD pipelines and managed Azure infrastructure for PwC.',
      technologies: ['Azure', 'PowerShell', 'ARM Templates'],
      image: '/images/project1.jpg',
    },
    {
      title: 'PepsiCo',
      description: 'Managed Azure IaaS and PaaS services for PepsiCo.',
      technologies: ['Azure', 'Docker', 'Kubernetes'],
      image: '/images/project2.jpg',
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <animated.div style={fadeIn} className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </animated.div>
    </section>
  );
};

export default Projects;
