import React, { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';
import '../styles/global.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  // Function to handle section scrolling and active highlighting
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
              <FaUser />
            </a>
          </li>
          <li>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
              <FaGraduationCap />
            </a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
              <FaTools />
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
              <FaProjectDiagram />
            </a>
          </li>
          <li>
            <a href="#work" className={activeSection === 'work' ? 'active' : ''}>
              <FaBriefcase />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
