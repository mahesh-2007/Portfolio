import photo from './assets/ICON.PNG'
import { Link } from 'react-router-dom';
import resume from './assets/resume.pdf';
import logo from './assets/logo.png';

function Home() {
  return (
    <>
      <div className="home">
        <div className="homeImg">
          <Link to="/about">
            <img src={photo} alt="HomeIcon" />
          </Link>
          <div className="resume-bottom">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h2>Resume</h2>
            </a>
          </div>
        </div>
        <div className="header-row">
          <div className="header-left">
            <div className="logo-top">
              <img src={logo} alt="Logo" />
            </div>
            <div className="contact-bottom">
              <a
                href="mailto:mm2472229@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mahesh,%20I%20visited%20your%20portfolio."
                style={{ textDecoration: 'none', color: 'inherit' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Contact</h2>
              </a>
            </div>
          </div>
          <div className="header-right">
            <h2>Skills</h2>

            <h2 style={{ marginRight:'30px', marginBottom:'45px' }}>Projects</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home