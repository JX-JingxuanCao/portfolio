import React from "react";
import Image from "./image.js";
import { Spring, Transition } from "react-spring/renderprops";
import { useTransition, animated } from "react-spring";

const Button = props => {
  return (
    <button className="btn pink darken-4" onClick={props.toggle}>
      {props.icons}
    </button>
  );
};
export default class Mesaage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div>
        <div className="skillBox">
          <h2 className="skillSet">Skills</h2>
        </div>
        <Button
          icons={this.state.isOpen ? "Hide" : "Show"}
          toggle={this.toggle}
        />
        {this.state.isOpen && (
          <Transition
            // from={{ opacity: 0 }}
            // to={{ opacity: 1 }}
            // config={{ delay: 100, duration: 500 }}
            item={Button.toggle}
            keys={items => Button.key}
            from={{ transform: "translate3d(-20vw,0,0)" }}
            enter={{ transform: "translate3d(0,0px,0)" }}
            leave={{ transform: "translate3d(-20vw,0,0)" }}
          >
            {items => props => (
              <div style={props}>
                <div className="pg">
                  <div>
                    <Image imgSrc="Ai.png" imgWidth="100" imgAlt="Ai" />
                    <p>Illustrator</p>
                  </div>
                  <div>
                    {" "}
                    <Image imgSrc="Pr.png" imgWidth="100" imgAlt="Pr" />
                    <p>Premiere Pro</p>
                  </div>
                  <div>
                    <Image imgSrc="In.png" imgWidth="100" imgAlt="In" />
                    <p>InDesign</p>
                  </div>
                  <div>
                    <Image imgSrc="Ps.png" imgWidth="100" imgAlt="Ps" />
                    <p>Photoshop</p>
                  </div>
                  <div>
                    {" "}
                    <Image imgSrc="Ae.png" imgWidth="100" imgAlt="Ae" />
                    <p>After Effects</p>
                  </div>
                  <div>
                    <Image imgSrc="Xd.png" imgWidth="100" imgAlt="Xd" />
                    <p>XD</p>
                  </div>
                  <div>
                    {" "}
                    <Image imgSrc="figma.png" imgWidth="50" imgAlt="figma" />
                    <p>Figma</p>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        )}

        <div className="soso">
          <div>
            {" "}
            <Image imgSrc="3ds-max.png" imgWidth="100" imgAlt="3dsmax" />
            <p>3ds Max</p>
          </div>

          <div>
            <Image imgSrc="unity.png" imgWidth="85" imgAlt="unity" />
            <p>Unity</p>
          </div>

          <div>
            <Image imgSrc="p3.png" imgWidth="100" imgAlt="html" />
            <p>Processing</p>
          </div>
        </div>

        <div className="learn">
          <div>
            <Image imgSrc="zbrush.png" imgWidth="100" imgAlt="zbrush" />
            <p>ZBrush</p>
          </div>
          <div>
            <Image imgSrc="UE.png" imgWidth="100" imgAlt="ue" />
            <p>Unreal Engine</p>
          </div>
          <div>
            <Image imgSrc="c4d.png" imgWidth="100" imgAlt="c4d" />
            <p> Cinema 4D</p>
          </div>
        </div>

        <div className="thisSite">
          <div>
            <Image imgSrc="react.png" imgWidth="100" imgAlt="react" />
            <p>React</p>
          </div>
          <div>
            <Image imgSrc="csslogo.png" imgWidth="100" imgAlt="csslogo" />
            <p>CSS</p>
          </div>
        </div>
      </div>
    );
  }
}
