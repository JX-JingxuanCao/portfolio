import React from "react";
import Image from "../image";

export default function WebDevSkill(props) {
  return (
    <div className="icon-box">
      <div>
        <Image imgSrc="react.png" imgWidth="100" imgAlt="react" />
        <p className="webText">React</p>
      </div>

      <div className="netDiv">
        <Image imgSrc="netlify.png" imgWidth="100" imgAlt="react" />
        <p className="webText">Netlify</p>
      </div>

      <div className="cssDiv">
        <Image imgSrc="csslogo.png" imgWidth="100" imgAlt="csslogo" />
        <p className="webText">CSS</p>
      </div>
    </div>
  );
}
