import React from "react";
import Preview from "./Components/preview.js";
import { Skill } from "./Components/skill.js";
import { ProjectPage, ProjectContent } from "./Components/projectPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Preview
        skillList={[
          <Skill text="ayy lmao" />,
          <Skill text="what's good" />,
          <Skill text="what's the haps" />
        ]}
      />
    </div>
  );
}

export default App;
