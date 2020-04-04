import React from "react";
import { NavLink } from "react-router-dom";

export function ButtonMain(props) {
  return (
    <NavLink to={props.linkName}>
      <button className="ButtonMain">{props.buttonText}</button>
    </NavLink>
  );
}
