import React, { Component } from 'react';
import { connect } from "react-redux"
import logo from './logo.svg';
import './App.css';
import MultiFilter from "./components/MultiFilter";
import SmartLabel from "./components/SmartLabel";
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
            <div className="row">
            {this.props.multifilter.map((item, key) => <div key={key} className="col-md-6"><MultiFilter key={key} index={key} item={item} /><br /></div>)}
            </div>
            <div className="App-labels">
            {this.props.multifilter.map((item, key) => <SmartLabel key={key} index={key} item={item} />)}
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
