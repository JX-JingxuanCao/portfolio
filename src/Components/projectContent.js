import React from "react";

export function ProjectContent(props) {
  return (
    <div>
      <h1 className="ContentTitle">{props.text}</h1>
      <p className="MainContent">{props.text}</p>
    </div>
  );
}
