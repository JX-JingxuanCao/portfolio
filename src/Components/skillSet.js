import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function SkillSet(props) {
  return (
    <div>
      <div className="skillBox">
        <ScrollAnimation
          animateIn="slideInUp">
          <h2 className="skillSet">WOOW... you came all the way down here just to see me?</h2>
        </ScrollAnimation>
      </div>
      {/* <div className="skillBox">
        <ScrollAnimation duration={8}
          animateIn='hinge'
          initiallyVisible={true}>
          <h2 className="skillSet">Wait a minute...something is wrong...</h2>
        </ScrollAnimation>
      </div> */}
    </div>
  );
}

