import React, {useState} from 'react'

export const useForm = (initialValues,validateOnChange = false, validate) => {

    const [ values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    /**handle InputChange */
    const handleInputChange = (name,value) =>{
        const newData= {...values, [name]: value}
        setValues(newData)
        if(validateOnChange)
        validate({[name] : value})
    }
    /**Add Items Checklist */
    const handleChecklist = (title)=>{
        const createItem = {item: title, align: false}
        const newData={...values, checklist: [...values.checklist, createItem]}
        setValues(newData)
    }
    /**Change Item Title */
    const handleChangeItemTitle = (id, newTitle) => {
        const items = values.checklist
        const newData={...values, checklist: items.map((x, index)=>id===index?{...x, item: newTitle}:x) }
        setValues(newData)
    }
    /**Check Item */
    const handleCheckItems = (id, checked) => {
        const items = values.checklist
        const checkItems = {...values, checklist: items.map((x,index)=>id === index?{...x, align:checked}:x)}
        setValues(checkItems)
    }
    /**Delete Item */
    const handleDeleteItem = (id, e) =>{
        const items = values.checklist
        const deleteItem= {...values, checklist: items.filter((x, index)=>id !== index)}
        setValues(deleteItem)
    }
    const resetForm = () =>{
        setValues(initialValues);
        setErrors({})
    }

    //Tag Member (Bool = !Bool)
    const handleTagMembers = (tagmember) =>{
        const members = values.members
        const updateMember ={...values, members: members.map(x=> x === tagmember?{...x, align:!tagmember.align}:x)}
        setValues(updateMember)
    }

    return {
        values,
        handleInputChange,
        errors,
        setErrors,
        resetForm,
        handleChecklist,
        handleChangeItemTitle,
        handleCheckItems,
        handleDeleteItem,
        setValues,
        handleTagMembers,

    }
}

