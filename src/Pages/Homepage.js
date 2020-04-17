import React from "react";
import Preview from "../Components/Preview.js";
import { Skill } from "../Components/skill.js";
import { ButtonMain } from "../Components/ButtonMain.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import NavBar from "../Components/NavBar.js";
import SkillSet from "../Components/skillSet.js";
import Contact from "../Components/contact.js";
import ToggleSkills from "../Components/toggleSkills/index";
import { Element } from "react-scroll";
import ScrollToTopOnMount from "../Components/scrollToTopOnMount.js";
import Card from "../Components/CoverV3.js";
import Loading from "../Components/Loading.js";
import ReactLoading from "react-loading";

let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;
let deadMedia = <Video videoWidth="770" videoName="dead-cover.mp4" />;
let WaterbugMedia = <Video videoWidth="770" videoName="waterbug-cover.mp4" />;
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
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then(response => response.json())
  //       .then(json => this.setState({ done: true }));
  //   }, 1200);
  // }

  render() {
    return (
      // <div>
      //   {!this.state.done ? (
      //     <ReactLoading type={"bars"} color={"white"} />
      //   ) : (
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
            <div className="work-text">
              <h1 className="work-title">Recent Work</h1>
            </div>
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
                <Skill key="Physical Computing" text="Physical Computing" />,
              ]}
              button={<ButtonMain buttonText="VIEW PROJECT" linkName="Lumos" />}
            />

            <Preview
              previewMedia={D19Media}
              projectTitle="University of Sydney The Design Graduate Exhibition 2019"
              skillList={[
                <Skill
                  key="User Experience Design"
                  text="User Experience Design"
                />,
                <Skill key="Exhibition Planning" text="Exhibition Planning" />,
                <Skill key="Branding" text="Branding" />,
              ]}
              button={<ButtonMain buttonText="VIEW PROJECT" linkName="D19" />}
            />

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
                />,
              ]}
              button={
                <ButtonMain
                  buttonText="VIEW PROJECT"
                  linkName="Day Of The Dead"
                />
              }
            />

            <Preview
              previewMedia={icpuMedia}
              projectTitle="University of Sydney & Industry experts - Creating student centred spaces"
              skillList={[
                <Skill
                  key="User Experience Design"
                  text="User Experience Design"
                />,
                <Skill key="Data Analysis" text="Data Analysis" />,
              ]}
              button={
                <ButtonMain
                  buttonText="VIEW PROJECT"
                  linkName="University of Sydney & Industry experts - Create Space"
                />
              }
            />

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
                />,
              ]}
              button={
                <ButtonMain buttonText="VIEW PROJECT" linkName="Waterbug" />
              }
            />
          </Element>
        </div>



        <div id="Profile">
          <Element name="Profile">
            <SkillSet />
            <div className="skill-intro">
              <Video videoWidth="660" videoName="intro.mp4" />
            </div>
            <div className="toggleSkills">
              <ToggleSkills />
            </div>
            <div className="skillBox">
              <Image imgSrc="cover-home-min.png" imgWidth="860" alt="D19 Image" />
            </div>
            <div className="skillBox">
              <button className="ButtonMain"><a className="linkName" href="https://www.w3schools.com" target="_blank">VIEW RESUME</a> </button>
            </div>
          </Element>
        </div>

        <div id="Contact">
          <Element name="Contact">
            <Contact />
          </Element>
        </div>
      </div>
      //     )}
      // </div>
    );
  }
}
