import React from "react";

export function ProjectPage(props) {
  return (
    <div>
      <div className="titleBox">
        <div className="miniTitle">{props.miniTitle}</div>
        <div className="roleName">
          {props.roleName} {props.iconSVG}
        </div>
      </div>
    </div>
  );
}
