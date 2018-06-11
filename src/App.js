import React, { Component, Fragment } from "react";
import "./css-sass/App.css";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            {/* <Header /> */}
            <Main />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
