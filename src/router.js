import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './app';
import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import EnsureLoggedInContainer from './components/ensure-logged-in-container';
import Wallet from './components/Wallet';
import Oracle from './components/Oracle';
import Account from './components/Account';
import SendWizard from './components/Send';
import store from './redux/store';

const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>

      <Route component={EnsureLoggedInContainer}>
        <Route component={MainLayout}>
          <IndexRoute component={Dashboard}/>
          <Route path="dashboard" component={Dashboard}/>
          <IndexRoute component={Oracle}/>
          <Route path="oracle" component={Oracle}/>
          <Route path="wallet">
            <IndexRoute component={Wallet}/>
            <Route path="account/:address/send" component={SendWizard} />
            <Route path="account/:address" component={Account} />
            </Route>
        </Route>
      </Route>
    </Route>
  </Router>
);

export default router;
