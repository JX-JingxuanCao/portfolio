import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import LumosModel from "..//Components/lumosModel.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import FooterDark from "../Components/footer-dark.js";
import { MagicSpinner } from "react-spinners-kit";
import ParallaxEffectImg from "../Components/tilt.js";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import {
  Vdesign,
  Research,
  UXdesign,
  Build,
  Interaction,
  King,
  Queen,
} from "../Components/icons.js";

export default class Lumos extends React.Component {
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

              <div className="project-page-wrapper">
                <LumosModel />
              </div>

              <div className="project-container-wrapper">
                <div className="projectPage-content-container">
                  <h1 className="ProjectTitle">Lumos</h1>
                  <div className="projectPage-intro">
                    <div className="mini-content-box">
                      <ProjectPage miniTitle="Role" />

                      <div className="iconTags-wrapper">
                        <div className="iconTags-container">
                          <div className="iconTag">
                            <Build />
                            <ProjectPage roleName="Hardware Engineer" />
                          </div>

                          <div className="iconTag">
                            <UXdesign />
                            <ProjectPage roleName="UX Designer" />
                          </div>

                          <div className="iconTag">
                            <Vdesign />
                            <ProjectPage roleName="Visual Designer" />
                          </div>

                          <div className="iconTag">
                            <Interaction />
                            <ProjectPage roleName="Interaction Designer" />
                          </div>

                          <div className="iconTag">
                            <Research />
                            <ProjectPage roleName="Researcher" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mini-content-box">
                      <ProjectPage miniTitle="Team" />
                      <div className="iconTags-container">
                        <div className="iconTag">
                          <Queen />
                          <ProjectPage roleName="Anna Mylordis" />
                        </div>

                        <div className="iconTag">
                          <King />
                          <ProjectPage roleName="Jingxuan Cao" />
                        </div>

                        <div className="iconTag">
                          <King />
                          <ProjectPage roleName="Mitch Hartigan" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <ProjectContent
                    contentTitle="Abstract"
                    mainContent="Lumos was an interactive lighting installation designed to attract pedestrians in 
                      parks during nighttime. Users were encouraged to interact with the installation through the 
                      ability to customise Lumos’ colours, and its animations were designed to draw in large crowds 
                      and promote social activity and community through a shared experience. Lumos’ ultimate function
                      was to transform parks into lively, safe, and well-used public spaces during the night.">

                    <p>Building Lumos was a challenging journey - a process of ideation,
                    iteration, prototyping, and teamwork. The team conducted research surrounding urban spaces and
                    decided, eventually, to pursue design opportunities within public parks. Our vision was clear:
                    we wanted to build something unique, practical, and visually stunning.</p>
                  </ProjectContent>

                  <ProjectContent contentTitle="Development Process">
                    <div className="pic-box">
                      <Image imgSrc="lumos-build-1.png" imgWidth="870" />
                    </div>

                    <div className="pic-box">
                      <Image imgSrc="lumos-build-2.png" imgWidth="870" />
                    </div>

                    <div className="pic-box">
                      <Image imgSrc="lumos-build-3.png" imgWidth="870" />
                    </div>

                    <div className="pic-box">
                      <Image imgSrc="lumos-build-4.png" imgWidth="870" />
                    </div>

                    <div className="pic-box">
                      <Image imgSrc="lumos-build-5.png" imgWidth="870" />
                    </div>
                  </ProjectContent>


                  <ProjectContent
                    contentTitle="Conclusion"
                    mainContent="While the team thoroughly enjoyed the process of designing Lumos, there were 
                certainly some challenges. None of us had experience developing on a Raspberry Pi or utilising 
                the Open Lighting Architecture (OLA) Framework, and we frequently faced hardware and software 
                issues during the design and building of the installation. It was effective work as a team unit 
                which allowed us to overcome these obstacles throughout the project, and my team and I gained a 
                great deal of practical design experience.">

                    <div className="pic-box-lumos">
                      <ParallaxEffectImg
                        imgSrc="lumos-final.jpg" imgWidth="570" />
                    </div>
                  </ProjectContent>

                  <ProjectContent contentTitle="Lumos at D19">
                    <div className="pic-box">
                      <ParallaxEffectImg
                        imgSrc="lumos-gradshow.jpg" imgWidth="870" />
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
