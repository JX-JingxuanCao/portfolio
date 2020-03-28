import React from "react";
import Image from "../image.js";

export default function LearningSkill(props) {
  return (
    <div className="icon-box">
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

      <div>
        <Image imgSrc="react.png" imgWidth="100" imgAlt="react" />
        <p>React</p>
      </div>
    </div>
  );
}
