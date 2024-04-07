// Projects.js
import React from "react";
import data from "../data/index.json";
import ProjImg1 from "../assests/images/jobanalytics.jpeg";
import ProjImg2 from "../assests/images/womensafety.png";
import ProjImg3 from "../assests/images/deeplearning.jpeg";

export default function Projects() {
  const projectImages = [ProjImg1, ProjImg2, ProjImg3];

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
<<<<<<< HEAD
=======
            <a
            href={item.link}                       // Link to project URL
            target="_blank"                        // Open link in a new tab
            rel="noopener noreferrer"              // Security measure for target="_blank"
            className="portfolio--card-link"      // Custom class for link
          >
>>>>>>> origin/main
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img-container">
                <img src={projectImages[index]} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
<<<<<<< HEAD
                <p className="text-sm portfolio--link">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
=======
              </div>
            </div>
            </a>
>>>>>>> origin/main
          ))}
        </div>
      </section>
    </div>
  );
}
