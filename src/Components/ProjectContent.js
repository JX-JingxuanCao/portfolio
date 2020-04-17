import React from "react";

export function ProjectContent(props) {
  return (
    <div className="contentBox">
      <h1 className="contentTitle">{props.contentTitle}</h1>
      <p className="mainContent">{props.mainContent}{props.children}</p>
    </div>
  );
}
