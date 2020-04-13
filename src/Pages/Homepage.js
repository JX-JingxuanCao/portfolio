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

let lumosMedia = <Video videoWidth="770" videoName="lumosvfxV2.mp4" />;
let D19Media = <Image imgSrc="D19cover.jpg" imgWidth="770" alt="D19 Image" />;
let deadMedia = <Video videoWidth="770" videoName="dead-cover.mp4" />;
let WaterbugMedia = <Video videoWidth="770" videoName="waterbug-cover.mp4" />;
let icpuMedia = <Image imgSrc="abs-empty.jpg" imgWidth="770" />;



export default class Homepage extends React.Component {

  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);

    // Idk how I change here
    this.setState({
      loading: false
    });
  };

  // Idk how I change here
  fetchGitHub = () => {
    fetch("https://api.github.com/users/krissanawat")
      .then(res => res.json())
      .then(res => {
        let { name, company, blog, location, bio } = res;
        this.setState({
          name: name,
          company: company,
          blog: blog,
          location: location,
          bio: bio,
          loading: false
        });

      })
      .catch(error => {
        console.log(error);
        this.wait();
      });
  };
  componentDidMount() {
    this.wait(2000);
    // this.fetchGitHub();
  }

  render() {
    if (this.state.loading) return <Loading />;

    return (
      <div className="App">
        <ScrollToTopOnMount />
        <NavBar type="homepage" />

        <div className="cover-wrapper">
          <div className="cover-img">
            <Card />
          </div>
        </div>

        <Element id="Work" name="Work">
          <div className="preview-wrapper">
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
              button={<ButtonMain buttonText="View Project" linkName="Lumos" />}
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
              button={<ButtonMain buttonText="View Project" linkName="D19" />}
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
                  buttonText="View Project"
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
                  buttonText="View Project"
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
                <ButtonMain buttonText="View Project" linkName="Waterbug" />
              }
            />
          </div>

        </Element>

        <div id="Profile">
          <Element name="Profile">
            <div className="skill-intro">
              <Video videoWidth="660" videoName="intro.mp4" />;
            </div>
            <SkillSet />
            <ToggleSkills />
          </Element>
        </div>

        <div id="Contact">
          <Element name="Contact">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
}
