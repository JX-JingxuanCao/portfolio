import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export function ButtonMain(props) {
  return (
    <BrowserRouter>
      <button className="ButtonMain" onClick>
        {props.buttonText}
      </button>
    </BrowserRouter>
  );
}
