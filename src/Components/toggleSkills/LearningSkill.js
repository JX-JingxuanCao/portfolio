import React from "react";
import Image from "../image.js";

export default function LearningSkill(props) {
  return (
    <div className="icon-box">
      <div>
        <Image imgSrc="zbrush.png" imgWidth="100" imgAlt="zbrush" />
        <p className="learnText">ZBrush</p>
      </div>

      <div className="ueDiv">
        <Image imgSrc="UE.png" imgWidth="100" imgAlt="ue" />
        <p className="ueText">Unreal Engine</p>
      </div>

      <div className="c4dDiv">
        <Image imgSrc="c4d.png" imgWidth="100" imgAlt="c4d" />
        <p className="learnText"> Cinema 4D</p>
      </div>

      <div className="rctDiv">
        <Image imgSrc="react.png" imgWidth="100" imgAlt="react" />
        <p className="learnText">React</p>
      </div>
    </div>
  );
}
