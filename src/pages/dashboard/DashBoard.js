import React,{useEffect, useState} from 'react'
import Controls from '../../components/controls/Controls'
import Popup from '../../components/Popup'
import NewTask from '../newTask/NewTask'
import AddIcon from '@material-ui/icons/Add';
import { Grid, makeStyles, Paper, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import TaskItem from './TaskItem';

//Fake values
const datas=[
    {id: '1', title: 'Start',description: '', dueDate: new Date(),
    members: [{name: 'Henry', align: false},{name: 'Henry', align: false},{name: 'Jason', align: false}],
    checklist: [{item: 'Design Layout', align: true},{item: 'Develope Function', algin: false},{item: 'Interior Design', algin: false}]},
    {id: '2', title: 'Build Up',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: false}],checklist: [{item: 'item2', algin: true}]},
    {id: '3', title: 'Mockup',description: '', dueDate: new Date(),
    members: [{name: 'Jason', align: false}],checklist: [{item: 'item1', algin: true}]},
    {id: '4', title: 'Test',description: '', dueDate: new Date(),
    members: [{name: 'Henry', align: false},{name: 'Henry', align: false},{name: 'Jason', align: false}],
    checklist: [{item: 'Design Layout', align: true},{item: 'Develop Function', algin: false}]},
    {id: '5', title: 'Apply',description: '', dueDate: new Date(),
    members: [{name: 'Me', align: false}],checklist: [{item: 'item2', algin: true}]},
    {id: '6', title: 'Others',description: '', dueDate: new Date(),
    members: [{name: 'Jason', align: false}],checklist: [{item: 'item1', algin: true}]},
]

const useStyles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(3)
    }
}))
const DashBoard = () => {
    const classes= useStyles()
    const [taskList, updateTaskList] = useState([]);
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState()
    
  
    // effect on page load
    useEffect(()=>{
        // call server
        // get task list
        updateTaskList(datas)
    },[]);
    

    //EditRecord
    const editRecord=(values)=>{
        setOpenPopup(true)
        setRecordForEdit(values)
    }

    //Search (make a new filtered list)
    const [filter,setFilter] = useState(null)
    const handleSearch = e =>{
        let target = e.target
        const filterItems = target.value ==''? taskList : taskList.filter(x=> x.title.toLowerCase().includes(target.value.toLowerCase()))
        setFilter(filterItems)  
    }
    return (
        <>
        <Paper className={classes.root}>
            <Grid container spacing={1}>
            <Grid item container xs={12}>
                <Grid item xs={3}>
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => {setOpenPopup(true); setRecordForEdit(null)} }
                    />
                </Grid>
                <Grid item xs ={3}>
                    <Controls.Input
                        label='Search'
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
                </Grid>
            </Grid>             
            <Grid item xs={12}container direction='row' spacing={2}>
                {filter === null ? taskList.map((item,index)=>(
                    <TaskItem values={item} key={item.id}  editRecord={(values)=>{editRecord(values)}}/>
                )): filter.map((item,index)=>(
                    <TaskItem values={item} key={item.id}  editRecord={(values)=>{editRecord(values)}}/>
                ))}
            </Grid>
            </Grid>
        </Paper>    
                  
        <Popup
            title="New Task"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
            <NewTask
                recordForEdit={recordForEdit}
                setOpenPopup={()=>setOpenPopup(false)}
            />
        </Popup>
        </>
    )
}

export default DashBoard
