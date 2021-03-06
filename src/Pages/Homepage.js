import React from "react";
import Preview from "../Components/Preview.js";
import { Skill } from "../Components/skill.js";
import { ButtonMain } from "../Components/ButtonMain.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import SkillSet from "../Components/skillSet.js";
import Contact from "../Components/contact.js";
import FooterWhite from "../Components/footer-white.js";
import ThanksNote from "../Components/ThanksNote.js";
import ToggleSkills from "../Components/toggleSkills/index";
import Loader from "../Components/Loader.js";
import { Element } from "react-scroll";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import Card from "../Components/CoverV3.js";
import SkillSVG from "../Components/skillSVG.js";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MagicSpinner } from "react-spinners-kit";

let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;
let deadMedia = <Video videoWidth="770" videoName="dead-cover.mp4" />;
let WaterbugMedia = <Video videoWidth="770" videoName="waterbug-cover-1.mp4" />;
let icpuMedia = <Image imgSrc="abs-empty.jpg" imgWidth="770" />;

export default class Homepage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     done: undefined
  //   };
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ done: true });
  //   }, 3000);
  // }

  render() {
    const { isBusy } = this.props;

    if (isBusy) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      // <div>
      //   {!this.state.done ? (
      //     <div className="loading-wrapper">
      //       <MagicSpinner size="150" color="#ffa45c" />
      //     </div>
      //   ) : (
      <div>
        <div className="App">
          <ScrollToTopOnMount />

          <NavBar type="homepage" />

          <div className="cover-wrapper">
            <div className="cover-img">
              <Card />
            </div>
          </div>

          <div className="preview-wrapper">
            <Element id="Work" name="Work">
              <ScrollAnimation animateIn="fadeInUp">
                <Preview
                  previewMedia={lumosMedia}
                  projectTitle="Lumos"
                  skillList={[
                    <Skill
                      key="Interaction Product Design"
                      text="Interaction Product Design"
                    />,
                    <Skill
                      key="Electrical Engineering"
                      text="Electrical Engineering"
                    />,
                    <Skill
                      key="Physical Computing"
                      text="Physical Computing"
                    />
                  ]}
                  button={
                    <ButtonMain
                      buttonText="VIEW PROJECT"
                      linkName="Lumos"
                    />
                  }
                >
                  <div className="work-text">
                    <h1 className="work-title">Recent Work</h1>
                  </div>
                </Preview>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <Preview
                  previewMedia={D19Media}
                  projectTitle="University of Sydney The Design Graduate Exhibition 2019"
                  skillList={[
                    <Skill
                      key="User Experience Design"
                      text="User Experience Design"
                    />,
                    <Skill
                      key="Exhibition Planning"
                      text="Exhibition Planning"
                    />,
                    <Skill key="Branding" text="Branding" />
                  ]}
                  button={
                    <ButtonMain buttonText="VIEW PROJECT" linkName="D19" />
                  }
                />
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <Preview
                  previewMedia={deadMedia}
                  projectTitle="Day of the Dead VR"
                  skillList={[
                    <Skill key="VR Game Design" text="VR Game Design" />,
                    <Skill
                      key="User Interaction Design"
                      text="User Interaction Design"
                    />,
                    <Skill
                      key="User Experience Design"
                      text="User Experience Design"
                    />
                  ]}
                  button={
                    <ButtonMain
                      buttonText="VIEW PROJECT"
                      linkName="Day Of The Dead"
                    />
                  }
                />
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <Preview
                  previewMedia={icpuMedia}
                  projectTitle="University of Sydney & Industry experts - Creating student centred spaces"
                  skillList={[
                    <Skill
                      key="User Experience Design"
                      text="User Experience Design"
                    />,
                    <Skill key="Data Analysis" text="Data Analysis" />
                  ]}
                  button={
                    <ButtonMain
                      buttonText="VIEW PROJECT"
                      linkName="University of Sydney & Industry experts - Create Space"
                    />
                  }
                />
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp">
                <Preview
                  previewMedia={WaterbugMedia}
                  projectTitle="Waterbug"
                  skillList={[
                    <Skill
                      key="User Interface Design"
                      text="User Interface Design"
                    />,
                    <Skill
                      key="User Experience Design"
                      text="User Experience Design"
                    />
                  ]}
                  button={
                    <ButtonMain
                      buttonText="VIEW PROJECT"
                      linkName="Waterbug"
                    />
                  }
                />
              </ScrollAnimation>
            </Element>
          </div>

          <div id="Profile">
            <Element name="Profile">
              <SkillSet />
              <div className="skill-intro">
                <Video videoWidth="660" videoName="intro.mp4" />
              </div>
              <div className="toggleSkills">
                <ScrollAnimation animateIn="slideInUp">
                  <div className="skillBox">
                    <SkillSVG />
                  </div>
                </ScrollAnimation>
                <ToggleSkills />
              </div>
              <ScrollAnimation animateIn="slideInUp">
                <div className="skillBox">
                  <Image
                    imgSrc="cover-home-min.png"
                    imgWidth="860"
                    alt="D19 Image"
                  />
                </div>
              </ScrollAnimation>
              <div className="skillBox">
                <a
                  href="https://1drv.ms/b/s!AiCtkt9sv10PiVzPNIG-jJH2MAH7"
                  target="_blank"
                >
                  <button className="ButtonMain">VIEW RESUME</button>
                </a>
              </div>
            </Element>
          </div>

          <ScrollAnimation animateIn="fadeInUp">
            <div id="Contact">
              <Element name="Contact">
                <Contact />

                <ThanksNote />

                <FooterWhite />
              </Element>
            </div>
          </ScrollAnimation>
        </div>

        <div className="mobile-message">
          <h1 className="ProjectTitle">
            Awwww, how nice of you to come here check out my website 😊
              </h1>
          <h1 className="ProjectTitle">
            But you got a laptop or desktop? 💻 || 🖥️
              </h1>
          <h1 className="ProjectTitle">
            Otherwise, you gonna miss some cool stuff 😉
              </h1>
        </div>
      </div>
      //     )}
      // </div>
    );
  }
}
