import React from "react";
import Image from "./image.js";

export default function SkillSet() {
  return (
    <div>
      <div className="skillBox">
        <h2 className="skillSet">Skills</h2>
      </div>
      <div className="iconBox">
        <Image imgSrc="Ai.png" imgWidth="100" imgAlt="Ai" />

        <Image imgSrc="Pr.png" imgWidth="100" imgAlt="Ai" />
        <Image imgSrc="In.png" imgWidth="75" imgAlt="Ai" />
        <Image imgSrc="Ps.png" imgWidth="75" imgAlt="Ai" />
        <Image imgSrc="Ae.png" imgWidth="75" imgAlt="Ai" />
        <Image imgSrc="Xd.png" imgWidth="75" imgAlt="Ai" />
        <Image imgSrc="3dsmax.png" imgWidth="60" imgAlt="Ai" />
        <Image imgSrc="csslogo.png" imgWidth="75" imgAlt="Ai" />
        <Image imgSrc="figma.png" imgWidth="50" imgAlt="Ai" />
        <Image imgSrc="react.png" imgWidth="100" imgAlt="Ai" />
        <Image imgSrc="UE.png" imgWidth="100" imgAlt="Ai" />

        <Image imgSrc="unity.png" imgWidth="80" imgAlt="Ai" />
        <Image imgSrc="zbrush.png" imgWidth="100" imgAlt="Ai" />
      </div>
    </div>
  );
}
