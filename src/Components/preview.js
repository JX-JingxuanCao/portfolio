import React from "react";

export default function ContentPreview(props) {
  return (
    <div>
      <div>
        <video src={props.videosrc} />
      </div>

      <div>
        <h2 className="project-title">{props.projectTitle}</h2>
        <div>{props.skillList}</div>
        <a href={props.link}>View Project</a>
      </div>
    </div>
  );
}
