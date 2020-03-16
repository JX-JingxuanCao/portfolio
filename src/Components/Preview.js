import React from "react";
import { ButtonMain } from "./ButtonMain";

export default function Preview(props) {
  return (
    <div className="previewBox">
      <div>{props.previewMedia}</div>

      <div className="infoBox">
        <h3 className="project-title">{props.projectTitle}</h3>
        <div>{props.skillList}</div>
        {props.button}
      </div>
      {/* <a href={props.link}>View Project</a> */}
    </div>
  );
}
