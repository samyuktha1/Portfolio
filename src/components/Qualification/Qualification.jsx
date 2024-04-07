import React, { useState } from "react";
import "./Qualification.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <FaGraduationCap className="qualification__icon1" />
            Education
          </div>

          <div className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            } onClick={()=>toggleTab(2)}>
            <FaBriefcase className="qualification__icon2" />
            Experience
          </div>
        </div>
      </div>
      <div className="qualification__sections">
        <div className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Information Technology and Management</h3>
              <span className="qualification__subtitle">
                Illinois Institute of Technology
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i>Spring 2023 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Computer Science</h3>
              <span className="qualification__subtitle">
                Keshav Memorial Institute of Technology
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2017 - 2021
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Intermediate</h3>
              <span className="qualification__subtitle">
                M.P.C
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2015 - 2017
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">S.S.C</h3>
              <span className="qualification__subtitle">
                Little Flower High School
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2005 - 2010
              </div>
            </div>
          </div>
        </div>
        <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Teaching Assistantship - Open Source Intelligent Device Application</h3>
              <span className="qualification__subtitle">
                Information Technology and Management
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Jan 2024 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Associate Software Engineer</h3>
              <span className="qualification__subtitle">
                Zemoso Technologies
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Dec 2020 - Dec 2022
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Associate Software Engineer</h3>
              <span className="qualification__subtitle">
                Accenture Technologies
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> April 2020 - Nov 2020
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
