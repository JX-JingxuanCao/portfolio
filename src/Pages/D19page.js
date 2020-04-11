import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
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
              <ProjectPage
                miniTitle="Role"
                roleName=" Project Curator | Floor Plan Designer | Researcher 
                "
              />
              <ProjectPage
                miniTitle="Team"
                roleName="Elizabeth Anne | Edmond Hua | Ray Hwang | Jingxuan Cao | Miriam Green | 
                Angineh Karabedian | Abhinav Bose | Oliver Frohlich  "
              />
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
