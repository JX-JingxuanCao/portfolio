import React from "react";
import Preview from "../Components/Preview.js";
import { Skill } from "../Components/skill.js";
import { ButtonMain } from "../Components/ButtonMain.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import SkillSet from "../Components/skillSet.js";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default function Homepage() {
  let lumosMedia = <Video videoWidth="770" videoName="lumosvfx.mp4" />;
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;

  return (
    <div className="App">
      {/* <NavBar /> */}
      <header className="mainNav">
        <nav className="navBar">
          <div className="NavLink">
            <div className="navLogo">
              <a href="/">Jingxuan Cao</a>
            </div>
            <div className="spacer"></div>
            <div className="navName">
              <ul>
                <li>
                  <button>
                    <Link to="/lumos">
                      <p>Work</p>
                    </Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/lumos">
                      <p>Profile</p>
                    </Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/lumos">
                      <p>Contact</p>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <NavBar linkStyle={"navLink"} scrollTarget={"SkillSet"} />

      <Preview
        previewMedia={lumosMedia}
        projectTitle="Lumos"
        skillList={[
          <Skill text="Interaction Product Design" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
        button={<ButtonMain buttonText="View Project" linkName="Lumos" />}
      />

      <Preview
        previewMedia={D19Media}
        projectTitle="University of Sydney The Design Graduate Exhibition 2019"
        skillList={[
          <Skill text="User Experience Design" />,
          <Skill text="Project Curation" />
        ]}
        button={<ButtonMain buttonText="View Project" linkName="/Lumos" />}
      />

      <div>
        <Element name="SkillSet" className="element">
          <SkillSet />
        </Element>
      </div>
    </div>
  );
}
