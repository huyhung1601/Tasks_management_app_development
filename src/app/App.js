import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from '../pages/Admin';
import Home from '../pages/home/Home';


function App() {
  return (
      <Router>  
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/admin' component={Admin}/>
          </Switch>     
      
      </Router>
  );
}

export default App;