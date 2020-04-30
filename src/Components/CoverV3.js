import React from "react";
import { useSpring, animated } from "react-spring";
import Video from "../Components/video.js";
import Image from "../Components/image.js";
import "../App.css";

// Trans3D x: number is bigger the movement is smaller

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export default function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="card-container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="bg-wrapper">
        <Image imgSrc="cover-changed.png" />
      </div>

      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <Video videoName="Final.mp4" />
      </animated.div>
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <Image imgSrc="JustMe.png" />
      </animated.div>
      {/* <animated.div
        class="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      /> */}
      {/* <animated.div
        class="card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      >
        <Image imgSrc="JustMe.png" />;
      </animated.div> */}
    </div>
  );
}
