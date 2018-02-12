import React from "react";


export default class MultiFilterRadioOption extends React.Component {
    constructor() {
        super();
        this.state = {
            input_type: "radio",
        };
    }

    render() {
        return (
            <li><a><label><input value={this.props.value} type={this.state.input_type} onChange={this.props.handleChange} checked={this.props.checked}/> {this.props.title}</label></a></li>
        );
    }
}