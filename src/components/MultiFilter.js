import React from "react";
import { connect } from "react-redux"

import MultiFilterLabel from "./MultiFilter/MultiFilterLabel";
import MultiFilterContainer from "./MultiFilter/MultiFilterContainer";

import { fetchFilterTimePeriod } from "../actions/filterTimePeriodActions";


class MultiFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            class_name: "multifilter"
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchFilterTimePeriod())
    }

    render() {
        return (
            <div className={this.state.class_name}>
                <MultiFilterLabel title={this.props.time_period.title} />
                <MultiFilterContainer />
            </div>
        );
    }
}

export default connect((store) => {
    return {
        time_period: store.filter_time_period.time_period
    }
})(MultiFilter);
