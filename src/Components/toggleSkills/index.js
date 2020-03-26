import React from "react";
import SkillSet from "../skillSet";

import GameDev from "./GameDev";
import ThreeDModelling from "./ThreeDModelling";
import DesignSkills from "./DesignSkills";

export default class ToogleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPG: false,
      displaySoso: false,
      displayLearn: false,
      displayThisSite: false
    };
  }

  displayPG = () => {
    this.setState({ ...this.state, displayThisSite: false });
  };

  displaySoso = () => {
    this.setState({ ...this.state, displayThisSite: false });
  };

  displayLearn = () => {
    this.setState({ ...this.state, displayThisSite: false });
  };

  displayThisSite = () => {
    this.setState({ ...this.state, displayThisSite: true });
  };

  render() {
    if (this.state.displayPG) {
      return (
        <div>
          <DesignSkills />
        </div>
      );
    }
    if (this.state.displaySoso) {
      return (
        <div>
          <GameDev />
        </div>
      );
    }
    if (this.state.displayLearn) {
      return (
        <div>
          <ThreeDModelling />
        </div>
      );
    }
    if (this.state.displayThisSite) {
      return <div>{/*  Web  */}</div>;
    }
    return <div></div>;
  }
}
// ReactDOM.render(<TodoApp />, document.querySelector("#app"))
