import React from "react";

export default function ProjectContent(props) {
  return (
    <div>
      <h1 className="ContentTitle">{props.contentTitle}</h1>
      <p className="MainContent">{props.mainContent}</p>
    </div>
  );
}
