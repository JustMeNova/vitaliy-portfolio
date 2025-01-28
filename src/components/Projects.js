const Projects = () => {
  return (
    <section id="projects" className="projects projects-box">
      <h2 className="section-title">Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          <img
            src={require("../assets/images/STMmap.gif")}
            alt="STM Metro Map Project"
            className="project-image"
          />
          <h3>STM Metro Map React Web App</h3>
          <p>React frontend and Express backend, filtering by metro line.</p>
        </li>
        <li className="project-item">
          <img
            src={require("../assets/images/imageWeb.png")}
            alt="Course Manager Project"
            className="project-image"
          />
          <h3>Course Manager Web App</h3>
          <p>Developed using Python Flask, Jinja, and Git.</p>
        </li>
        <li className="project-item">
          <img
            src={require("../assets/images/imageMotion.png")}
            alt="Motion Detection Project"
            className="project-image"
          />
          <h3>Motion Detection and Camera System</h3>
          <p>Raspberry Pi motion detection system with security features.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
