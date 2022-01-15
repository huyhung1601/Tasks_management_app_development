import React from 'react'
import { Paper, Card, Typography, makeStyles, } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'inherit',
        
    },
    pageHeader:{
        padding:theme.spacing(2),
        display:'flex',     
        marginLeft: theme.spacing(10)   
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    },
    pageButton:{
        marginLeft: theme.spacing(45),
    }
}))


const PageHeader = (props) => {
    
    const{icon, title, subTitle,button} = props
    const classes = useStyles();

    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon} >
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant='h6' component='div'>{title}</Typography>
                    <Typography variant='subtitle2' component='div'>{subTitle}</Typography>
                </div>
                <div className={classes.pageButton} >
                    {button}
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader