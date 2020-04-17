import React from "react";

import Tilt from "react-parallax-tilt";
import "../App.css";

const ParallaxEffectImg = (props) => {
  return (
    <Tilt
      className="parallax-effect-img"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1300}
      transitionSpeed={1500}
      scale={1.03}
      gyroscope={true}
    >
      <img src={props.imgSrc} width={props.imgWidth} alt={props.imgAlt} />
    </Tilt>
  );
};

export default ParallaxEffectImg;
