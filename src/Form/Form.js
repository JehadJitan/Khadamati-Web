import React from "react";
import { useState } from "react/cjs/react.development";
import FormSignup from "./FormSignup";
import "./Form.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img src="img/img-2.png" alt="logo" className="form-img"></img>
        </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <Dashboard />}
        <Router>
          <Switch>
            <Route path="/DB" exact component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Form;
