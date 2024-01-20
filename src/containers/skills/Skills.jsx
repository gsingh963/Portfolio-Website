import React from "react";
import PageHeader from "../../components/pageHeaderContent/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

import "./Skills.scss";

function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills-content">
        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">JAVASCRIPT</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">REACT</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">TAILWIND CSS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">BOOTSTRAP</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">NODEJS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">EXPRESS JS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="65%"
              style={{ maxWidth: "65%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">VERSION CONTROL</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">UNIT TESTING</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">WEBPACK & BUNDLERS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">AGILE METHODOLOGY</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="65%"
              style={{ maxWidth: "65%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">MVC ARCHITECTURE</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
