import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const StoriesRow = ({ singleTopStory }) => {
  return (
    <Fragment>
      <Link to={`/singlestory/${singleTopStory.id}`} target="_blank">
        <h1>{singleTopStory.title}</h1>
      </Link>
    </Fragment>
  );
};

export default StoriesRow;
