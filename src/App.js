import { Route, Router, Switch } from "react-router";
import {createBrowserHistory} from 'history'
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";

export const history = createBrowserHistory();
function App() {
  return (
        <Router history={history}>
          <Switch>
            <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
          </Switch>
        </Router>
  );
}

export default App;
