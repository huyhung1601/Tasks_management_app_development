import {Card, CardContent, Grid, makeStyles, Typography, InputAdornment, IconButton } from '@material-ui/core'

import React,{useState} from 'react'

import {useRouteMatch} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useHistory} from "react-router-dom";

const useStyle = makeStyles((theme)=>({
    background:{   
        background: 'linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)', 
        height: '1000px',
    },
    root:{
        marginTop: theme.spacing(20),
        '& .MuiCardContent-root':{
            padding: theme.spacing(0)
        },
        '& .MuiFormControl-root':{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            minWidth: '80%'
        }
    },
    header:{
        minWidth: '100%',
        height: '40px',
        background: 'linear-gradient(to right , #1565c0, #42a5f5)',
    },
    content:{
        textAlign: 'center',
    }
}))


const Home = () => {
    const history = useHistory()
    const {path} = useRouteMatch();
    const classes = useStyle()
    
    return (
        < div >
        <Grid container className={classes.background}>
            <Grid item sm/>
            <Grid item xs={4} className={classes.root} >
                <Card >
                    <CardContent>
                        <div className={classes.content} method='post'>
                            <div className={classes.header}/>
                                                        
                            <Router>  
                                <Switch>
                                    <Route exact path={`${path}`}>
                                        <Login login={()=>history.push('/admin')}/>
                                    </Route>
                                    <Route exact path='/register' component={Register} />   
                                </Switch>     
                        
                            </Router>                            
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm/>
        </Grid>
        </div>
    )
}

export default Home
