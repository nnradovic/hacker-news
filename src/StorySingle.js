import React, { Component } from "react";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";

class StorySingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: null
    };
  }
  componentDidMount() {
    return apiService
      .fetchSinlgeStory(this.props.match.params.id)
      .then(topStory => {
        return new Story(topStory);
      })
      .then(topStory => {
        this.setState({
          story: topStory
        });
      });

    // return apiService
    //   .fetchComments(this.props.match.params.id)
    //   .then(topStory => {
    //     return new Story(topStory);
    //   })
    //   .then(topStory => {
    //     this.setState({
    //       comments: topStory
    //     });
    //   });
  }
  render() {
    if (this.state.story === null) {
      return <p>Loading...</p>;
    }

    console.log(this.state.story);

    return <h1>{this.state.story.author}</h1>;
  }
}

export default StorySingle;
