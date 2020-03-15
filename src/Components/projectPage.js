import React from "react";

export function ProjectPage(props) {
  return (
    <div>
      <div>
        <h3 className="ProjectName">{props.text}</h3>
      </div>

      <div>
        <h4 className="miniTitle">{props.text}</h4>
        <div>
          <h5 className="roleName">{props.text}</h5>
        </div>
      </div>
    </div>
  );
}

export function ProjectContent(props) {
  return (
    <div>
      <h1 className="ContentTitle">{props.text}</h1>
      <p className="MainContent">{props.text}</p>
    </div>
  );
}

export function BlankSpace(props) {
  return (
    <div>
      <p>
        <br></br>
      </p>
      <p>
        <br></br>
      </p>
    </div>
  );
}
