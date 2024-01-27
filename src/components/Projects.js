import React from "react";
import data from "../data/index.json"
import ProjImg1 from "../assests/images/projImg1.png";
import ProjImg2 from "../assests/images/projImg2.png";
import ProjImg3 from "../assests/images/projImg3.webp";
import ProjImg4 from "../assests/images/projImg4.jpeg";

export default function Projects(){
  return (
   <section className="portfolio--section" id="Myportfolio">
    <div className="portfolio--container-box">
      <div className="portfolio--container">
        <h2 className="section--heading">Projects</h2>
      </div>
    </div>
    <div className="portfolio--section--container">
      {data?.portfolio?.map((item,index)=>
        (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder"/>
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">
                  {item.title}
                </h3>
                <p className="text-md">{item.description}</p>
              </div>
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
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        )
     )}
    </div>

   </section>
  );
};
