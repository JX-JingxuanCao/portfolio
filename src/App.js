import React from "react";
import PreviewVideo from "./Components/previewVideo.js";
import PreviewPic from "./Components/previewPic.js";
import { Skill } from "./Components/skill.js";
import { ProjectPage, ProjectContent } from "./Components/projectPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PreviewVideo
        videoName="lumosvfx.mp4"
        videoWidth="65%"
        projectVideoTitle="Lumos"
        skillListV={[
          <Skill text="Interaction Product Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
      />

      <PreviewPic
        projectImg="D19cover.jpg"
        imgSize="43%"
        projectPicTitle="D19"
        skillListP={[
          <Skill text="Interaction Product Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
      />
    </div>
  );
}

export default App;
