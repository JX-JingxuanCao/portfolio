import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import Image from "../Components/image.js";
import NavBar from "../Components/NavBar.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import { MagicSpinner } from "react-spinners-kit";
import {
  Vdesign,
  Research,
  UXdesign,
  King,
  Queen,
} from "../Components/icons.js";

export default class Icpu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 3000);
  }
  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="loading-wrapper">
            <MagicSpinner size="150" color="#ffa45c" />
          </div>
        ) : (

            <div className="projectPage">
              <ScrollToTopOnMount />
              <NavBar type="projectPage" />

              <div className="project-page-wrapper"></div>

              <div className="project-container-wrapper">
                <div className="projectPage-content-container">
                  <h1 className="ProjectTitle">
                    University of Sydney & Industry experts - Create Space
            </h1>

                  <div className="projectPage-intro">
                    <div className="mini-content-box">
                      <ProjectPage miniTitle="Role" />

                      <div className="iconTags-container">
                        <div className="iconTag">
                          <UXdesign />
                          <ProjectPage roleName="User Experience Designer " />
                        </div>

                        <div className="iconTag">
                          <Vdesign />
                          <ProjectPage roleName="Visual Designer" />
                        </div>
                      </div>

                      <div className="iconTags-container">
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
                            <King />
                            <ProjectPage roleName="Callan Williams" />
                          </div>

                          <div className="iconTag">
                            <Queen />
                            <ProjectPage roleName="Eleanor Curran" />
                          </div>

                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName="Jingxuan Cao" />
                          </div>
                        </div>

                        <div className="iconTags-container">
                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName="Matthew Raad" />
                          </div>
                        </div>
                      </div>
                    </div>
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
                      to the Head of USYD Student Strategic Team."/>

                  <ProjectContent contentTitle="Timeline">
                    <Image imgSrc="icpu-timeline.png" imgWidth="870" />
                  </ProjectContent>



                  <ProjectContent
                    contentTitle="Research"
                    mainContent="From our research, the team decided a key intervention opportunity was 
                        the promotion of ‘purpose’ as a core experiential concept, and developed research into 
                        purpose-building activities accordingly. My roles within this research project centred 
                        around designing user-testing models, facilitating data collection through interviews and
                        journey-mapping, assisting in data analysis, and producing templates for both digital and 
                        in-person presentation of our findings.">

                    <div className="pic-box">
                      <Image imgSrc="icpu-main.png" imgWidth="870" />
                    </div>
                  </ProjectContent>

                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}
