import React from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

//Pages
import { Home } from './componenents/home/Home';
import { Register } from './componenents/register/Register';
//import Waitress from './componenents/waitress/Waitress';
//import Cooker from './components/cooker/Cooker';

export default function Routes() {
  return (
    <Router>
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component = { Home }>
                </Route>
                <Route path="/register" component = { Register }>
                </Route>
            </Switch>
        </BrowserRouter>
    </Router>
  );
}
