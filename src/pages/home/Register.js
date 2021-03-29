import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm } from '../../components/useForm'
import {Typography} from '@material-ui/core';
import {useHistory} from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
}

const Register = () => {
    const history = useHistory()
    const {values, handleInputChange,errors,setErrors} = useForm(initialValues)

    //Validation
    const validate = () =>{
        let temp= {}        
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        temp.password = values.password? '' : 'This Field is required '
        temp.confirmPassword = (values.password2 === values.password)? '' : 'Passwords does not match  '
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==='')
    }

    //Register
    const handleRegister = (e)=>{
        e.preventDefault()
        if(validate()){
            window.alert(console.log(values))
        }
    }
    return (
        <form onSubmit={handleRegister}>
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
            <Controls.PasswordInput
                name='confirmPassword'
                label='Confirm Password'
                value={values.confirmPassword}
                onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                error={errors.confirmPassword}
            />     
            <Controls.Button
                text='Login'
                onClick={()=>history.push('/')}
            />      
            <Controls.Button
                text='Register'
                type='submit'
            />
        </form>
    )
}

export default Register
