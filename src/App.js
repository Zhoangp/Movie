import { Router } from "react-router";
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn/Index";
import SignUp from "./pages/SignUp/Index"
import Detail from "./pages/Detail/Index";
import ListOfSeats from "./pages/ListOfSeats/Index"
import "./App.scss";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
        <Switch>
          <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
          <HomeTemplate path="/detail/:id" Component={Detail}></HomeTemplate>
          <HomeTemplate path="/booking/:id" Component={ListOfSeats}></HomeTemplate>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
    </Router>
  );
}

export default App;
