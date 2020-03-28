import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import LumosModel from "..//Components/lumosModel.js";
import NavBar from "../Components/NavBar.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Lumos() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <div className="projectPage">
      <NavBar />
      <div className="lumos-page-wrapper">
        <LumosModel />
      </div>

      <div className="lumos-container-wrapper">
        <div className="projectPage-content-container">
          <h1 className="contentTitle">Lumos</h1>
          <div className="projectPage-intro">
            <ProjectPage
              miniTitle="Role"
              roleName="Hardware Engineer | UX Designer | Visual Designer | Interaction Designer | Researcher"
            />
            <ProjectPage
              miniTitle="Team"
              roleName="Elizabeth Anne | Edmond Hua | Ray Hwang | Jingxuan Cao | Angineh Karabedian | Miriam Green | Abhinav Bose | Oliver Frohlich "
            />
          </div>
          <ProjectContent
            contentTitle="Abstract"
            mainContent="Parks help cities, but only if people use them. Although parks promote a more active 
        and less stressful lifestyle, research has shown that city parks are ‘underused’ by the general population. 
        as people prefer to relax in places that are more accessible and conducive to social activity."
          />
          <ProjectContent
            contentTitle="Overview"
            mainContent="Lumos is a interactive lighting installation designed to draw in users with its big and bold 
        lights, and provide them with the ability to customise the colours. This unique interactive experience can 
        garner large crowds, promoting social activity. Thus, Lumos can transform parks into lively, safe and 
        well-used spaces."
          />
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          />
        </div>
      </div>
    </div>
  );
}
