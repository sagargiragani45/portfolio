import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Contact.css';

const Contact = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
  });

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <animated.form style={fadeIn} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </animated.form>
    </section>
  );
};

export default Contact;
