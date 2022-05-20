import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Main from "../pages/Main";
import Coffee from "../pages/Coffee";
import Tea from "../pages/Tea";
import Dessert from "../pages/Dessert";

const RootRouter = () => {
return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/menu_coffee">
        <Coffee/>
      </Route>
      <Route exact path="/menu_tea">
        <Tea/>
        </Route>
      <Route exact path="/menu_dessert">
        <Dessert/>
        </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)
};

export default RootRouter;