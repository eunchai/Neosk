import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import Main from "../pages/Main";
import Coffee from "../pages/Coffee";
import Tea from "../pages/Tea";
import Dessert from "../pages/Dessert";
//import Header from "../containers/Header/Header";

const RootRouter = () => {
return(
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/menu_coffee" exact component={Coffee} />
      <Route path="/menu_tea" exact component={Tea} />
      <Route path="/menu_dessert" exact component={Dessert} />
    </Switch>
  </Router>
)
};

export default RootRouter;

// export default () => (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={Main} />
//         <Route path="/search" exact component={Search} />
//         <Redirect from="*" to="/" />
//       </Switch>
//     </Router>
//   );
  