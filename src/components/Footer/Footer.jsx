import React from "react";
import "./Footer.css";
import "boxicons/css/boxicons.min.css";
import linkedin from '../../assests/images/linkedin.png'
import github from '../../assests/images/github.svg'
import resume from '../../assests/images/resume.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer_title">My Portfolio</h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="social-icon1">
                <a href="https://www.linkedin.com/in/samuktha-nacham-77aa83148/"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/samyuktha1"><img src={github} alt=""  /></a>
                <a href="https://docs.google.com/document/d/1dCZfBcPGo2ITHFMvYWLoUUnPh-orRYYYiZurqPL9sfQ/edit#bookmark=id.gjdgxs"><img src={resume} alt="" /></a>
              </div>
        <span className="footer_copy">
        © Samuktha Nacham . All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
