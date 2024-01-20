import React from "react";
import PageHeader from "../../components/pageHeaderContent/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faJs,
  faNode,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const personalDetails = [
  {
    label: "Name:",
    value: "Gurjeet Singh",
  },
  {
    label: "Email:",
    value: "gurjeetsingh870857@gmail.com",
  },
  {
    label: "Address:",
    value: "Brampton,ON",
  },

  {
    label: "LinkedIn Profile:",
    URL: "https://www.linkedin.com/in/gurjeet-singh-gs/",
  },
  {
    label: "Contact No:",
    value: "+1(437)-772-8757",
  },
];

const jobSummary =
  "Hi there! I'm Gurjeet Singh, an aspiring and detail-oriented individual with a passion for web development.I hold a diploma in Computer Programming from Seneca College, where I cultivated a solid foundation in programming principles and techniques.My skill set includes proficiency in HTML, CSS, JavaScript, React, Redux, NodeJs,  Bootstrap, and Tailwind CSS. I'm continuously expanding my knowledge and staying up-to-date with the latest industry trends to deliver cutting-edge solutions. I have made some real-world projects based on react framework and other technologies. Currently, I'm actively seeking opportunities for a web developer internship or job. I'm excited about the prospect of applying my skills to real-world projects and contributing to innovative web solutions.";

function About() {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about__content">
        <div className="about__content__personalInfo">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInfoHeader">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                  <span className="value">
                    {item.URL ? (
                      <a href={item.URL} rel="noreferrer" target="_blank">
                        {item.URL}{" "}
                      </a>
                    ) : (
                      ""
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__service__wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__service__wrapper__innerContent">
              <div>
                <FontAwesomeIcon
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                  icon={faReact}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faNode}
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faJs}
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faDatabase}
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faSass}
                  color="var(--yellow-theme-main-color)"
                  style={{ fontSize: "5rem" }}
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
