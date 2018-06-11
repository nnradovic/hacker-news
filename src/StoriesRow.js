import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const StoriesRow = ({ singleTopStory }) => {
  return (
    <Fragment>
      <Link to={`/singlestory/${singleTopStory.id}`} target="_blank">
        <h5>{singleTopStory.title}</h5>
      </Link>
      <p>Author {singleTopStory.author}</p>
      <p>Score: {singleTopStory.score}</p>
      <p>Number of comments: {singleTopStory.descendants}</p>
    </Fragment>
  );
};

export default StoriesRow;
