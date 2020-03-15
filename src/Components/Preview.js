import React from "react";
import { ButtonMain } from "./ButtonMain";

export default function Preview (props) {
  return (
    <div className="previewVideoBox">
      <div>
        {props.previewMedia}
      </div>

      <div className="infoVideoBox">
        <h3 className="project-Videotitle">{props.projectTitle}</h3>
        <div>{props.skillList}</div>
        <div>
          <ButtonMain />
        </div>
        {/* <a href={props.link}>View Project</a> */}
      </div>
    </div>
  );
}
