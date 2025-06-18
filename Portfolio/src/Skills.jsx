import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt , FaArrowCircleLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
const skills = [
  { name: "React", icon: <FaReact />, className: "skill-react" },
  {
    name: "Java",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        style={{ width: "2.5rem", height: "2.5rem" }}
      />
    ),
    className: "skill-java",
  },
  { name: "JavaScript", icon: <FaJs />, className: "skill-js" },
  { name: "HTML5", icon: <FaHtml5 />, className: "skill-html" },
  { name: "CSS3", icon: <FaCss3Alt />, className: "skill-css" },
  { name: "Git", icon: <FaGitAlt />, className: "skill-git" },
  
];

function Skills() {
  return (
  <>
    <div className="skills-center-container">
      <div className="skills-board">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className={`skill-icon ${skill.className}`}>{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
       
    </div>
    <div className="skillarr">
    <Link to="/" className="back-link">
      <FaArrowCircleLeft className="arr" />
      </Link>
      </div>
</>
  );
}

export default Skills;