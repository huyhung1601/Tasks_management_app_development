import React from 'react'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from '../pages/Admin';

function App() {
  return (
      <Router>  
          <Switch>
            <Route exact path='/' component={Admin}/>
            <Route path='/admin' component={Admin}/>
          </Switch>     
      
      </Router>
  );
}

export default App;