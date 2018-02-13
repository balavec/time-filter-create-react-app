import React from "react";


export default class SmartLabel extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "smart-nice-label",
        };
    }

    render() {
        return (
            <label className={this.state.class_name}>{this.props.item.title}, {this.props.item.value}</label>
        );
    }
}
