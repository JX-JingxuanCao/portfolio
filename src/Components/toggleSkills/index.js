import React from "react";
import SkillSet from "../skillSet";

import GameDev from "./GameDev";
import ThreeDModelling from "./ThreeDModelling";
import DesignSkills from "./DesignSkills";

export default class ToogleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDesignSkills: true,
      displayGameDev: false,
      displayThreeDModelling: false,
      displayWeb: false
    };
  }

  displayDesignSkills = () => {
    this.setState({
      displayDesignSkills: true,
      displayGameDev: false,
      displayThreeDModelling: false,
      displayWeb: false
    });
  };

  displayGameDev = () => {
    this.setState({
      displayDesignSkills: false,
      displayGameDev: true,
      displayThreeDModelling: false,
      displayWeb: false
    });
  };

  displayThreeDModelling = () => {
    this.setState({
      displayDesignSkills: false,
      displayGameDev: false,
      displayThreeDModelling: true,
      displayWeb: false
    });
  };

  displayWeb = () => {
    this.setState({ ...this.state, displayWeb: true });
  };

  render() {
    if (this.state.displayDesignSkills) {
      return (
        <div>
          <button onClick={this.displayGameDev}>Game Dev</button>
          <button onClick={this.displayThreeDModelling}>3D Modelling</button>
          <button onClick={this.displayGameDev}>DesignSkills</button>
          <DesignSkills />
        </div>
      );
    }
    if (this.state.displayGameDev) {
      return (
        <div>
          <button onClick={this.displayGameDev}>Game Dev</button>
          <button onClick={this.displayThreeDModelling}>3D Modelling</button>
          <button onClick={this.displayGameDev}>DesignSkills</button>
          <GameDev />
        </div>
      );
    }
    if (this.state.displayThreeDModelling) {
      return (
        <div>
          <button onClick={this.displayGameDev}>Game Dev</button>
          <button onClick={this.displayThreeDModelling}>3D Modelling</button>
          <button onClick={this.displayGameDev}>DesignSkills</button>
          <ThreeDModelling />
        </div>
      );
    }
    if (this.state.displayWeb) {
      return <div>{/*  Web  */}</div>;
    }
  }
}
// ReactDOM.render(<TodoApp />, document.querySelector("#app"))
