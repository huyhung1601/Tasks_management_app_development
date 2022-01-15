import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        minWidth: 'auto',
        margin: theme.spacing(0.5),       
    }
}))
const CardItem = (props) => {
    const classes= useStyles();

    const{children, title,} = props
    return (
        <Card variant='outlined' className={classes.root} >
            <Typography variant='subtitle2' >{title}</Typography>
            <CardContent>
            {children}
            </CardContent>
        </Card>
    )
}

export default CardItem
