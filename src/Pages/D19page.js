import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default function D19() {
  return (
    <div>
      <ScrollToTopOnMount />
      <NavBar type="projectPage" />
      <div className="D19logo">
        <Video videoWidth="100%" videoName="d19.mp4" />;
      </div>
    </div>
  );
}
