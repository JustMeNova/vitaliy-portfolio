import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/global.css';
import profileImage from '../assets/images/image0.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-box">
        <div className="profile-container"><img src={profileImage} alt="Profile" className="profile-image" /></div>
        <div className="about-content">
          <h1 className="name">
            <Typewriter 
              words={['Vitaliy Aleksyuk', 'Full Stack Developer', 'Vitaliy Aleksyuk']} 
              loop={2} 
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/vitaliy-aleksyuk-13b466235" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="contact-icon" />
            </a>
            <a href="https://gitlab.com/JustNova" target="_blank" rel="noopener noreferrer">
              <FaGithub className="contact-icon" />
            </a>
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
