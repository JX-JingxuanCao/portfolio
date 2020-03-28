import React from "react";
import Image from "../image";

export default function HadfunSkill(props) {
  return (
    <div className="icon-box">
      <div>
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
  );
}
