import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles((theme)=>({
    dialogWrapper:{
        padding: theme.spacing(0.5),
        position: 'absolute',
        top: theme.spacing(5),
        
    }
}))

const Popup = (props) => {

    const classes = useStyles();    

    const {title, children, openPopup, setOpenPopup,} = props
    
    
    return (

        <Dialog open={openPopup} maxWidth='md'classes={{paper:classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display: 'flex'}}>
                <Typography variant='h6' component='div' style={{flexGrow: 1}}>
                    {title}
                </Typography>
                <IconButton onClick={()=>setOpenPopup(false)}>
                    <CloseIcon/>
                </IconButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>
    )
}

export default Popup