import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Login from './componenents/home/login';
import SignUp from './componenents/signUp/SignUp';
import Waitress from './componenents/serviceTeam/waitress';
import Cooker from './componenents/kitchen/cooker';
import PrivateRoute from './privateRouter';
import { AuthProvider } from './componenents/home/auth';
import { Context } from './componenents/serviceTeam/options/orderContext';

const App = () => {
    return (
      <AuthProvider>
        <Router>
          <Context>
              <React.Fragment>
                  <PrivateRoute exact path="/waitress" component = { Waitress } />
                  <PrivateRoute path="/kitchen" component = { Cooker } />
                <Route exact path="/" component = { Login } />
                <Route exact path="/home" component = { Login } />
                <Route exact path="/signup" component = { SignUp } />
              </React.Fragment>
          </Context>
        </Router>
      </AuthProvider>
    );
  };
  
export default App;