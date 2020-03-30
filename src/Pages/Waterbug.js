import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";

export default function Waterbug() {
  return (
    <div className="WaterbugPage">
      <NavBar />

      <div className="WaterbugIntro">
        {/* <Video videoWidth="100%" videoName="waterbug-whitebg.mp4" />; */}
        <Video videoWidth="100%" videoName="waterbug-main.mp4" />;
      </div>
    </div>
  );
}