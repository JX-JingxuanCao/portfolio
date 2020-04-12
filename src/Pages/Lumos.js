import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import LumosModel from "..//Components/lumosModel.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import {
  UIdesign,
  Vdesign,
  Research,
  UXdesign,
  Build,
  Interaction,
  King,
  Queen,
} from "../Components/icons.js";

export default class Lumos extends React.Component {
  render() {
    return (
      <div className="projectPage">
        <ScrollToTopOnMount />
        <NavBar type="projectPage" />

        <div className="project-page-wrapper">
          <LumosModel />
        </div>

        <div className="project-container-wrapper">
          <div className="projectPage-content-container">
            <h1 className="ProjectTitle">Lumos</h1>
            <div className="projectPage-intro">
              <ProjectPage
                miniTitle="Role"
                roleName="Hardware Engineer | UX Designer | Visual Designer | Interaction Designer | Researcher"
              />
              <King /> <Queen /> <Build /> <UXdesign /> <Vdesign /> <UIdesign />{" "}
              <Research /> <Interaction />
              <ProjectPage
                miniTitle="Team"
                roleName="Anna Mylordis |  Jingxuan Cao | Mitch Hartigan  "
              />
            </div>

            <ProjectContent
              contentTitle="Abstract"
              mainContent="Lumos was an interactive lighting installation designed to attract pedestrians in 
                parks during nighttime. Users were encouraged to interact with the installation through the 
                ability to customise Lumos’ colours, and its animations were designed to draw in large crowds 
                and promote social activity and community through a shared experience. Lumos’ ultimate function
                 was to transform parks into lively, safe, and well-used public spaces during the night.
                "
            />
            <ProjectContent
              mainContent="Building Lumos was a challenging journey - a process of ideation, 
              iteration, prototyping, and teamwork. The team conducted research surrounding urban spaces and
               decided, eventually, to pursue design opportunities within public parks. Our vision was clear:
               we wanted to build something unique, practical, and visually stunning."
            />

            <ProjectContent contentTitle="Development Process" />

            <ProjectContent
              contentTitle="Conclusion"
              mainContent="While the team thoroughly enjoyed the process of designing Lumos, there were 
                certainly some challenges. None of us had experience developing on a Raspberry Pi or utilising 
                the Open Lighting Architecture (OLA) Framework, and we frequently faced hardware and software 
                issues during the design and building of the installation. It was effective work as a team unit 
                which allowed us to overcome these obstacles throughout the project, and my team and I gained a 
                great deal of practical design experience."
            />
          </div>
        </div>
      </div>
    );
  }
}
