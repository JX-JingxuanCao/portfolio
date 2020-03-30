import React from "react";
import TopSkill from "./TopSkill";
import HadfunSkill from "./HadfunSkill";
import LearningSkill from "./LearningSkill";
import WebDevSkill from "./WebDevSkill";

export default class ToogleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTopSkill: false,
      displayHadfunSkill: false,
      displayLearningSkill: false,
      displayWebDevSkill: false
    };
  }

  displayTopSkill = () => {
    this.setState({
      displayTopSkill: true,
      displayHadfunSkill: false,
      displayLearningSkill: false,
      displayWebDevSkill: false
    });
  };

  displayHadfunSkill = () => {
    this.setState({
      displayTopSkill: false,
      displayHadfunSkill: true,
      displayLearningSkill: false,
      displayWebDevSkill: false
    });
  };

  displayLearningSkill = () => {
    this.setState({
      displayTopSkill: false,
      displayHadfunSkill: false,
      displayLearningSkill: true,
      displayWebDevSkill: false
    });
  };

  displayWebDevSkill = () => {
    this.setState({
      displayTopSkill: false,
      displayHadfunSkill: false,
      displayLearningSkill: false,
      displayWebDevSkill: true
    });
  };

  render() {
    if (this.state.displayTopSkill) {
      return (
        <div className="profile-wrapper">
          <div className="skill-wrapper">
            <button className="offset-first" onClick={this.displayTopSkill}>
              Pretty comfortable with them
            </button>
            <button className="offset-second" onClick={this.displayHadfunSkill}>
              Had some fun with them
            </button>
            <button
              className="offset-third"
              onClick={this.displayLearningSkill}
            >
              Interested in learning
            </button>
            <button className="offset-last" onClick={this.displayWebDevSkill}>
              This Site is made...
            </button>
          </div>
          <TopSkill />
        </div>
      );
    }
    if (this.state.displayHadfunSkill) {
      return (
        <div className="profile-wrapper">
          <div className="skill-wrapper">
            <button className="offset-first" onClick={this.displayTopSkill}>
              Pretty comfortable with them
            </button>
            <button className="offset-second" onClick={this.displayHadfunSkill}>
              Had some fun with them
            </button>
            <button
              className="offset-third"
              onClick={this.displayLearningSkill}
            >
              Interested in learning
            </button>
            <button className="offset-last" onClick={this.displayWebDevSkill}>
              This Site is made...
            </button>
          </div>
          <HadfunSkill />
        </div>
      );
    }
    if (this.state.displayLearningSkill) {
      return (
        <div className="profile-wrapper">
          <div className="skill-wrapper">
            <button className="offset-first" onClick={this.displayTopSkill}>
              Pretty comfortable with them
            </button>
            <button className="offset-second" onClick={this.displayHadfunSkill}>
              Had some fun with them
            </button>
            <button
              className="offset-third"
              onClick={this.displayLearningSkill}
            >
              Interested in learning
            </button>
            <button className="offset-last" onClick={this.displayWebDevSkill}>
              This Site is made...
            </button>
          </div>
          <LearningSkill />
        </div>
      );
    }
    if (this.state.displayWebDevSkill) {
      return (
        <div className="profile-wrapper">
          <div className="skill-wrapper">
            <button className="offset-first" onClick={this.displayTopSkill}>
              Pretty comfortable with them
            </button>
            <button className="offset-second" onClick={this.displayHadfunSkill}>
              Had some fun with them
            </button>
            <button
              className="offset-third"
              onClick={this.displayLearningSkill}
            >
              Interested in learning
            </button>
            <button className="offset-last" onClick={this.displayWebDevSkill}>
              This Site is made...
            </button>
          </div>
          <WebDevSkill />
        </div>
      );
    }
    return (
      <div className="profile-wrapper">
        <div className="skill-wrapper">
          <button className="offset-first" onClick={this.displayTopSkill}>
            Pretty comfortable with them
          </button>
          <button className="offset-second" onClick={this.displayHadfunSkill}>
            Had some fun with them
          </button>
          <button className="offset-third" onClick={this.displayLearningSkill}>
            Interested in learning
          </button>
          <button className="offset-last" onClick={this.displayWebDevSkill}>
            This Site is made...
          </button>
        </div>
      </div>
    );
  }
}
