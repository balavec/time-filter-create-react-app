import React from "react";

import MultiFilterLabel from "./MultiFilter/MultiFilterLabel";
import MultiFilterContainer from "./MultiFilter/MultiFilterContainer";


export default class MultiFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "multifilter"
        };
    }

    render() {
        return (
            <div className={this.state.class_name}>
                <MultiFilterLabel title={this.props.item.title} />
                <MultiFilterContainer index={this.props.index} item={this.props.item} />
            </div>
        );
    }
}
