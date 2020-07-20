import  React from 'react';
import './App.css';
import Home from "./componenents/home/Home";
import Register from './componenents/register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
          
        </Switch>
      </Router> 
    ) 
  }
}
