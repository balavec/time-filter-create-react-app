import React from "react";


export default class MultiFilterOption extends React.Component {
    constructor() {
        super();

        this.state = {
            input_type: "radio",
        };
    }

    componentDidMount() {
        if(this.props.multiselect) {
            var input_type = "checkbox";
            this.setState({
                input_type: input_type
            });
        }
    }

    render() {
        return (
            <li><a><label><input value={this.props.value} type={this.state.input_type} onChange={this.props.handleChange} checked={this.props.checked} /> {this.props.title}</label></a></li>
        );
    }
}
