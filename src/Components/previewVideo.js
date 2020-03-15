import React from "react";

export default function PreviewVideo(props) {
  return (
    <div className="previewVideoBox">
      <div>
        <video width={props.videoWidth} autoPlay loop>
          <source src={props.videoName} type="video/mp4" />
        </video>
      </div>

      <div className="infoVideoBox">
        <h3 className="project-Videotitle">{props.projectVideoTitle}</h3>
        <div>{props.skillListV}</div>
        <div>{props.buttonV}</div>
        {/* <a href={props.link}>View Project</a> */}
      </div>
    </div>
  );
}
