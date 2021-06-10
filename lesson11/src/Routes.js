import React from "react";
import { Route, Switch } from "react-router-dom";

import ROUTES from "./config/routes";
import Posts from "./pages/Posts";
import SeeMore from "./pages/SeeMore";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.ROUTE_MAIN} exact>
        <Posts />
      </Route>
      <Route path={ROUTES.ROUTE_POST}>
        <SeeMore />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
