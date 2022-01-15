import React,{useEffect, useState, useContext} from 'react'
import Controls from '../../components/controls/Controls'
import { Grid, makeStyles, Paper, InputAdornment,IconButton } from '@material-ui/core';
import TaskItem from './TaskItem';
import {Add,Search} from '@material-ui/icons'
import {v4} from 'uuid';
import DragAndDrop from './DragAndDrop';
import {GlobalContext} from '../../context/GlobalState'

//Fake values
const datas=[
    {id: v4(), title: 'Start',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: true},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],
    checklist: [{item: 'Design Layout', align: true},{item: 'Mock up', align: true}]},
    {id: v4(), title: 'Build Up',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: true},{name: 'Henry', align: true},{name: 'Jason', align: true},{name: 'stranger', align: false}],checklist: [{item: 'item2', algin: true}]},
    {id: v4(), title: 'Mockup',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: false},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],checklist: [{item: 'item1', algin: true}]},
    {id: v4(), title: 'Test',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: false},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],
    checklist: [{item: 'Design Layout', align: true},{item: 'Develop Function', algin: false}]},
    {id: v4(), title: 'Apply',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: true},{name: 'Henry', align: true},{name: 'Jason', align: false},{name: 'stranger', align: false}],checklist: [{item: 'item2', algin: true}]},
    {id: v4(), title: 'Others',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: false},{name: 'Henry', align: true},{name: 'Jason', align: false},{name: 'stranger', align: false}],checklist: [{item: 'item1', algin: true}]},
]

const useStyles = makeStyles((theme)=>({
    Paper:{
        padding: theme.spacing(3)
    },
}))
const DashBoard = () => {
    const {addNewList,taskList} = useContext(GlobalContext)
    const classes= useStyles()
    // const [taskList, updateTaskList] = useState(datas);    
    
    const [newList, setNewList] = useState('')
    
  
    // // effect on page load
    // useEffect(()=>{
    //     // call server
    //     // get task list
    //     updateTaskList(datas)
    // },[]);
    

    //Search (make a new filtered list)
    // const [filter,setFilter] = useState(null)
    // const handleSearch = e =>{
    //     let target = e.target
    //     const filterItems = target.value ==''? taskList : taskList.filter(x=> x.title.toLowerCase().includes(target.value.toLowerCase()))
    //     setFilter(filterItems)  
    // }
    const handleSubmit= e =>{
        e.preventDefault()
        addNewList(newList);
        setNewList('')
    }
    return (
        <>
        <Paper className={classes.Paper}>
            <Grid container spacing={1}>
            <Grid item container xs={12}>
                <Grid item xs={3}>
                <form onSubmit={handleSubmit}>
                <Controls.Input   
                    name='newList'
                    label='Add Task List'
                    value={newList}
                    variant='filled'
                    onChange={(e)=>setNewList(e.target.value)}
                        InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            { newList !== '' &&
                                            <IconButton
                                                type='submit'
                                                edge="end"
                                                showPassword='showPassword'
                                            >
                                                <Add/>
                                            </IconButton>}
                                        </InputAdornment>
                        }}
                />
                </form>
                </Grid>

                <Grid item xs ={3}>
                    <Controls.Input
                        label='Search'
                        // onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search />
                              </InputAdornment>
                            ),
                          }}
                    />
                </Grid>
            </Grid>             
            {/* <Grid item xs={12}container direction='row' spacing={2}>
                {filter === null ? taskList.map((item,index)=>(
                    <TaskItem values={item} key={index}  editRecord={(values)=>{editRecord(values)}}/>
                )): filter.map((item,index)=>(
                    <TaskItem values={item} key={index}  editRecord={(values)=>{editRecord(values)}}/>
                ))}
            </Grid> */}
            </Grid>
            <DragAndDrop taskList={taskList}/> 
        </Paper>  
        </>
    )
}

export default DashBoard
