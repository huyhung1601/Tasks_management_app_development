import { ButtonBase, Typography,InputAdornment } from '@material-ui/core'
import React from 'react'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import {useHistory} from "react-router-dom";
import Controls from '../../components/controls/Controls'
import { useForm } from '../../components/useForm';

const initialValues ={
    email: 'admin@gmail.com',
    password: '123456',
}

const Login = (props) => {
    const {login} = props
    const history=useHistory()    
    //Validation
    const validate = (fieldValues = values) =>{
        let temp= {...errors} 
        if('email' in fieldValues)      
        temp.email = (!fieldValues.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        if('password' in fieldValues)
        temp.password = fieldValues.password? '' : 'This Field is required '
        setErrors({
            ...temp
        })

        if(fieldValues = values)
        return Object.values(temp).every(x => x==='')
    }
    const {handleInputChange, values, errors,setErrors} = useForm(initialValues, true, validate)
    //Login
    const handleLogin = (e) => {
        e.preventDefault()
        if (validate()){
        login();
        }
    }        
    return (
        <form onSubmit={handleLogin}>
            <Typography variant = 'h6'>User Login</Typography>
            <Controls.Input
                name='email'
                label='Enter Your Email'
                value={values.email}
                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                error={errors.email}
            />
            <Controls.PasswordInput
                name='password'
                label='Enter Your Password'
                value={values.password}
                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                error={errors.password}
            />            
            <Controls.Button
                text='Log in'
                type='submit'
            />
            <Typography>Forgot User Password?</Typography>
            <ButtonBase onClick={()=>history.push('/register')}>
                <Controls.Input
                    disabled
                    variant='standard'
                    value='Create your account '
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <TrendingFlatIcon/>
                            </InputAdornment>
                    }} 
                />
            </ButtonBase>
        </form>
    )
}

export default Login
