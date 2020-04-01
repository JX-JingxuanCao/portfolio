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
  <button>
    <a href="/#Work">
      <p>Work</p>
    </a>
  </button>,
  <button>
    <a href="/#Contact">
      <p>Contact</p>
    </a>
  </button>,
  <button>
    <a href="/#Profile">
      <p>Profile</p>
    </a>
  </button>
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
