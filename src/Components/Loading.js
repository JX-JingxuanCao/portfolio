import React from "react";

export default class Loading extends React.Component {
    render() {
        return (
            <div className="loader center">
                <i className="fa fa-cog fa-spin" />
            </div>
        );
    }
}
