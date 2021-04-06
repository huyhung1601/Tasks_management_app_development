import _ from 'lodash';
import {v4} from 'uuid'

export default (state, action) => {    
    switch(action.type){
        case 'DROP_ITEMS':
            console.log(state)            
            return {
                ...state,
               taskList: action.payload
            }
        case 'ADD_TASK':
            const {index, newTask} = action.payload
            const newItem = {id: v4(),
                title: newTask,
                description: '',
                dueDate: new Date(),
                members: [{name: 'Me', align: true},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],
                checklist: []}
                state.taskList[index].items.push(newItem)            
            return {
                ...state,  
                taskList: {...state.taskList, [index]: {...state.taskList[index], newTask:''}}           
            }
        case 'DELETE_ITEM':
            let {item,key} = action.payload;             
            let newTaskList = {...state.taskList, [key] : {...state.taskList[key], items : state.taskList[key].items.filter(x=>x!==item)}}
            
            return{
               ...state,
               taskList: newTaskList
            }
        case 'ADD_NEW_LIST':
            const newList ={id: v4(),title: action.payload, items: [], newTask:''}    
            return{
                ...state,
                taskList: {[action.payload]:newList,...state.taskList, }           
            }
        case 'EDIT_RECORD':
            let {record, taskListIndex} = action.payload      
            console.log(record, taskListIndex)            
            const newA = state.taskList[taskListIndex].items.filter(x=>x.id===record.id)
            const itemIndex = state.taskList[taskListIndex].items.indexOf(newA[0])
            state.taskList[taskListIndex].items.splice(itemIndex,1,record)                           
            return{
                ...state,
            }
        default:
            return state;
    }
}