import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Login from './componenents/home/login';
import SignUp from './componenents/signUp/SignUp';
import Waitress from './componenents/serviceTeam/waitress';
import OngoingOrdersCooker from './componenents/orders/ongoingCooker';
import OngoingOrdersWaitress from './componenents/orders/ongoingWaitress';
import HistoryOrdersCooker from './componenents/history/historyCooker';
import HistoryOrdersWaitress from './componenents/history/historyWaitress';
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
            <PrivateRoute exact path="/waitress" component={Waitress} />
            <PrivateRoute path="/kitchen" component={Cooker} />
            <PrivateRoute path="/ordersCooker" componenent={OngoingOrdersCooker} />
            <PrivateRoute path="/historyCooker" componenent={HistoryOrdersCooker} />
            <PrivateRoute path="/ordersWaitress" componenent={OngoingOrdersWaitress} />
            <PrivateRoute path="/historyWaitress" componenent={HistoryOrdersWaitress} />
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </React.Fragment>
        </Context>
      </Router>
    </AuthProvider>
  );
};

export default App;