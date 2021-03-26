import { Grid, makeStyles,  } from '@material-ui/core'
import React ,{useEffect} from 'react'
import Controls from '../../components/controls/Controls';
import CardItem from '../../components/CardItem';

import Checklist from './Checklist';
import Members from './Members';
import { useForm } from '../../components/useForm';


const initialdata = {
    success: '',
    error: '',
    data: {
        title: '',
        description: '',
        dueDate: new Date(),
        members: [{name: 'Me', align: true},{name: 'Henry', align: false},{name: 'Jason', align: false},{name: 'stranger', align: false}],
        checklist: []
    }
}
const {success, error, data} = initialdata

const useStyles = makeStyles((theme)=>({       
    root:{
        marginLeft: theme.spacing(0),
        ' .MuiCardContent-root':{
           
        },
        '& .MuiFormControl-root':{
            minWidth: '95%',  
            padding: theme.spacing(0.5)
        },
      
    }
}))

const NewTask = (props) => {
    const classes = useStyles();
    const {setOpenPopup, recordForEdit} = props
    //Extract useForm
    const{values, handleInputChange, resetForm, handleChecklist, handleChangeItemTitle,
        handleCheckItems, handleDeleteItem,setValues,handleTagMembers,}
        = useForm(data)
    //OnSubmit
    const handleSubmit =(e)=>{
        e.preventDefault()
        // send data to server
        console.log(values)
        resetForm()
        setOpenPopup()
    }
    //Edit
    useEffect(() => {
        if (recordForEdit != null)
        setValues({
            ...recordForEdit
        })
    }, [recordForEdit])


    return (
        
        <form className={classes.root} onSubmit={handleSubmit}>
            <pre><code>{JSON.stringify(values)}</code></pre>
            <Grid container spacing={1}>
                <Grid item xs={8} container direction='column'>
                    <Grid item xs>
                        <CardItem 
                            title="Title"
                        >
                            <Controls.Input
                                name='title'
                                value={values.title}     
                                onChange= {(e)=>handleInputChange(e.target.name, e.target.value)}                       
                            />
                        </CardItem>
                    </Grid>
                    <Grid item>
                        <CardItem 
                            title="Description"
                        >
                            <Controls.Input
                                name='description'
                                value={values.description}
                                multiline
                                rows={2}
                                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                            />
                        </CardItem>
                    </Grid>
                    <Grid item>
                        <Checklist
                            checklist={values.checklist}
                            handleChecklist={(title)=>handleChecklist(title)}
                            handleChangeItemTitle={(id,newTitle)=>handleChangeItemTitle(id,newTitle)}
                            handleCheckItems={(id,e)=>handleCheckItems(id,e)}
                            handleDeleteItem={(id,e)=>handleDeleteItem(id,e)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={4} container direction='column'>
                    <Grid item>
                        <CardItem
                            title='Due Date'    
                        >
                            <Controls.DatePicker
                                name='dueDate'
                                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                                value={values.dueDate}
                            />
                        </CardItem>
                    </Grid>
                    <Grid item>
                        <Members
                            members={values.members}
                            handleTagMembers={(member)=>handleTagMembers(member)}
                        />
                    </Grid>
                </Grid> 
                <Grid>
                <Controls.Button
                    text='Save Change'
                    type='submit'
                    
                />
                <Controls.Button
                    text='Reset'
                    onClick={()=>resetForm()}
                />
                </Grid>               
            </Grid>
        </form>
    )
}

export default NewTask

