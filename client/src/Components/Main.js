import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Task from './Task.js';
import User from './User.js';
import Users from './Users.js';
import history from './history';




const Main = () => (
  <div>
     {/* <Router history={history}> */}
    <Switch>
      <Route path='/Home' component={Home} />
      <Route path='/Task' component={Task} />
      <Route path='/User' component={Users} />
      <Route path='/Userdemo' component={User} />
      
     
    </Switch>
    {/*<Router> */}
  </div>
)

export default Main;