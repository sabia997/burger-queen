import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './componenents/home/Home';
import Register from './componenents/register/Register';
import Waitress from './componenents/waitress/Waitress';
import Cooker from './componenents/cooker/Cooker';

export default class Routes extends React.Component {
    render(){
      return (
        <Switch>
          <Router>
            <Route exact path='/' component={Home} />
          </Router>
          <Router>
            <Route exact path='/register' component={Register} />
          </Router>
        </Switch>
      ) 
    }
  }
  