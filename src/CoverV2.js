import React from "react";

import Tilt from "react-parallax-tilt";
import "./App.css";
import Image from "./Components/image.js";

const ParallaxEffectImg = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={5}
    tiltMaxAngleY={5}
    perspective={1000}
    transitionSpeed={1500}
    scale={1.0}
    gyroscope={true}
  >
    <Image imgSrc="meV3.png" className="inner-element" alt="pic" />;
  </Tilt>
);

export default ParallaxEffectImg;
