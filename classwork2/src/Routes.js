import React from "react";
import { Route, Switch } from "react-router-dom";
import Names from "./Names";
import SeeMore from "./SeeMore";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Names />
      </Route>
      <Route path="/user/:id">
        <SeeMore />
      </Route>
      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
