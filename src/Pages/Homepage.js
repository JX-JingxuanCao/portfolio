import React from "react";
import Preview from "../Components/Preview.js";
import { Skill } from "../Components/skill.js";
import { ButtonMain } from "../Components/ButtonMain.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import SkillSet from "../Components/skillSet.js";
import Contact from "../Components/contact.js";
import { Element } from "react-scroll";

export default function Homepage() {
  let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;

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
          button={<ButtonMain buttonText="View Project" linkName="/Lumos" />}
        />
        <Preview
          previewMedia={D19Media}
          projectTitle="Day of the Dead VR"
          skillList={[
            <Skill text="VR Game Design" />,
            <Skill text="User Interaction Design" />,
            <Skill text="User Experience Design" />
          ]}
          button={<ButtonMain buttonText="View Project" linkName="/Lumos" />}
        />
        <Preview
          previewMedia={D19Media}
          projectTitle="University of Sydney & Industry experts - Create Space"
          skillList={[
            <Skill text="User Experience Design" />,
            <Skill text="Data Analysis" />
          ]}
          button={<ButtonMain buttonText="View Project" linkName="/Lumos" />}
        />
        <Preview
          previewMedia={D19Media}
          projectTitle="Waterbug"
          skillList={[
            <Skill text="User Interface Design" />,
            <Skill text="User Experience Design" />
          ]}
          button={<ButtonMain buttonText="View Project" linkName="/Lumos" />}
        />
      </Element>

      <Element name="Profile">
        <SkillSet />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}
