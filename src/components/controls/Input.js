import { TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {
    const {name, label, value, error=null, onChange, variant, ...other} = props
    return (
        <TextField
            autoComplete='off'
            variant={variant || 'outlined'}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}            
            {...error && {error: true, helperText: error}}
        />
        
    )
}

export default Input