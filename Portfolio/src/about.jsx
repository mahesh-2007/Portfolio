import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import photo from './assets/MY photo.png'
function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="underline"></div>
      <div className="aboutImg">
        <img src={photo} alt="" />
      </div>
      <div className="aboutContent">
        <p>I'm Mahesh, a passionate and self-taught web developer with a solid foundation in HTML, CSS, and Java. I'm currently learning JavaScript and React.js to build modern and responsive web applications. I focus on writing clean code, creating simple UI components, and exploring the logic behind great websites. I also use Git & GitHub for version control and love working on personal projects that reflect my growth as a developer.
        </p>
        <Link to="/">
        <FaArrowCircleLeft className="arr" />
        </Link>
      </div>
    </div>
  );
}
export default About;