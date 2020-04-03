import React, { Component } from "react";
import { Link } from "react-scroll";

const scrollLinks = [
  <button>
    <Link
      activeClass={"active"}
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
      activeClass={"active"}
      to="Profile"
      spy={true}
      offset={-70}
      smooth={true}
      delay={0}
      duration={1000}
    >
      <p>Profile</p>
    </Link>
  </button>,

  <button>
    <Link
      activeClass={"active"}
      to="Contact"
      spy={true}
      offset={-70}
      smooth={true}
      delay={0}
      duration={1000}
    >
      <p>Contact</p>
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
    <a href="/#Profile">
      <p>Profile</p>
    </a>
  </button>,

  <button>
    <a href="/#Contact">
      <p>Contact</p>
    </a>
  </button>
];

function NavBar(props) {
  return (
    // working navbar
    <header className="mainNav">
      <nav className="navBar">
        <div className="navLogo">
          <a href="/">Jingxuan Cao</a>
        </div>
        <div className="spacer"></div>
        <div className="navName">
          <ul>
            {props.type === "homepage" &&
              scrollLinks.map((linkElement, i) => {
                return <li key={i}>{linkElement}</li>;
              })}
            {props.type === "projectPage" &&
              hashLinks.map((linkElement, i) => {
                return <li key={i}>{linkElement}</li>;
              })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
