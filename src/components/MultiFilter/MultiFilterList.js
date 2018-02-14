import React from "react";
import MultiFilterOption from "./MultiFilterOption";


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
                {this.props.item.options.map((item, key) => <MultiFilterOption key={key} title={item.title} value={item.value} multiselect={this.props.item.multiselect} checked={this.props.item.value === item.value ? 'checked' : ''} handleChange={this.props.handleChange} />)}
            </ul>
        );
    }
}
