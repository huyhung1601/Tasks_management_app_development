import { AppBar, Grid, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import Controls from './controls/Controls'
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root:{
        background: 'linear-gradient(to right , #1565c0, #42a5f5)',
    },
    button: {      
        backgroundColor: '#1e88e5',
        color: theme.palette.inherit,
        '&:hover': {
            backgroundColor: theme.palette.inherit,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

const Header = () => {
    const history = useHistory()
    const classes= useStyles();
    return (
        <Toolbar >
            <AppBar className={classes.root}>
                <Grid container>
                    <Grid item></Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <Controls.Button
                            className={classes.button}
                            color='42a5f5'
                            text="Log out"  
                            onClick={()=>history.push('/')}                         
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Toolbar>
    )
}

export default Header
