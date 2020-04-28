import React, { Component } from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import FooterDark from "../Components/footer-dark.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import { MagicSpinner } from "react-spinners-kit";
import ParallaxEffectImg from "../Components/tilt.js";
import {
  ProjectCurator,
  FloorPlan,
  Research,
  King,
  Queen,
} from "../Components/icons.js";



export default class D19 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => this.setState({ done: true }));
    }, 4000);
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
                                 Design Computing and Master of Interaction Design and Electronic Arts students.">
                    <p>The show exhibits students’ ground-breaking design innovations and ideas,
                    working with emerging digital technologies to produce a variety of products, services, and systems,
                    including mobile apps, digital systems and experiences, and wearable technology.
                    The 2019 theme - “D19 Wonderlab” - centred around the playful transformation of a target venue,
                    the Wilkinson Building Homebase at the University of Sydney.</p>

                    <p>As part of the D19 curation team, my job centred around collecting and organising creative
                    projects from target students and producing a floor plan in discussion with them. The project
                    demonstrated my ease designing and assessing a floor plan; I was in constant communication with
                    both the curation team and students in order to fully cater to the project’s particular needs and
                    functionalities, assisting ultimately in producing a memorable showcase.</p>
                  </ProjectContent>

                  <ProjectContent contentTitle="Designing Homebase">
                    <div className="pic-box-default">
                      <Image imgSrc="D19-4.jpg" />
                    </div>

                    <div className="pic-box-default">
                      <Image imgSrc="D19-1.jpg" />
                    </div>

                    <div className="pic-box-default">
                      <Image imgSrc="D19-2.jpg" />
                    </div>

                    <div className="pic-box-default">
                      <Image imgSrc="D19-3.jpg" />
                    </div>
                  </ProjectContent>

                  <ProjectContent contentTitle="D19 Team">
                    <div className="pic-box-default">
                      <ParallaxEffectImg imgSrc="D19-goup.JPG" imgWidth="670" />
                    </div>
                  </ProjectContent>

                  <ProjectContent contentTitle="D19 Video">
                    <div className="pic-box">
                      <iframe width="1024" height="576" src="https://www.youtube.com/embed/zIqdmNU0IMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </ProjectContent>

                </div>
              </div>
              <FooterDark />
            </div>
          )}
      </div>
    );
  }
}
