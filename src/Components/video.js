import React from "react";

export default function Video(props) {
  return (
    <video width={props.videoWidth} autoPlay loop muted>
      <source src={props.videoName} type="video/mp4" />
    </video>
  );
}
