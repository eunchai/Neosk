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
      <Route exact path="/" component={Main} />
      <Route exact path="/menu_drinks" component={Drinks} />
      <Route exact path="/menu_food" component={Bread} />
      <Route exact path="/menu_merchandise" component={Merchandise} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/payments" component={PaySecond} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
)
};

export default RootRouter;