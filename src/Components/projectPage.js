import React from "react";

export default function ProjectPage(props) {
  return (
    <div>
      <div>
        <h3 className="ProjectName">{props.projectName}</h3>
      </div>

      <div>
        <h4 className="miniTitle">{props.miniTitle}</h4>
        <div>
          <h5 className="roleName">{props.roleName}</h5>
        </div>
      </div>
    </div>
  );
}
