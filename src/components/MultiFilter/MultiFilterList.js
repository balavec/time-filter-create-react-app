import React from "react";
import MultiFilterRadioOption from "./MultiFilterRadioOption";


export default class MultiFilterList extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "multifilter-dropdown-menu",
            class_name_active: "multifilter-dropdown-menu active"
        };
    }

    render() {
        return (
            <ul className={this.props.active ? this.state.class_name_active : this.state.class_name}>
                {this.props.item.options.map((item, key) => <MultiFilterRadioOption key={key} title={item.title} value={item.value} checked={this.props.item.value === item.value ? 'checked' : ''} handleChange={this.props.handleChange} />)}
            </ul>
        );
    }
}
