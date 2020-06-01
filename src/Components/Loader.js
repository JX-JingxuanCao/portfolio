import React from 'react';
import { MagicSpinner } from "react-spinners-kit";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);

        this.state = {
            displayMessage: false,
        };

        this.timer = setTimeout(this.enableMessage, 6000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    enableMessage() {
        this.setState({ displayMessage: true });
    }

    render() {
        const { displayMessage } = this.state;

        if (!displayMessage) {
            return null;
        }

        return <div className="loading-wrapper">
            <MagicSpinner size="150" color="#ffa45c" />
        </div>;
    }
}

export default Loader;