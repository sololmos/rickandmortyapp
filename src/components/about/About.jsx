import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";




const About = () => {
  return (

    <div className="about-container">

      <div className="developer-info">
        <p className="detail-paragraph">
          Developed by
          <a
            className="link-class"
            href="https://portfolio-sol-olmos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="button-nav"> SOL OLMOS</h1>
          </a>
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/sololmos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sol-olmos-fullstackdev-industrialdesigner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
      <h1 className="detail-heading">About Rick and Morty App</h1>
      <p className="detail-paragraph">
        Welcome to the Rick and Morty App! This application allows you to
        explore the vast universe of Rick and Morty characters, powered by data
        from the official Rick and Morty API.
      </p>
      <p className="detail-paragraph">
        Our mission is to provide fans of the show with a fun and interactive
        experience where they can discover and learn more about their favorite
        characters from the multiverse.
      </p>
      <div className="detail-sections">
        <div className="detail-section">
          <h2 className="detail-heading">Features:</h2>
          <ul className="detail-list">
            <li className="detail-list-item">
              Explore a wide range of characters from the Rick and Morty
              universe.
            </li>
            <li className="detail-list-item">
              Search for characters by ID or name.
            </li>
            <li className="detail-list-item">
              Mark characters as favorites and access them easily.
            </li>
            <li className="detail-list-item">
              Filter characters by gender and species.
            </li>
            <li className="detail-list-item">
              Sort characters by ID or other criteria.
            </li>
          </ul>
        </div>
        <div className="detail-section">
          <h2 className="detail-heading">Technologies Used:</h2>
          <ul className="detail-list">
            <li className="detail-list-item">React</li>
            <li className="detail-list-item">Redux</li>
            <li className="detail-list-item">React Router</li>
            <li className="detail-list-item">Axios (for API requests)</li>
            <li className="detail-list-item">CSS (for styling)</li>
          </ul>
        </div>
      </div>

      <p className="detail-paragraph">
        Thank you for using the Rick and Morty App! We hope you enjoy exploring
        the universe and discovering new characters along the way.
      </p>
    </div>
  );
};

export default About;
