import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { config } from "../config";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: ""
    };
  }
  componentDidMount() {
    const me = this;
    fetch(config.url + "rest/test/123", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: ""
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        me.setState({ stateData: data });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        State Data from rest : {this.state.stateData}
        <hr />
        Store Data : {this.props.storeData}
        <hr />
        <button
          className="btn btn-primary"
          onClick={_ =>
            this.props.changeStoreData("Example Changed Store Data")
          }>
          Change storeData
        </button>
      </div>
    );
  }
}
export default Example;
