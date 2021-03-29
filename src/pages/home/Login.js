import { ButtonBase, Typography,InputAdornment,IconButton } from '@material-ui/core'
import React from 'react'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import {useHistory} from "react-router-dom";
import Controls from '../../components/controls/Controls'
import { useForm } from '../../components/useForm';

const initialValues ={
    email: '',
    password: '',
}

const Login = (props) => {
    const {login} = props
    const history=useHistory()
    const {handleInputChange, values, errors,setErrors} = useForm(initialValues)
    //Validation
    const validate = () =>{
        let temp= {}        
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        temp.password = values.password? '' : 'This Field is required '
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==='')
    }
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
