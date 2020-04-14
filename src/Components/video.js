import React from "react";
import Loading from "../Components/Loading.js";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
    };
  }

  Loading = () => {
    this.setState({
      Loading: true
    })
  }


  render() {
    if (this.state.Loading) {
      return (
        <Loading />
      );
    }
    return (
      <video width={this.props.videoWidth} onCanPlayThrough={this.Loading} autoPlay loop muted>
        <source src={this.props.videoName} type="video/mp4" />
      </video>
    );
  }
};