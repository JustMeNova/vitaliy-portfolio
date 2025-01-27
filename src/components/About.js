import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/global.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-box">
        <div className="profile-placeholder">Image</div>
        <div className="about-content">
          <h1 className="name">
            <Typewriter 
              words={['Vitaliy Aleksyuk', 'Full Stack Developer', 'Vitaliy Aleksyuk']} 
              loop={2} // Infinite loop on the words 
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          <div className="contact-info">
            <p><FaLinkedin /> <a href="https://www.linkedin.com/in/vitaliy-aleksyuk-13b466235" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><FaGithub /><a href="https://gitlab.com/JustNova" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Motivated computer science student keen on developing innovative software applications. 
            Looking for roles that will allow me to improve my technical abilities and add value to demanding projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
