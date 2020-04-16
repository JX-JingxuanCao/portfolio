import React from "react";
import Loading from "../Components/Loading.js";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
    };
  }

  doneLoading = () => {
    console.log("done loading called!");
    this.setState({
      Loading: false,
    });
  };

  render() {
    const contentStyles = this.state.loading ? "none" : "block";
    const loadingStyles = this.state.loading ? "block" : "none";

    return (
      <>
        <video
          width={this.props.videoWidth}
          onCanPlayThrough={this.doneLoading}
          style={{ display: contentStyles }}
          autoPlay
          loop
          muted
        >
          <source src={this.props.videoName} type="video/mp4" />
        </video>

        <div style={{ display: loadingStyles }}>
          <Loading />
        </div>
      </>
    );
  }
}
