import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
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
                <Link to="/lumos">
                  <p>Work</p>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/lumos">
                  <p>Profile</p>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/lumos">
                  <p>Contact</p>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
