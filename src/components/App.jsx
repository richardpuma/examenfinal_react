import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Protected from './Routes/Protected';
import Customer from "./Pages/Customer";
import ListCustomer from './Pages/ListCustomer';
import BlockAcount from './Pages/BlockAcount';
import ListAcount from './Pages/ListAcounts';
import Transaction from './Pages/Transaction';
import Deposit from './Pages/Deposit';
import Withdrawal from './Pages/Withdrawal';
import Register from './Pages/Register';
import TransferMoney from './Pages/TransferMoney';
import MyTransaction from './Pages/MyTransaction';
import Login from './Pages/Login';
import Public from './Routes/Public';


import Page404 from './Pages/Page404';
import Header from './Organisms/Header';

const App=()=>(
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />      

      <Public path="/customer" exact component={Customer} />
      <Public path="/listCustomer" component={ListCustomer} />
      <Public path="/blockAcount" component={BlockAcount} />
      <Public path="/listAcount" component={ListAcount} />
      <Public path="/transaction" component={Transaction} />
      
      <Public path="/deposit" exact component={Deposit} />
      <Public path="/withdrawal" exact component={Withdrawal} />

      <Public path="/register" exact component={Register} />
      <Public path="/transferMoney" exact component={TransferMoney} />
      <Public path="/myTransaction" component={MyTransaction} />

      <Public path="/login" exact component={Login} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App;
