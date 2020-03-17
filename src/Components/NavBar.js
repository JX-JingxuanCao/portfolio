import React from "react";
// import { Link } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

function NavBar() {
  return (
    // working navbar
    <header className="mainNav">
      <nav className="navBar">
        <div></div>
        <div className="navLogo">
          <a href="/">Jingxuan Cao</a>
        </div>
        <div className="spacer"></div>
        <div className="navName">
          <ul>
            <li>
              <button>
                {/* <Link to="/lumos"> */}
                <p>Work</p>
                {/* </Link> */}
              </button>
            </li>
            <li>
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
                {/* <Link to="/lumos">
                  <p>Profile</p>
                </Link> */}
              </button>
            </li>
            <li>
              <button>
                {/* <Link to="/lumos"> */}
                <p>Contact</p>
                {/* </Link> */}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
