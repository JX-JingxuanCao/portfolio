import React from "react";
import Preview from "./Components/preview.js";
import { Skill } from "./Components/skill.js";
import { ProjectPage, ProjectContent } from "./Components/projectPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Preview
        videosrc="/Project/resource/lumos/lumosvfx.mp4"
        projectTitle="Lumos"
        skillList={[
          <Skill text="Interactive Product" />,
          <Skill text="what's good" />,
          <Skill text="what's the haps" />
        ]}
      />
    </div>
  );
}

export default App;
