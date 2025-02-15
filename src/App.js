import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeStyles = useSpring({
    backgroundColor: theme === 'dark' ? '#1e1e2f' : '#f4f4f4',
    color: theme === 'dark' ? '#fff' : '#333',
  });

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <animated.div className="portfolio" style={themeStyles}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </animated.div>
  );
}

export default App;
