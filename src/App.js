import React from "react";
import Preview from "./Components/preview.js";
import { Skill } from "./Components/skill.js";
import { ProjectPage, ProjectContent } from "./Components/projectPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Preview
        videoName="lumosvfx.mp4"
        videoWidth="65%"
        projectTitle="Lumos"
        skillList={[
          <Skill text="Interaction Product Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />,
          <Skill text="Electrical Engineering" />,
          <Skill text="Physical Computing" />
        ]}
      />
    </div>
  );
}

export default App;
