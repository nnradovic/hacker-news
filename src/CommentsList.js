import React from "react";

const CommentsList = ({ comment }) => {
  console.log("====================================");
  console.log(comment.text);
  console.log("====================================");
  return (
    <div>
      <p>{comment.text}</p> <br />
    </div>
  );
};

export default CommentsList;
