import React ,{useState, useEffect} from 'react'
import CardItem from '../../components/CardItem'
import Controls from '../../components/controls/Controls'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import { Menu,IconButton,InputAdornment, FormGroup, FormControlLabel, Checkbox, MobileStepper, makeStyles } from '@material-ui/core';
import { useForm } from '../../components/useForm';

const useStyles = makeStyles((theme)=>({
    root:{
        paddingLeft: theme.spacing(1)
    }
}))
const Checklist = (props) => {

    const {checklist, handleChecklist, handleChangeItemTitle,handleCheckItems,handleDeleteItem}= props
    /**Add Item */
    const {values, handleInputChange, resetForm} = useForm({item: ''})
    const addItems=(item)=>{
        handleChecklist(item)
        setChecklistMenuAnchoEl(null)
        resetForm()
    }

    const classes=useStyles()
    const [checklistMenuAnchorEl, setChecklistMenuAnchoEl] = useState(null);
    
    const [checklistLength, setChecklistLength] = useState()
    const [activeStep, setActiveStep] = useState()

    useEffect(() => {
        const length = (checklist.length +1)
        setChecklistLength(length)
        const checkedItems = checklist.filter(x=>x.align === true).length
        setActiveStep(checkedItems)
        
    }, [checklist])

    /**Open menu */
    const openChecklistMenu = (e)=>{
        resetForm()
        setChecklistMenuAnchoEl(e.currentTarget);
    }
    const checklistMenu = (
        <Menu
        id='mobileChecklistMenu'
        anchorEl={checklistMenuAnchorEl}
        onClose={()=>setChecklistMenuAnchoEl(null)} 
        open={Boolean(checklistMenuAnchorEl)}
        text="Checklist"
        >
            <Controls.Input 
                name='item'
                variant='filled'
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton onClick={e=>addItems(values.item,)}>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                }}
                value={values.item}
                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                
            />
        </Menu>
    )
    
    return (
        <CardItem
            title='Checklist'
        >   
            <div className={classes.root} >
           { checklist !== '' && <MobileStepper
                variant='progress'
                steps={checklistLength}
                position='static'
                activeStep={activeStep}
                LinearProgressProps='Hello'
            />}
            <Controls.Button
                startIcon={<AddIcon/>}
                text='Checklist'
                onClick={openChecklistMenu}
                ria-controls='mobileLabelMenu '      
                aria-haspopup='true'
                size='small'
            />  
            <FormGroup>
                {checklist.map((data,index)=>(
                    <FormControlLabel
                        key={index}
                        control={<Checkbox
                           checked={data.align} 
                           color='primary'  
                           name={data.item} 
                           onChange={e => handleCheckItems(index, e.target.checked)}     
                        />}
                        label={
                            <Controls.Input
                                    variant='standard'
                                    value={data.item}
                                    onChange={e=>handleChangeItemTitle(index, e.target.value)}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton onClick={e=>handleDeleteItem(index, e.target)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                    
                                />
                        }
                        labelPlacement='end'
                    />
                ))}
            </FormGroup>          
            {checklistMenu}
            </div>
        </CardItem>        
    )
}

export default Checklist
