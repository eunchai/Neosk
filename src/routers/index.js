import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Main from "../pages/Main";
import Drinks from "../pages/Drinks";
import Bread from "../pages/Bread";
import Merchandise from "../pages/Merchandise";
import Detail from "../pages/Detail";
import Cart from "../pages/CartPage";
import Order from "../pages/Order";

const RootRouter = () => {
return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/menu_drinks">
        <Drinks/>
      </Route>
      <Route exact path="/menu_food">
        <Bread/>
        </Route>
      <Route exact path="/menu_merchandise">
        <Merchandise/>
        </Route>
        <Route exact path="/detail">
        <Detail/>
        </Route>
        <Route exact path="/cart">
        <Cart/>
        </Route>
        <Route exact path="/order">
        <Order/>
        </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)
};

export default RootRouter;