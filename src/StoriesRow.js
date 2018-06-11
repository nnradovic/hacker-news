import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css-sass/Storiesrow.css";

const StoriesRow = ({ singleTopStory }) => {
  return (
    <Fragment>
      <div className="singleStory">
        <Link to={`/singlestory/${singleTopStory.id}`} target="_blank">
          <h5>{singleTopStory.title}</h5>
        </Link>
        <div className="asd">
          <p>
            Author {singleTopStory.author}
            <span>Score: {singleTopStory.score}</span>
            <span>Number of comments: {singleTopStory.descendants}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default StoriesRow;
