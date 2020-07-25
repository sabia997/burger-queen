import React from "react";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Login from './componenents/home/login';
import SignUp from './componenents/signUp/SignUp';
import Waitress from './componenents/serviceTeam/Waitress';
import Cooker from './componenents/kitchen/cooker';
import PrivateRoute from './privateRouter';
import { AuthProvider } from './componenents/home/auth';

const App = () => {
    return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/waitress" component = { Waitress } />
            <PrivateRoute exact path="/kitchen" component = { Cooker } />
            <Route exact path="/" component = { Login } />
            <Route exact path="/home" component = { Login } />
            <Route exact path="/signup" component = { SignUp } />
          </div>
        </Router>
      </AuthProvider>
    );
  };
  
export default App;