import React, {useContext, useState,useEffect} from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import {GlobalContext} from '../../context/GlobalState'
import Popup from '../../components/Popup'
import _ from 'lodash';
import { Card, InputAdornment, IconButton,List, CardHeader, CardContent } from '@material-ui/core';
import {Add, More} from '@material-ui/icons'
import DroppableItem from './DroppableItem';
import Controls from '../../components/controls/Controls'
import NewTask from '../newTask/NewTask'
import useStyles from './styles'
const DragAndDrop = ({taskList}) => {
    const classes = useStyles()
    const {dropItems, addTask,deleteItem,} = useContext(GlobalContext)  
    const [state, setState] = useState(taskList)
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState();
    const [taskListIndex,setTaskListIndex]=useState();
    useEffect(() => {
        setState(taskList)
    }, [taskList])

    /**Add New Task */
    const handleChange = (index,e) =>{
        const {name,value} = e.target;
        const newState={ ...state,[index]:_.map(state,(data,key)=>key===index)?{...state[index], [name]: value}:state[index]}
        setState(newState)
    }

    /**Drag&Drop */
    const handleDragEnd = (result)=>{
        const {destination, source} = result
        if(!destination){
            console.log(destination)
            return
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId){
            console.log(result)
            return
        }
        const itemCopy ={... state[source.droppableId].items[source.index]}
        setState(prev => {
            prev = {...prev}
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)     
            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)            
            return prev            
          })
        dropItems(state)              
    }
    /**Edit Record */
    const editRecord=(item,key)=>{
        setOpenPopup(true)
        setRecordForEdit(item) 
        setTaskListIndex(key)             
    }
 
    return (
        <div className={classes.container}>
            <DragDropContext onDragEnd = {handleDragEnd}>                               
                {_.map(state,(data,key)=>(
                    <Card key={key.toString()} spacing={1} className={classes.root}>
                        <CardHeader
                            avatar={data.title}
                            action={
                                <IconButton >
                                    <More/>
                                </IconButton>
                            }
                        />
                        <Droppable droppableId={key.toString()}>
                            {(provided)=>(
                                <CardContent    
                                    className={classes.CardContent}                               
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >                                    
                                    {data.items.map((item, index)=>(                                        
                                        <Draggable key={item.id} index={index} draggableId={item.id} >
                                            {(provided,)=>{
                                                return(
                                                <List                                                    
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}                                                
                                                >   
                                                    <DroppableItem 
                                                        values={item} 
                                                        deleteItem={()=>deleteItem(item,key)} 
                                                        className={classes.draggable}
                                                        editRecord={()=>editRecord(item,key)}
                                                    />                   
                                                </List>
                                            )}}
                                            
                                        </Draggable>
                                    ))}                                    
                                    {provided.placeholder}
                                </CardContent>
                            )}
                        </Droppable>
                        <Controls.Input
                            name='newTask'
                            label='Add Task'
                            value={data.newTask}
                            variant='filled'
                            onChange={e=>handleChange(key,e)}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            { data.newTask !== '' &&
                                            <IconButton
                                                onClick= {()=>addTask(key,data.newTask)}
                                                edge="end"
                                                showPassword='showPassword'
                                            >
                                                <Add/>
                                            </IconButton>}
                                        </InputAdornment>
                            }}
                        />
                        <Popup
                            title="New Task"
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                        >
                            <NewTask    
                                taskListIndex={taskListIndex}                                          
                                recordForEdit={recordForEdit}
                                setOpenPopup={()=>setOpenPopup(false)}                                
                            />
                        </Popup>
                    </Card>
                ))}               
            </DragDropContext>
        </div>
    )
}

export default DragAndDrop
