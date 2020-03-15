import React from "react";

export default function PreviewPic(props) {
  return (
    <div className="previewPicBox">
      <div>
        <img src={props.projectImg} width={props.imgSize} />
      </div>

      <div className="infoPicBox">
        <h3 className="project-Pictitle">{props.projectPicTitle}</h3>
        <div>{props.skillListP}</div>
        <div>{props.buttonP}</div>
        {/* <a href={props.link}>View Project</a> */}
      </div>
    </div>
  );
}
