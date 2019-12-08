import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Protected from './Routes/Protected';
import Customer from "./Pages/Customer";
import ListCustomer from './Pages/ListCustomer';
import Transaction from './Pages/Transaction';
import Login from './Pages/Login';
import Public from './Routes/Public';
import Register from './Pages/Register';
import ListAcount from './Pages/ListAcounts';
import Page404 from './Pages/Page404';
import Header from './Organisms/Header';

const App=()=>(
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />      

      <Public path="/login" exact component={Login} />
      <Public path="/register" exact component={Register} />
      <Public path="/customer" exact component={Customer} />
      <Public path="/listCustomer" component={ListCustomer} />
      <Public path="/listAcount" component={ListAcount} />
      <Public path="/transaction" component={Transaction} />


      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App;
