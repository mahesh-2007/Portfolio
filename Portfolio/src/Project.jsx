import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // 1. Add Autoplay
import projects from './project-data';
import { FaGithub, FaExternalLinkAlt, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Project() {
  return (
    <>
      <div className="project">
        <h2 className="Projects-Head">Projects</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // 2. Include Autoplay
        spaceBetween={10}
        loop={true}
        slidesPerView="auto"
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // 3. Autoplay Config
        breakpoints={{
          900: { slidesPerView: "auto", centeredSlides: true },
          600: { slidesPerView: 1, centeredSlides: false }
        }}
        style={{ padding: '40px 0', width: '100%', margin: '0 auto' }}
      >
        {projects.map((proj, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: 350,
              maxWidth: '90vw',
              minWidth: 200
            }}
          >
            <div className="project-card">
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-languages">
                {proj.languages.map((lang, i) => (
                  <span key={i}>{lang}</span>
                ))}
              </div>
              <div className="btn-pr">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="gh" />
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/">
        <FaArrowCircleLeft className="arr" />
      </Link>
    </>
  );
}

export default Project;
