import React, { Component } from "react";
import "./App.css";
import { apiService } from "./apiservice/Apiservice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    apiService
      .fetchTopStoriesId()
      .then(topStoriesID => {
        return topStoriesID;
      })
      .then(topStoriesID => {
        return topStoriesID.map((topStoryID, i) => {
          return apiService.fetchSinlgeStory(topStoryID).then(topStory => {
            console.log(topStory);
          });
        });
      });
  }

  render() {
    return <h2> Test </h2>;
  }
}

export default App;
