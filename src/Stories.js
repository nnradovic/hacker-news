import React from "react";

const Stories = ({ singleTopStory }) => {
  console.log(singleTopStory);

  return <h1>{singleTopStory.title}</h1>;
};

export default Stories;
