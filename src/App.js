import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux'
import { history } from "./redux/helpers/history";

import store from './redux/store'
import './App.css';


import Login from "./components/Login";
// import Register from "./components/Register";
import Profile from "./components/Profile";




function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
    <div className="App">
    <Switch>
   <Route exact path="/login" component={Login}/>
   <Route exact path="/profile" component={Profile}/>
   </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
