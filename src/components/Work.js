import { FaBriefcase } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="work section">
      <h2 className="section-title">Work Experience</h2>

      {/* Job 1 */}
      <div className="work-experience">
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
      </div>

      {/* Job 2 */}
      <div className="work-experience">
        <div className="work-header">
          <h3 className="work-position">
            <FaBriefcase />
            Front Desk Receptionist
          </h3>
          <div className="timeline">
            <span className="timeline-date">June 2022</span>
            <span className="timeline-line"></span>
            <span className="timeline-date">Present</span>
          </div>
        </div>
        <ul className="work-details">
          <li>Managed reservations and handled check-ins and check-outs.</li>
          <li>Maintained records of bookings, payments, and guest details.</li>
          <li>Coordinated with housekeeping to ensure guest satisfaction.</li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
