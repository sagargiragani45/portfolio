import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Microsoft Azure', icon: 'fab fa-microsoft' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fas fa-cubes' },
    { name: 'Terraform', icon: 'fas fa-code' },
    { name: 'Jenkins', icon: 'fab fa-jenkins' },
    { name: 'Git', icon: 'fab fa-git' },
    { name: 'PowerShell', icon: 'fas fa-terminal' },
    { name: 'Azure DevOps', icon: 'fas fa-tools' },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <animated.div style={fadeIn} className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon}></i>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </animated.div>
    </section>
  );
};

export default Skills;
