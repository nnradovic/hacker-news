import React, { Component, Fragment } from "react";
import "./App.css";
import { apiService } from "./apiservice/Apiservice";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
