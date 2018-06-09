import React, { Component, Fragment } from "react";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";
import Comments from "./entites/Comments";

class StorySingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: null,
      comments: null
    };
  }
  componentDidMount() {
    apiService
      .fetchSinlgeStory(this.props.match.params.id)
      .then(topStory => {
        return new Story(topStory);
      })
      .then(topStory => {
        this.setState({
          story: topStory
        });
      })
      .then(topStory => {
        if (this.state.story !== null) {
          apiService
            .fetchComments(this.state.story.kids[0])
            .then(comments => {
              return new Comments(comments);
            })
            .then(comments => {
              this.setState({
                comments: comments
              });
            });
        }
      });
  }
  render() {
    if (this.state.story === null && this.state.comments === null) {
      return <p> Loading... </p>;
    }

    console.log(this.state.comments);

    return (
      <Fragment>
        <h1> {this.state.story.author} </h1>
        {/* <p>{this.state.comments.text}</p> */}
      </Fragment>
    );
  }
}

export default StorySingle;
