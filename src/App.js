import React from "react";
import Preview from "./Components/Preview.js";
import { Skill } from "./Components/skill.js";
import { ButtonMain } from "./Components/ButtonMain.js";
import Lumos from "./Components/Lumos.js";
import Image from "./Components/image.js";
import Video from "./Components/video.js";
import NavBar from "./Components/NavBar.js";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import "./App.css";

function App() {
  let lumosMedia = <Video videoWidth="770" videoName="lumosvfx.mp4" />;
  let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Preview
          previewMedia={lumosMedia}
          projectTitle="Lumos"
          skillList={[
            <Skill text="Interaction Product Design" />,
            <Skill text="Electrical Engineering" />,
            <Skill text="Physical Computing" />
          ]}
          button={<ButtonMain buttonText="View Project" />}
        />
        <div>
          <Route path="/lumos" component={Lumos} exact />
        </div>

        <Preview
          previewMedia={D19Media}
          projectTitle="University of Sydney The Design Graduate Exhibition 2019"
          skillList={[
            <Skill text="User Experience Design" />,
            <Skill text="Project Curation" />
          ]}
          button={<ButtonMain buttonText="View Project" />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
