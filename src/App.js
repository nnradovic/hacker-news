import React, { Component } from "react";
import "./App.css";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";

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
          return apiService
            .fetchSinlgeStory(topStoryID)
            .then(topStory => {
              return new Story(topStory);
            })
            .then(topStory => {
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
