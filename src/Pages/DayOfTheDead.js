import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default class DayOfTheDead extends React.Component {
  render() {
    return (
      <div className="projectPage">
        <ScrollToTopOnMount />
        <NavBar type="projectPage" />

        <div className="project-page-wrapper">{/* <LumosModel /> */}</div>

        <div className="project-container-wrapper">
          <div className="projectPage-content-container">
            <h1 className="ProjectTitle">Day of the Dead - VR game</h1>
            <div className="projectPage-intro">
              <ProjectPage
                miniTitle="Role"
                roleName=" Game Designer | 3D modeller | User Experience Designer | User Interaction Designer 
                "
              />
              <ProjectPage
                miniTitle="Team"
                roleName="Andrew Aiello | Dorren Lam Longworth | Georgina Jajjo |  Jingxuan Cao | 
                Sergio De Las Heras "
              />
            </div>

            <ProjectContent
              contentTitle="Overview"
              mainContent="This project was designed as an educational aid to increase awareness about the 
              Mexican Festival known as the Day of the Dead through a virtual reality (VR) experience. 
              The user gains an understanding of the festival through completion of objectives throughout 
              the game, with assistance and accompaniment by a virtual guide who provides relevant information.
               Interaction is enabled through use of a virtual reality headset, in which buttons on the headset 
               are used to interact with corresponding buttons and phenomena within the game.
                "
            />
            <ProjectContent
              mainContent="While the headset is on, the user can hold down the button to move in the direction 
              they are facing. To turn, they simply adjust their head, press the button, and proceed in the new 
              direction."
            />
            <ProjectContent contentTitle="Screenshots" />
          </div>
        </div>
      </div>
    );
  }
}
