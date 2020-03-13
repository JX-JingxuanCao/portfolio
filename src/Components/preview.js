import React from "react";

export default function ContentPreview(props) {
  return (
    <div className="previewBox">
      <div>
        <video width={props.videoWidth} autoPlay loop>
          <source src={props.videoName} type="video/mp4" />
        </video>
      </div>

      <div className="infoBox">
        <h3 className="project-title">{props.projectTitle}</h3>
        <div>{props.skillList}</div>
        {/* <a href={props.link}>View Project</a> */}
      </div>
    </div>
  );
}
