import React from "react";


export default class MultiFilterButton extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "btn btn-default multifilter-btn",
            class_name_active: "btn btn-default multifilter-btn-on",
            class_name_span: "multifilter-button-label",
            class_name_caret: "caret",
            button_type: "button",
        };
    };

    render() {
        return (
            <button className={this.props.active ? this.state.class_name_active : this.state.class_name} type={this.state.button_type} onClick={this.props.handleButton}>
                <span className={this.state.class_name_span}>{this.props.title}</span>
                <span className={this.state.class_name_caret}></span>
            </button>
        );
    }
}
