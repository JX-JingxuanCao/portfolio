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

export default function Homepage() {
  let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;
  let deadMedia = <Video videoWidth="770" videoName="dead-cover.mp4" />;
  let WaterbugMedia = <Video videoWidth="770" videoName="waterbug-cover.mp4" />;
  let icpuMedia = <Image imgSrc="abs.jpg" imgWidth="770" alt="icpu Image" />;
  let icpuMedia2 = <Image imgSrc="abs-empty.jpg" imgWidth="770" />;

  return (
    <div className="App">
      <NavBar />
      <div className="cover-wrapper">
        <Video videoWidth="770" videoName="intro.mp4" />;
      </div>

      <Element name="Work">
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
            <Skill text="Exhibition Planning" />,
            <Skill text="Branding" />
          ]}
          button={<ButtonMain buttonText="View Project" linkName="/D19" />}
        />
        <Preview
          previewMedia={deadMedia}
          projectTitle="Day of the Dead VR"
          skillList={[
            <Skill text="VR Game Design" />,
            <Skill text="User Interaction Design" />,
            <Skill text="User Experience Design" />
          ]}
          button={
            <ButtonMain buttonText="View Project" linkName="/Day Of The Dead" />
          }
        />
        <Preview
          previewMedia={icpuMedia}
          projectTitle="University of Sydney & Industry experts - Creating student centred spaces"
          skillList={[
            <Skill text="User Experience Design" />,
            <Skill text="Data Analysis" />
          ]}
          button={
            <ButtonMain
              buttonText="View Project"
              linkName="/University of Sydney & Industry experts - Create Space"
            />
          }
        />

        <Preview
          previewMedia={icpuMedia2}
          projectTitle="University of Sydney & Industry experts - Creating student centred spaces"
          skillList={[
            <Skill text="User Experience Design" />,
            <Skill text="Data Analysis" />
          ]}
          button={
            <ButtonMain
              buttonText="View Project"
              linkName="/University of Sydney & Industry experts - Create Space"
            />
          }
        />

        <Preview
          previewMedia={WaterbugMedia}
          projectTitle="Waterbug"
          skillList={[
            <Skill text="User Interface Design" />,
            <Skill text="User Experience Design" />
          ]}
          button={<ButtonMain buttonText="View Project" linkName="/Waterbug" />}
        />
      </Element>

      <ToggleSkills />

      <Element name="Profile">
        <SkillSet />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}
