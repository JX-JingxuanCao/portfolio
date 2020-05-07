import React from "react";
import Image from "../image";

export default function TopSkill(props) {
  return (
    <div className="icon-box">
      <div className="adobeSoftware-icon">
        <Image imgSrc="Ai.png" imgWidth="100" imgAlt="Ai" />
        <p className="AdobeText">Illustrator</p>
      </div>

      <div>
        <Image imgSrc="Pr.png" imgWidth="100" imgAlt="Pr" />
        <p className="AdobeText">Premiere Pro</p>
      </div>

      <div>
        <Image imgSrc="In.png" imgWidth="100" imgAlt="In" />
        <p className="AdobeText">InDesign</p>
      </div>

      <div>
        <Image imgSrc="Ps.png" imgWidth="100" imgAlt="Ps" />
        <p className="AdobeText">Photoshop</p>
      </div>

      <div>
        <Image imgSrc="Ae.png" imgWidth="100" imgAlt="Ae" />
        <p className="AdobeText">After Effects</p>
      </div>

      <div>
        <Image imgSrc="Xd.png" imgWidth="100" imgAlt="Xd" />
        <p className="AdobeText">XD</p>
      </div>

      <div className="figmaDiv">
        <Image imgSrc="figma.png" imgWidth="50" imgAlt="figma" />
        <p className="figmaText">Figma</p>
      </div>
    </div>
  );
}
