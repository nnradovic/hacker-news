import React, { Component, Fragment } from "react";
import "./App.css";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";
import Stories from "./Stories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStory: []
    };
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
              this.setState({
                topStory: [...this.state.topStory, topStory]
              });
            });
        });
      });
  }

  render() {
    if (this.state.topStory === null) {
      return <p>Loading...</p>;
    }
    console.log(this.state.topStory);
    return (
      <Fragment>
        {this.state.topStory.map((singleTopStory, i) => {
          return <Stories key={i} singleTopStory={singleTopStory} />;
        })}
      </Fragment>
    );
  }
}

export default App;
