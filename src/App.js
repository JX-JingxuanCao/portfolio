import React from "react";
import Preview from "./Components/Preview.js";
import { Skill } from "./Components/skill.js";
import Image from './Components/image.js';
import Video from './Components/video';
import {
  ProjectPage,
  ProjectContent,
  BlankSpace
} from "./Components/projectPage.js";
import "./App.css";

function App() {

  let lumosMedia = <Video videoWidth="670" videoName="lumosvfx.mp4" />
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="670" alt="D19 Image" /> 

  return (
    <div className="App">
      <Preview
        previewMedia={lumosMedia}
        projectTitle="Lumos"
        skillList={[
          <Skill text="Interaction Product Design" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
      />

      <Preview
        previewMedia={D19Media}
        projectTitle="D19"
        skillList={[
          <Skill text="UX Design" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
      />
    </div>
  );
}

export default App;
