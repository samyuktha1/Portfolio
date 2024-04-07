// Projects.js
import React from "react";
import data from "../data/index.json";
import ProjImg1 from "../assests/images/jobanalytics.jpeg";
import ProjImg2 from "../assests/images/womensafety.png";
import ProjImg3 from "../assests/images/deeplearning.jpeg";
import ProjImg4 from "../assests/images/projImg4.png";

export default function Projects() {
  const projectImages = [ProjImg1, ProjImg2, ProjImg3,ProjImg4];

  return (
    <div id="projects">
      <section className="portfolio--section">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h2 className="section--heading">Projects</h2>
          </div>
        </div>
        <div className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <a
            href={item.link}                       // Link to project URL
            target="_blank"                        // Open link in a new tab
            rel="noopener noreferrer"              // Security measure for target="_blank"
            className="portfolio--card-link"      // Custom class for link
          >
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img-container">
                <img src={projectImages[index]} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}