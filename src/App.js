import { Router } from "react-router";
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn/Index";
import Detail from "./pages/Detail/Index";
import "./App.css";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
    </Router>
  );
}

export default App;
