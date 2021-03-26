import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {

    const {name,label, value, onChange} = props
    const convertToDefEventPara = (name,value)=>({
        target:{
            name,value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined'
                label={label}
                formate='MM/dd/yyyy'
                name={name}
                value={value}
                onChange={date=>onChange(convertToDefEventPara(name,date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker