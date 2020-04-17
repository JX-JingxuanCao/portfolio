import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import {
  GameDesign,
  VR,
  Modeller,
  Interaction,
  UXdesign,
  King,
  Queen,
} from "../Components/icons.js";

let deadvr1 = <Image imgSrc="dead-1.jpg" imgWidth="870" />;
let deadvr2 = <Image imgSrc="dead-2.jpg" imgWidth="870" />;
let deadvr3 = <Image imgSrc="dead-3.jpg" imgWidth="870" />;
let deadvr4 = <Image imgSrc="dead-4.jpg" imgWidth="870" />;

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
              <div className="mini-content-box">
                <ProjectPage miniTitle="Role" />

                <div className="iconTags-container">
                  <div className="iconTag">
                    <GameDesign />
                    <ProjectPage roleName="Game Designer" />
                  </div>

                  <div className="iconTag">
                    <Modeller />
                    <ProjectPage roleName="3D modeller" />
                  </div>

                  <div className="iconTag">
                    <VR />
                    <ProjectPage roleName="VR Design" />
                  </div>
                </div>

                <div className="iconTags-container">
                  <div className="iconTag">
                    <UXdesign />
                    <ProjectPage roleName="User Experience Designer " />
                  </div>

                  <div className="iconTag">
                    <Interaction />
                    <ProjectPage roleName="User Interaction Designer " />
                  </div>
                </div>
              </div>

              <div className="mini-content-box">
                <ProjectPage miniTitle="Team" />

                <div className="iconTags-wrapper">
                  <div className="iconTags-container">
                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Andrew Aiello" />
                    </div>

                    <div className="iconTag">
                      <Queen />
                      <ProjectPage roleName="Dorren Lam Longworth" />
                    </div>
                  </div>

                  <div className="iconTags-container">

                    <div className="iconTag">
                      <Queen />
                      <ProjectPage roleName="Georgina Jajjo" />
                    </div>

                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Jingxuan Cao" />
                    </div>
                  </div>

                  <div className="iconTags-container">
                    <div className="iconTag">
                      <King />
                      <ProjectPage roleName="Sergio De Las Heras " />
                    </div>
                  </div>
                </div>
              </div>
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
              secondContent="While the headset is on, the user can hold down the button to move in the direction 
              they are facing. To turn, they simply adjust their head, press the button, and proceed in the new 
              direction."
            />

            <ProjectContent contentTitle="Screenshots"
              contentMediaOne={deadvr1}
              contentMediaTwo={deadvr2}
              contentMediaThree={deadvr3}
              contentMediaFour={deadvr4}
            />
          </div>
        </div>
      </div>
    );
  }
}
