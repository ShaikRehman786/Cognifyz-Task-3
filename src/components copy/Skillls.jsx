import './styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>HTML</h3>
          <div className="progress-bar html"></div>
        </div>
        <div className="skill-item">
          <h3>CSS</h3>
          <div className="progress-bar css"></div>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
          <div className="progress-bar js"></div>
        </div>
        <div className="skill-item">
          <h3>React Js</h3>
          <div className="progress-bar react-js"></div>
        </div>

         <div className="skill-item">
          <h3>Node Js</h3>
          <div className="progress-bar node-js"></div>
        </div>

         <div className="skill-item">
          <h3>Express Js</h3>
          <div className="progress-bar express-js"></div>
        </div>

         <div className="skill-item">
          <h3>MongoDB</h3>
          <div className="progress-bar mongodb"></div>
        </div>

         <div className="skill-item">
          <h3>Python</h3>
          <div className="progress-bar python"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
