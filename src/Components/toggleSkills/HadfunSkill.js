import React from "react";
import Image from "../image";

export default function HadfunSkill(props) {
  return (
    <div className="icon-box">
      <div>
        <Image imgSrc="3ds-max.png" imgWidth="100" imgAlt="3dsmax" />
        <p className="threeDprocessText">3ds Max</p>
      </div>

      <div className="unityDiv">
        <Image imgSrc="unity.png" imgWidth="85" imgAlt="unity" />
        <p className="unityText">Unity</p>
      </div>

      <div className="processDiv">
        <Image imgSrc="p3.png" imgWidth="100" imgAlt="html" />
        <p className="threeDprocessText">Processing</p>
      </div>
    </div>
  );
}
