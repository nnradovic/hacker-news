import React, { Component } from "react";
import "./App.css";
import { apiService } from "./apiservice/Apiservice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    apiService.fetchTopStoriesId();
  }

  render() {
    return <h2>Test</h2>;
  }
}

export default App;
