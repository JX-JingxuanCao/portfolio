import React from "react";

export function ProjectContent(props) {
  return (
    <div className="contentBox">
      <h1 className="contentTitle">{props.contentTitle}</h1>
      <p className="mainContent">{props.mainContent}</p>
      <p className="secondContent">{props.secondContent}</p>
      <p className="thirdContent">{props.thirdContent}</p>
      <div className="pic-box">{props.contentMediaOne}</div>
      <div className="pic-box">{props.contentMediaTwo}</div>
      <div className="pic-box">{props.contentMediaThree}</div>
      <div className="pic-box">{props.contentMediaFour}</div>
      <div className="pic-box">{props.contentMediaFive}</div>
    </div>
  );
}
