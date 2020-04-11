import React from "react";
import Preview from "../Components/Preview.js";
import { Skill } from "../Components/skill.js";
import { ButtonMain } from "../Components/ButtonMain.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import SkillSet from "../Components/skillSet.js";
import Contact from "../Components/contact.js";
import ToggleSkills from "../Components/toggleSkills/index";
import { Element } from "react-scroll";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import Cover from "../Cover.js";
import ParallaxEffectImg from "../CoverV2.js";
import Card from "../Components/CoverV3.js";

export default function Homepage() {
  let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;
  let deadMedia = <Video videoWidth="770" videoName="dead-cover.mp4" />;
  let WaterbugMedia = <Video videoWidth="770" videoName="waterbug-cover.mp4" />;
  let icpuMedia = <Image imgSrc="abs-empty.jpg" imgWidth="770" />;

  return (
    <div className="App">
      <ScrollToTopOnMount />
      <NavBar type="homepage" />
      <div className="cover-wrapper">
        {/* <Video videoWidth="600" videoName="intro.mp4" />; */}
        <div className="cover-img">
          {/* <Cover /> */}
          {/* <Image imgSrc="cover-home.png" />; */}
          {/* <ParallaxEffectImg /> */}
          <Card />
        </div>
      </div>

      <div className="preview-wrapper">
        <Element id="Work" name="Work">
          <Preview
            previewMedia={lumosMedia}
            projectTitle="Lumos"
            skillList={[
              <Skill
                key="Interaction Product Design"
                text="Interaction Product Design"
              />,
              <Skill
                key="Electrical Engineering"
                text="Electrical Engineering"
              />,
              <Skill key="Physical Computing" text="Physical Computing" />,
            ]}
            button={<ButtonMain buttonText="View Project" linkName="Lumos" />}
          />
          <Preview
            previewMedia={D19Media}
            projectTitle="University of Sydney The Design Graduate Exhibition 2019"
            skillList={[
              <Skill
                key="User Experience Design"
                text="User Experience Design"
              />,
              <Skill key="Exhibition Planning" text="Exhibition Planning" />,
              <Skill key="Branding" text="Branding" />,
            ]}
            button={<ButtonMain buttonText="View Project" linkName="D19" />}
          />
          <Preview
            previewMedia={deadMedia}
            projectTitle="Day of the Dead VR"
            skillList={[
              <Skill key="VR Game Design" text="VR Game Design" />,
              <Skill
                key="User Interaction Design"
                text="User Interaction Design"
              />,
              <Skill
                key="User Experience Design"
                text="User Experience Design"
              />,
            ]}
            button={
              <ButtonMain
                buttonText="View Project"
                linkName="Day Of The Dead"
              />
            }
          />

          <Preview
            previewMedia={icpuMedia}
            projectTitle="University of Sydney & Industry experts - Creating student centred spaces"
            skillList={[
              <Skill
                key="User Experience Design"
                text="User Experience Design"
              />,
              <Skill key="Data Analysis" text="Data Analysis" />,
            ]}
            button={
              <ButtonMain
                buttonText="View Project"
                linkName="University of Sydney & Industry experts - Create Space"
              />
            }
          />

          <Preview
            previewMedia={WaterbugMedia}
            projectTitle="Waterbug"
            skillList={[
              <Skill
                key="User Interface Design"
                text="User Interface Design"
              />,
              <Skill
                key="User Experience Design"
                text="User Experience Design"
              />,
            ]}
            button={
              <ButtonMain buttonText="View Project" linkName="Waterbug" />
            }
          />
        </Element>
      </div>

      <ToggleSkills />

      <div id="Profile">
        <Element name="Profile">
          <SkillSet />
        </Element>
      </div>

      <div id="Contact">
        <Element name="Contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}
