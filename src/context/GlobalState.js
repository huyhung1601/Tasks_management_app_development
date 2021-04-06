import React, {createContext, useReducer,} from 'react'
import AppReducer from './AppReducer'
import {v4} from 'uuid'
const item1={id: v4(), title: 'Start',description: '', dueDate: new Date(),
members: [{name: 'Me', align: true},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],
checklist: [{item: 'Design Layout', align: true},{item: 'Mock up', align: true}]}

const item2={id: v4(), title: 'Build Up',description: '', dueDate: new Date(),
members: [{name: 'Me', align: true},{name: 'Henry', align: true},{name: 'Jason', align: true},{name: 'stranger', align: false}],
checklist: [{item: 'item2', algin: true}]}
// Initial State
const initialState = {
    taskList:[
        {id: v4(),title: 'Todo', items:[], newTask:''},
        {id: v4(),title: 'In Process', items:[], newTask:''},
        {id: v4(),title: 'Completed', items:[], newTask:''}
    ],
    
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
   
    function dropItems(state){
        dispatch({
            type: 'DROP_ITEMS',
            payload: state ,
        })
    }

    function addTask(index, newTask){
        dispatch({
            type: 'ADD_TASK',
            payload: {index,newTask}
        })
    }

    function deleteItem(item,key){
        dispatch({
            type: 'DELETE_ITEM',
            payload: {item,key}
        })
    }

    function addNewList(newlist){
        dispatch({
            type: 'ADD_NEW_LIST',
            payload: newlist
        })
    }
    
    function editRecord(record,taskListIndex){
        dispatch({
            type: 'EDIT_RECORD',
            payload: {record, taskListIndex}
        })
    }
    return (<GlobalContext.Provider value={{
        taskList: state.taskList,
        dropItems,
        addTask,
        deleteItem,
        addNewList,
        editRecord,
    }}>
        {children}
    </GlobalContext.Provider>);
}