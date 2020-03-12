import React from "react";
import SkillList from "./skillList";

export function Preview(props) {
  return (
    <div>
      <div>
        <video src={props.videosrc} />
      </div>

      <div>
        <h2 className="project-title">{props.projectTitle}</h2>
        <div>{props.SkillList}</div>
        <a href={props.link}>View Project</a>
      </div>
    </div>
  );
}
