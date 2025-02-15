import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Experience.css';

const Experience = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <animated.div style={fadeIn} className="experience-content">
        <h3>Azure DevOps Engineer</h3>
        <p>Sukranth Technologies | June 2022 - Present</p>
        <ul>
          <li>Automated CI/CD pipelines using Azure DevOps and Jenkins.</li>
          <li>Managed Azure infrastructure using Terraform and ARM templates.</li>
          <li>Deployed and scaled applications using Docker and Kubernetes.</li>
        </ul>
      </animated.div>
    </section>
  );
};

export default Experience;
