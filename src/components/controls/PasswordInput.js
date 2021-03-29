import { TextField,InputAdornment,IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


const PasswordInput = (props) => {
    const {name, label, value, error=null, onChange, variant, ...other} = props

    const[showPassword, setShowPassword] = useState(false)
    const handleShowPassWord = e=>{
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <TextField
            autoComplete='off'
            variant={variant || 'outlined'}
            label={label}
            name={name}
            value={value}
            onChange={onChange} 
            type={showPassword ? 'text' : 'password'}   
            {...error && {error: true, helperText: error}}
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassWord}
                            edge="end"
                            showPassword='showPassword'
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
            }} 
        />
        
    )
}

export default PasswordInput