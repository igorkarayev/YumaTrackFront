import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home/index';
import Navbar from './components/nav/nav-bar';
import Analytics from './components/analytics/index';
import Settings from './components/settings/index';
import Tasks from './components/tasks/index';



const App = (): any =>{
 return <div>

  <h1>yumatime</h1>

  <BrowserRouter>
   <Navbar/>
   <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/tasks' component={Tasks}/>
    <Route exact path='/analytics' component={Analytics}/>
    <Route path='/settings' component={Settings}/>
   </Switch>
  </BrowserRouter>

   </div>
}

export default App