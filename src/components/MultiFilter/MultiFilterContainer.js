import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux"

import MultiFilterButton from "./MultiFilterButton";
import MultiFilterList from "./MultiFilterList";

import { setFilterTimePeriodValue } from "../../actions/filterTimePeriodActions";

import _ from 'lodash'


class MultiFilterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false,
            class_name: "multifilter-dropdown",
            button_title: ''
        };
    }

    handleButtonTitle() {
        const currentValue = parseInt(this.props.time_period.value, 10);
        var filtered = _.filter(this.props.time_period.options, function(item) {
            return item.value === currentValue
        });

        const title = filtered[0].title;
        this.setState({
            button_title: title
        });
    }

    handleButton(event) {
        event.preventDefault();
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        });
    };

    handleChange(event) {
        const currentState = this.state.active;
        const currentValue = parseInt(event.target.value, 10);
        this.setState({
            active: !currentState,
        });

        this.props.dispatch(setFilterTimePeriodValue(currentValue));

        var filtered = _.filter(this.props.time_period.options, function(item) {
            return item.value === currentValue
        });

        const title = filtered[0].title;
        this.setState({
            button_title: title
        });
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
        this.handleButtonTitle();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                active : false
            });
        }
    }

    render() {
        return (
            <div className={this.state.class_name}>
                <MultiFilterButton active={this.state.active} title={this.state.button_title} handleButton={this.handleButton.bind(this)} />
                <MultiFilterList active={this.state.active} options={this.props.time_period} handleChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}


export default connect((store) => {
    return {
        time_period: store.filter_time_period.time_period
    }
})(MultiFilterContainer);
