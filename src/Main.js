import React from "react";
import { Route } from "react-router-dom";
import Stories from "./Stories";
import Story from "./entites/Story";
import StorySingle from "./StorySingle";

const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Stories} />
      <Route path="/singlestory/:id" component={StorySingle} />
    </div>
  );
};

export default Main;
