import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default function Icpu() {
  return (
    <div>
      <ScrollToTopOnMount />
      <NavBar type="projectPage" />
    </div>
  );
}
