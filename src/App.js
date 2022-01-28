import "./App.css";
import LogIn from "./Components/logIn/logIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../src/Pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/DB" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
