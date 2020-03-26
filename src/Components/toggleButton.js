import React from "react";
import SkillSet from "./skillSet.js";

export default class ToogleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPG: false
    };
    this.state = {
      displaySoso: false
    };
    this.state = {
      displayLearn: false
    };
    this.state = {
      displayThissite: false
    };
  }

  displayPG = () => {
    this.setState({
      displayPG: true,
      displaySoso: false,
      displayLearn: false,
      displayThissite: false
    });
  };

  displaySoso = () => {
    this.setState({
      displayPG: false,
      displaySoso: true,
      displayLearn: false,
      displayThissite: false
    });
  };

  displayLearn = () => {
    this.setState({
      displayPG: false,
      displaySoso: false,
      displayLearn: true,
      displayThissite: false
    });
  };

  displayThissite = () => {
    this.setState({
      displayPG: false,
      displaySoso: false,
      displayLearn: false,
      displayThissite: true
    });
  };

  render() {
    if (this.state.displayPG) {
      console.log("button clicked!");
      return (
        <div>
          <button onClick={this.displayPG}>HO yeah baby</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThissite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displaySoso) {
      console.log("button clicked!");
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>This is so cool</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThissite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displayLearn) {
      console.log("button clicked!");
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>God damn it works</button>
          <button onClick={this.displayThissite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displayThissite) {
      console.log("button clicked!");
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThissite}>
            LOL!!MITCH U ARE A GENIUS
          </button>
        </div>
      );
    }
    console.log("button not clicked!");
    return (
      <div>
        <button onClick={this.displayPG}>Click Me!</button>
        <button onClick={this.displaySoso}>Click Me PLZ!</button>
        <button onClick={this.displayLearn}>DO it!</button>
        <button onClick={this.displayThissite}>JUST DO IT!</button>
      </div>
    );
  }
}
// ReactDOM.render(<TodoApp />, document.querySelector("#app"))
