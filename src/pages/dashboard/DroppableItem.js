import { Avatar, Card, CardContent, CardHeader, IconButton, ListItem, ListItemText, } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab';
import { Delete, Edit } from '@material-ui/icons'
import React from 'react'


const DroppableItem = (props) => {    
    const {values, deleteItem,editRecord} = props
    const dueDate= values.dueDate.getDate() + '/' + (values.dueDate.getMonth()+1) + '/' + values.dueDate.getFullYear();
    const alignMember = values.members.filter(x=> x.align===true)
    
    return (       
        <Card>
            <CardHeader
                avatar={values.title}
                action={<IconButton>
                    <Delete onClick={deleteItem}/>
                </IconButton>}
            />
            <CardContent>
                <ListItem button onClick={editRecord} style={{flexDirection:'row'}}>
                    <AvatarGroup max={2} size='small' style={{flexGrow: 1}}>
                        {alignMember.length < 1 ? <Avatar>?</Avatar>:
                        alignMember.map((item, index)=>(
                        <Avatar key={index} >{item.name.charAt(0)}</Avatar>
                        ))}
                    </AvatarGroup>
                    <ListItemText primary='checklist' secondary={dueDate}/> 
                    <Edit/>               
                </ListItem>
            </CardContent>   
        </Card>
    )
}

export default DroppableItem
