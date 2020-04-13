import React from "react";
import ReactLoading from "react-loading";


export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => this.setState({ done: true }));
        }, 1200);
    }

    render() {
        return (
            <div>
                {!this.state.done ? (
                    <ReactLoading type={"bars"} color={"white"} />
                ) : (
                        <h1>hello world</h1>
                    )}
            </div>
        );
    }
}