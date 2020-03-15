import React from "react";

export function ButtonMain(props) {
  return (
    <button className="ButtonMain" onClick>
      {props.buttonText}
    </button>
  );
}
