import React, { Component } from "react";
import { Link } from "react-scroll";

const scrollLinks = [
  <button>
    <Link
      activeClass={true}
      to="Work"
      spy={true}
      offset={-70}
      smooth={true}
      delay={0}
      duration={1000}
    >
      <p>Work</p>
    </Link>
  </button>,

  <button>
    <Link
      activeClass={true}
      to="Contact"
      spy={true}
      offset={-70}
      smooth={true}
      delay={0}
      duration={1000}
    >
      <p>Contact</p>
    </Link>
  </button>,

  <button>
    <Link
      activeClass={true}
      to="Profile"
      spy={true}
      offset={-70}
      smooth={true}
      delay={0}
      duration={1000}
    >
      <p>Profile</p>
    </Link>
  </button>
];

const hashLinks = [
  <a href="/#Work">Work</a>,
  <a href="/#Contact">Contact</a>,
  <a href="/#Profile">Work</a>
];

function NavBar(props) {
  return (
    // working navbar
    <header className="mainNav">
      <nav className="navBar">
        <div className="navLogo">
          <a href="/#Work">Jingxuan Cao</a>
        </div>
        <div className="spacer"></div>
        <div className="navName">
          <ul>
            {props.type === "homepage" &&
              scrollLinks.map(linkElement => {
                return <li>{linkElement}</li>;
              })}
            {props.type === "projectPage" &&
              hashLinks.map(linkElement => {
                return <li>{linkElement}</li>;
              })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
