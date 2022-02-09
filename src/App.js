import "./App.css";
import LogIn from "./Components/logIn/logIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routing from "./Pages/Dashboard/Routing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/DB" component={Routing} />
      </Switch>
    </Router>
  );
}

export default App;
