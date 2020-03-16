import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/lumos">lumos</Link>
      </li>
    </ul>
  );
}

export default NavBar;
