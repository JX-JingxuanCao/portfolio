import React from "react";
import SkillSet from "./skillSet.js";

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
          <button onClick={this.displayPG}>HO yeah baby</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThisSite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displaySoso) {
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>This is so cool</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThisSite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displayLearn) {
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>God damn it works</button>
          <button onClick={this.displayThisSite}>JUST DO IT!</button>
        </div>
      );
    }
    if (this.state.displayThisSite) {
      return (
        <div>
          <button onClick={this.displayPG}>Click Me!</button>
          <button onClick={this.displaySoso}>Click Me PLZ!</button>
          <button onClick={this.displayLearn}>DO it!</button>
          <button onClick={this.displayThisSite}>
            LOL!!MITCH U ARE A GENIUS
          </button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.displayPG}>Click Me!</button>
        <button onClick={this.displaySoso}>Click Me PLZ!</button>
        <button onClick={this.displayLearn}>DO it!</button>
        <button onClick={this.displayThisSite}>JUST DO IT!</button>
      </div>
    );
  }
}
// ReactDOM.render(<TodoApp />, document.querySelector("#app"))
