import React from "react";

const CommentsList = ({ comment }) => {
  console.log("====================================");
  console.log(comment.text);
  console.log("====================================");
  return (
    <div>
      <h1>{comment.text}</h1> <br />
    </div>
  );
};

export default CommentsList;
