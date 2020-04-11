import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";

export default class Icpu extends React.Component {
  render() {
    return (
      <div className="projectPage">
        <ScrollToTopOnMount />
        <NavBar type="projectPage" />

        <div className="project-page-wrapper">{/* <LumosModel /> */}</div>

        <div className="project-container-wrapper">
          <div className="projectPage-content-container">
            <h1 className="ProjectTitle">
              University of Sydney & Industry experts - Create Space
            </h1>
            <div className="projectPage-intro">
              <ProjectPage
                miniTitle="Role"
                roleName=" Researcher | User Experience Designer | Visual Designer  
                "
              />
              <ProjectPage
                miniTitle="Team"
                roleName="Callan Williams  | Eleanor Curran |  Jingxuan Cao | Matthew Raad
                "
              />
            </div>

            <ProjectContent
              contentTitle="Overview"
              mainContent="I participated in an intensive interdisciplinary group project, 
              working with one of the University of Sydney’s industry and community partners
               to research and prototype an innovative solution to a complex issue. As a 
               research team, we were asked to address issues within the University of Sydney’s 
               Student Experience policy in order to promote on-campus attendance, improve space 
               research and data analysis to identify areas of intervention, and following extensive 
               user research, we produced various proposals and solutions for systemic policy issues
                to the Head of USYD Student Strategic Team. 
                "
            />
            <ProjectContent
              contentTitle="Research"
              mainContent="From our research, the team decided a key intervention opportunity was 
              the promotion of ‘purpose’ as a core experiential concept, and developed research into 
              purpose-building activities accordingly. My roles within this research project centred 
              around designing user-testing models, facilitating data collection through interviews and
               journey-mapping, assisting in data analysis, and producing templates for both digital and 
               in-person presentation of our findings."
            />
          </div>
        </div>
      </div>
    );
  }
}
