import React from "react";

export function ProjectPage(props) {
  return (
    <div>
      <div className="titleBox">
        <h4 className="miniTitle">{props.miniTitle}</h4>
        <h5 className="roleName">{props.roleName}</h5>
      </div>
    </div>
  );
}
