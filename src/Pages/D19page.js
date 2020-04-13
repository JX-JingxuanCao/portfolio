import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import {
  ProjectCurator,
  FloorPlan,
  Research,
  King,
  Queen,
} from "../Components/icons.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default class D19 extends React.Component {
  render() {
    return (
      <div className="projectPage">
        <ScrollToTopOnMount />
        <NavBar type="projectPage" />

        <div className="D19logo">
          <Video videoWidth="100%" videoName="d19.mp4" />;
        </div>

        <div className="project-container-wrapper">
          <div className="projectPage-content-container">
            <h1 className="ProjectTitle">
              University of Sydney | The Design Graduate Exhibition 2019
            </h1>

            <div className="projectPage-intro">
              <div className="mini-content-box">
                <ProjectPage miniTitle="Role" />

                <div className="iconTags-container">
                  <div className="iconTag">
                    <ProjectCurator />
                    <ProjectPage roleName="Project Curator" />
                  </div>

                  <div className="iconTag">
                    <FloorPlan />
                    <ProjectPage roleName="Floor Plan Designer" />
                  </div>

                  <div className="iconTag">
                    <Research />
                    <ProjectPage roleName="Researcher" />
                  </div>
                </div>
              </div>

              <div className="mini-content-box">
                <ProjectPage miniTitle="Team" />

                <div className="iconTags-wrapper">
                  <div className="iconTags-container">
                    <div className="iconTag">
                      <Queen />
                      <ProjectPage roleName="Elizabeth Anne" />
                    </div>

                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Edmond Hua" />
                    </div>

                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Ray Hwang" />
                    </div>
                  </div>

                  <div className="iconTags-container">
                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Jingxuan Cao" />
                    </div>

                    <div className="iconTag">
                      <Queen />
                      <ProjectPage roleName="Miriam Green" />
                    </div>

                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Oliver Frohlich" />
                    </div>
                  </div>

                  <div className="iconTags-container">
                    <div className="iconTag">
                      <Queen />
                      <ProjectPage roleName="Angineh Karabedian" />
                    </div>

                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Abhinav Bose" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProjectContent
              contentTitle="Overview"
              mainContent="The University of Sydney annually showcases works by graduating Bachelor of 
              Design Computing and Master of Interaction Design and Electronic Arts students.
                "
            />
            <ProjectContent
              mainContent="The show exhibits students’ ground-breaking design innovations and ideas, working with emerging 
              digital technologies to produce a variety of products, services, and systems, including mobile apps, digital 
              systems and experiences, and wearable technology. The 2019 theme - “D19 Wonderlab” - centred 
              around the playful transformation of a target venue, the Wilkinson Building Homebase at the University of Sydney."
            />
            <ProjectContent
              mainContent="As part of the D19 curation team, my job centred around collecting and organising creative 
              projects from target students and producing a floor plan in discussion with them. The project 
              demonstrated my ease designing and assessing a floor plan; I was in constant communication with 
              both the curation team and students in order to fully cater to the project’s particular needs and 
              functionalities, assisting ultimately in producing a memorable showcase."
            />
            <ProjectContent contentTitle="Floor Plan" />
            <ProjectContent contentTitle="Designing Homebase" />
            <ProjectContent contentTitle="D19 Team" />
          </div>
        </div>
      </div>
    );
  }
}
