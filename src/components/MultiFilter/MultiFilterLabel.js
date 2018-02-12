import React from "react";


export default class MultiFilterLabel extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "multifilter-nice-label",
        };
    }

    render() {
        return (
            <label className={this.state.class_name}>{this.props.title}</label>
        );
    }
}