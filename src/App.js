import React, { Component } from 'react';
import { connect } from "react-redux"
import logo from './logo.svg';
import './App.css';
import MultiFilter from "./components/MultiFilter";
import MultiFilterLabel from "./components/MultiFilter/MultiFilterLabel";
import { fetchMultifilterPeriod } from "./actions/filterMultifilterActions";


class App extends Component {
  componentWillMount() {
      this.props.dispatch(fetchMultifilterPeriod())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div id="react-multifilter">
            <MultiFilter />
            <div className="App-labels">
              {this.props.multifilter.map((item, key) => <MultiFilterLabel key={key} title={item.title} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
    return {
        multifilter: store.filter_multifilter.multifilter
    }
})(App);
