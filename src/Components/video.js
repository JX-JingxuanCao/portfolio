import React from "react";
import Loading from "../Components/Loading.js";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
    };
  }

  componentDidMount() {
    const videoContent = document.getElementById("videoContent");
    videoContent.addEventListener("canplaythrough", this.doneLoading);
  }

  doneLoading = () => {
    console.log("done loading!");
    this.setState({
      Loading: false,
    });
  };

  render() {
    const contentStyles = this.state.loading ? "none" : "block";
    const loadingStyles = this.state.loading ? "auto" : "none";

    return (
      <>
        <div style={{ display: contentStyles }}>
          <video
            id="videoContent"
            width={this.props.videoWidth}
            wq
            onCanPlayThrough={this.doneLoading}
            autoPlay
            loop
            muted
          >
            <source src={this.props.videoName} type="video/mp4" />
          </video>
        </div>

        <div style={{ display: loadingStyles }}>
          <Loading />
        </div>
      </>
    );
  }
}
