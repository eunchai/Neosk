import React from "react";
import {
  HashRouter,
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
import Pay from "../pages/Pay/PayOne";
import PaySecond from "../pages/Pay/PaySecond";

const RootRouter = () => {
return(
  <HashRouter>
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
        <Route exact path="/pay">
        <Pay/>
        </Route>
        <Route exact path="/payments">
        <PaySecond/>
        </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
)
};

export default RootRouter;