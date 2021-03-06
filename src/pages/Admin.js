import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashBoard from './dashboard/DashBoard';
import NewTask from './newTask/NewTask'
import {useRouteMatch} from 'react-router-dom'
import Header from '../components/Header';

import {GlobalProvider} from '../context/GlobalState'

/**
 * Admin Layout
 */
const Admin = () => {
    const { path } = useRouteMatch();
    return (
        <GlobalProvider>  
            <Header/>            
            <Router>  
                <Switch>
                <Route exact path={`${path}`} component={DashBoard}/>
                <Route exact path={`${path}/heloo`}>
                    Hello
                </Route>
                            
                </Switch>     
            
            </Router>
        </GlobalProvider>
    );
}

export default Admin