import React from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar(props) {
  return (
    <div>
      <Link
        className={props.linkStyle}
        activeClass={true}
        to={props.scrollTarget}
        spy={true}
        smooth={true}
        offset={-70}
        delay={0}
        duration={1000}
      ></Link>
    </div>
  );
}

export default NavBar;
