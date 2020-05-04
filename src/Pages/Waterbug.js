import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import FooterWhite from "../Components/footer-white.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import { MagicSpinner } from "react-spinners-kit";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {
  UXresearch,
  Interaction,
  UXdesign,
  UIdesign,
  King
} from "../Components/icons.js";

export default class Waterbug extends React.Component {
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
    }, 7000);
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

              <div className="project-page-wrapper">
                <Video videoWidth="100%" videoName="waterbug-main.mp4" />;
        </div>

              <div className="project-container-wrapper">
                <div className="projectPage-content-container">
                  <h1 className="ProjectTitle">Waterbug</h1>
                  <div className="projectPage-intro">
                    <div className="mini-content-box">
                      <ProjectPage miniTitle="Role" />

                      <div className="iconTags-container">

                        <div className="iconTag">
                          <UIdesign />
                          <ProjectPage roleName="User Interface Designer " />
                        </div>

                        <div className="iconTag">
                          <Interaction />
                          <ProjectPage roleName="User Interaction Designer" />
                        </div>

                        <div className="iconTag">
                          <UXdesign />
                          <ProjectPage roleName="User Experience Designer " />
                        </div>

                        <div className="iconTag">
                          <UXresearch />
                          <ProjectPage roleName="User Researcher" />
                        </div>
                      </div>
                    </div>

                    <div className="mini-content-box">
                      <ProjectPage miniTitle="Team" />

                      <div className="iconTags-wrapper">
                        <div className="iconTags-container">
                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName="Tom Clarke" />
                          </div>

                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName="Jingxuan Cao" />
                          </div>

                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName="Jason Moisiadis" />
                          </div>

                          <div className="iconTag">
                            <King />
                            <ProjectPage roleName=" Abhinav Bose" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <ProjectContent
                    contentTitle="Overview"
                    mainContent="Waterbug is an app created to improve and ease gardening experiences 
              through use of autonomous drones. The app is customisable for particular plants and
               garden-types, and addresses gardening needs such as watering, weeding, soil quality, 
               and offers monitoring and notification services for users on the day-to-day state of 
               their garden.  Waterbug’s design means users have full control over, and access to, 
               their garden - even when away from home."/>

                  <ProjectContent contentTitle="User Needs">
                    <div className="pic-box-small">
                      <Image imgSrc="waterbug-user.png" />
                    </div>
                  </ProjectContent>


                  <ProjectContent contentTitle="Design Process">
                    <div className="pic-box-default">
                      <Image imgSrc="waterbug-design-process.png" />
                    </div>
                  </ProjectContent>

                </div>
              </div>

              <ScrollAnimation
                animateIn="fadeInUp"
                duration="2"
              >
                <div className="project-container-wrapper-white">
                  <div className="projectPage-content-container">
                    <ProjectContent contentTitle="Prototype & User flow">
                      <div className="pic-box-default">
                        <Image imgSrc="waterbug-userflow.png" />
                      </div>
                    </ProjectContent>

                    <ProjectContent
                      contentTitle="Final Prototype">
                      <p className="waterbug-final-text">It took significant user-testing and multiple design iterations to produce
                      the right balance of information to display on the screen of the app. It was a challenging
                      process to combine the depth of the app’s function and customizability options with an
                      inviting and simple visual design, but our final prototype was successful in providing
                        the app’s flexible services without overwhelming users visually with information. </p>

                      <div className="pic-box-default">
                        <Image imgSrc="waterbug-final-design.png" />
                      </div>
                    </ProjectContent>

                    <ProjectContent
                      contentTitle="Interactive Prototype">
                      <div className="prototype-box">
                        <div className="app-prototype">
                          <iframe width="350" height="650" align="middle" src="https://xd.adobe.com/embed/f8c64398-892f-4bf7-4975-770aaebe6f0b-8ef7/" frameborder="0"></iframe>
                        </div>
                      </div>
                    </ProjectContent>

                  </div>
                </div>
              </ScrollAnimation>
              <FooterWhite />
            </div>
          )}
      </div>
    );
  }
}
