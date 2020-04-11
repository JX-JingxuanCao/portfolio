import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default class Waterbug extends React.Component {
  render() {
    return (
      <div className="projectPage">
        <ScrollToTopOnMount />
        <NavBar type="projectPage" />

        <div className="project-page-wrapper">
          <Video videoWidth="100%" videoName="waterbug-main.mp4" />;
        </div>

        <div className="project-container-wrapper">
          <div className="projectPage-content-container">
            <h1 className="ProjectTitle">Waterbug</h1>
            <div className="projectPage-intro">
              <ProjectPage
                miniTitle="Role"
                roleName="  User Interface Designer | User Interaction Designer | User Experience Designer | User Researcher  
                "
              />
              <ProjectPage
                miniTitle="Team"
                roleName="Tom Clarke | Jingxuan Cao | Jason Moisiadis | Abhinav Bose
                "
              />
            </div>

            <ProjectContent
              contentTitle="Overview"
              mainContent="Waterbug is an app created to improve and ease gardening experiences 
              through use of autonomous drones. The app is customisable for particular plants and
               garden-types, and addresses gardening needs such as watering, weeding, soil quality, 
               and offers monitoring and notification services for users on the day-to-day state of 
               their garden.  Waterbug’s design means users have full control over, and access to, 
               their garden - even when away from home.
                "
            />
            <ProjectContent contentTitle="Users" />
            <ProjectContent contentTitle="Prototype & User flow" />
            <ProjectContent
              contentTitle="Final Prototype"
              mainContent="It took significant user-testing and multiple design iterations to produce 
              the right balance of information to display on the screen of the app. It was a challenging 
              process to combine the depth of the app’s function and customizability options with an 
              inviting and simple visual design, but our final prototype was successful in providing 
              the app’s flexible services without overwhelming users visually with information.
              "
            />
          </div>
        </div>
      </div>
    );
  }
}
