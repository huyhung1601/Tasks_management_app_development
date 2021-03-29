import { Avatar, Card, CardContent, CardHeader, Chip, Grid, Icon, IconButton, makeStyles, Tooltip } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { AvatarGroup } from '@material-ui/lab';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(1),
        background: '#6bbdd0',
        '& .MuiAvatar-root':{
            background: 'linear-gradient(to right , #1565c0, #42a5f5)',
        },
        '& .MuiButtonBase-root':{
            background: 'inherit',
            color: 'white',
        },
        '& .MuiCardContent-root':{
            padding: theme.spacing(0)
        }
    },
    chips:{
        background: 'white'
    }
    
}))

const TaskItem = (props) => {
    const classes= useStyles()

    const {values, editRecord} = props
    const alignMember = values.members.filter(x=> x.align===true)
    const memberName = (
        alignMember.map((item,index)=>(
            <div style={{flexDirection:'column'}}>
                <Chip 
                    className={classes.chips}
                    key={index}
                    avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
                    variant='outlined'
                    label={item.name}
                    color='primary'
                /> 
            </div>
        ))
    )

    const items = (
        values.checklist.map((item,index)=>(
            <div style={{flexDirection:'column'}}>
                <Chip
                    className={classes.chips}
                    key={index}
                    variant='outlined'
                    avatar={<Avatar>{item.align ? 'V':'X'}</Avatar>}
                    label={item.item}
                    color='primary'
                /> 
            </div>
        ))
    )
            
    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={values.title}
                    action={
                        <IconButton onClick={()=>editRecord(values)}>
                            <EditIcon />
                        </IconButton>
                    }
                />
                <CardContent className={classes.CardContent}>
                    <div style={{display: 'flex'}}>
                        <Tooltip title={memberName}>
                            <AvatarGroup max={2} size='small' style={{flexGrow: 1}}>
                                {alignMember.length < 1 ? <Avatar>?</Avatar>:
                                alignMember.map((item, index)=>(
                                    <Avatar key={index} >{item.name.charAt(0)}</Avatar>
                                ))}
                            </AvatarGroup>
                        </Tooltip>
                    <Tooltip title={items} >
                        <IconButton variant='outline'>
                           { values.checklist.every(x=>x.align===true)? <DoneAllIcon/>:
                           <SpeakerNotesIcon/>}
                        </IconButton>
                    </Tooltip>
                    </div>
                </CardContent>
                {/* <CardActions></CardActions> */}
            </Card>
        </Grid>
    )
}

export default TaskItem
