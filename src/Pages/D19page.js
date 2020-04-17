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
import { MagicSpinner } from "react-spinners-kit";
// import ParallaxEffectImg from "../Components/tilt.js";


let D19Build1 = <Image imgSrc="D19-4.jpg" imgWidth="870" />;
let D19Build2 = <Image imgSrc="D19-1.jpg" imgWidth="870" />;
let D19Build3 = <Image imgSrc="D19-2.jpg" imgWidth="870" />;
let D19Build4 = <Image imgSrc="D19-3.jpg" imgWidth="870" />;

export default class D19 extends React.Component {
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
              Design Computing and Master of Interaction Design and Electronic Arts students."
                    secondContent="The show exhibits students’ ground-breaking design innovations and ideas, working with emerging 
              digital technologies to produce a variety of products, services, and systems, including mobile apps, digital 
              systems and experiences, and wearable technology. The 2019 theme - “D19 Wonderlab” - centred 
              around the playful transformation of a target venue, the Wilkinson Building Homebase at the University of Sydney."
                    thirdContent="As part of the D19 curation team, my job centred around collecting and organising creative 
              projects from target students and producing a floor plan in discussion with them. The project 
              demonstrated my ease designing and assessing a floor plan; I was in constant communication with 
              both the curation team and students in order to fully cater to the project’s particular needs and 
              functionalities, assisting ultimately in producing a memorable showcase."
                  />

                  <ProjectContent contentTitle="Designing Homebase"
                    contentMediaOne={D19Build4}
                    contentMediaTwo={D19Build1}
                    contentMediaThree={D19Build2}
                    contentMediaFour={D19Build3}
                  />

                  <ProjectContent contentTitle="D19 Team" />
                  {/* <ParallaxEffectImg
            imgSrc="D19-goup.JPG" imgWidth="770"
          /> */}
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}
