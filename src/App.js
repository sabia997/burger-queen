import React from "react";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Login from './componenents/home/main/login';
import SignUp from './componenents/register/main/form';
import Waitress from './componenents/waitress/Waitress';
//import Cooker from './components/cooker/Cooker';
import PrivateRoute from './privateRouter';
import { AuthProvider } from "./componenents/home/auth";


const App = () => {
    return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/waitress" component ={ Waitress } />
            <Route exact path="/" component = { Login } />
            <Route exact path="/home" component = { Login } />
            <Route exact path="/signup" component = { SignUp } />
          </div>
        </Router>
      </AuthProvider>
    );
  };
  
export default App;