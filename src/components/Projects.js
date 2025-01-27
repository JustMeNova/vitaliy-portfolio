const Projects = () => {
  return (
    <section id="projects" className="projects projects-box">
      <h2 className="section-title">Projects</h2>
      <div className="project">
        <h3>Course Manager Web App</h3>
        <p>Developed using Python Flask, Jinja, and Git.</p>
      </div>
      <div className="project">
        <h3>STM Metro Map React Web App</h3>
        <p>React frontend and Express backend, filtering by metro line.</p>
      </div>
      <div className="project">
        <h3>Motion Detection and Camera System</h3>
        <p>Raspberry Pi motion detection system with security features.</p>
      </div>
    </section>
  );
};

export default Projects;
