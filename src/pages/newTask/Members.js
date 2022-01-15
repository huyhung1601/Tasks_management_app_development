import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DoneIcon from '@material-ui/icons/Done'
import CardItem from '../../components/CardItem'
import { Chip, Avatar, makeStyles, Card } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    unTaggedMembers:{
        minWidth: '100%'
    },
    root:{
        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5),
        '& .MuiChip-root':{
            margin: theme.spacing(0.5),
        }
    }
}))

const Members = (props) => {
    const classes = useStyles()
    const {members,handleTagMembers,} = props
    const taggedMembers = members.filter(x=>x.align === true)
    const unTaggedMembers = members.filter(x=>x.align === false)

    return (
        <CardItem
            title='Members'
        >
        <div>
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={unTaggedMembers}
            getOptionLabel={(option) => option.name}
            renderOption={(option ) => (
                <React.Fragment>
                  <Chip
                    className={classes.unTaggedMembers}
                    avatar={<Avatar>{option.name.charAt(0)}</Avatar>}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    label={option.name}
                    onClick={()=>handleTagMembers(option)}
                    variant='outlined'
                  />
                </React.Fragment>
              )}
            renderInput={(params) => (
                <TextField {...params} label="Add Members" margin="normal" variant="outlined" />
            )}
        />
        <Card className={classes.root}>
            {taggedMembers.map((member,index)=>(
                <Chip
                key={index}
                className={classes.chip}
                avatar={<Avatar>{member.name.charAt(0)}</Avatar>}
                color="primary"
                label={member.name}
                onDelete={()=>handleTagMembers(member)}
                variant='outlined'
              />
            ))}
        </Card>
        </div>
        </CardItem>
    )
}

export default Members
