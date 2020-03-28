import React from "react";
import Image from "../image";

export default function TopSkill(props) {
  return (
    <div className="icon-box">
      <div>
        <Image imgSrc="Ai.png" imgWidth="100" imgAlt="Ai" />
        <p>Illustrator</p>
      </div>

      <div>
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
        <Image imgSrc="Ae.png" imgWidth="100" imgAlt="Ae" />
        <p>After Effects</p>
      </div>

      <div>
        <Image imgSrc="Xd.png" imgWidth="100" imgAlt="Xd" />
        <p>XD</p>
      </div>

      <div className="figmaDiv">
        <Image imgSrc="figma.png" imgWidth="50" imgAlt="figma" />
        <p className="figmaText">Figma</p>
      </div>
    </div>
  );
}
