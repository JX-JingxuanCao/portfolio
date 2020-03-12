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
