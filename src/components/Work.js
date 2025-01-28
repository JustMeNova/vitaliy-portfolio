import { FaBriefcase } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="section">
      <h2 className="work-title">Work Experience</h2>
      <div className="work-header">
        <h3 className="work-position">
          <FaBriefcase />
          Bank Of Montreal – Customer Service Representative
        </h3>
        <div className="timeline">
          <span className="timeline-date">January 2024</span>
          <span className="timeline-line"></span>
          <span className="timeline-date">Present</span>
        </div>
      </div>
      <ul className="work-details">
        <li>Assisted customers with day-to-day banking needs.</li>
        <li>Helped clients navigate banking products and services.</li>
      </ul>
    </section>
  );
};

export default Work;
