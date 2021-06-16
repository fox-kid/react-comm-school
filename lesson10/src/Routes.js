import { Switch, Route } from "react-router";

import ROUTES from "./config/routes";
import Main from "./pages/Main";
import Post from "./pages/Post";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.ROUTE_MAIN} exact>
        <Main />
      </Route>
      <Route path={ROUTES.ROUTE_POST}>
        <Post />
      </Route>
      <Route>
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
