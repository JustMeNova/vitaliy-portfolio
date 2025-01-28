import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="education-title">Education</h2>
      <div className="education-header">
        <h3 className="education-institution">
          <FaGraduationCap />
          DEC Computer Science Technology
        </h3>
        <p className="education-details">Dawson College</p>
      </div>
      <div className="timeline">
        <span className="timeline-date">September 2021</span>
        <span className="timeline-line"></span>
        <span className="timeline-date">Present</span>
      </div>
    </section>
  );
};

export default Education;
