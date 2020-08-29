import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';

const App = (isLogged) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/home' component={isLogged ? Home : Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>

  </BrowserRouter>
);

export default App;
