import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    container:{
        display: 'flex',

    },
    root:{
        background: '#0ea0cc',
        margin: theme.spacing(0.5),
        width: '300px',
        height: 'fit-content',
        '& .MuiCardContent-root':{
            padding: theme.spacing(0.5),            
        },
        '& .MuiCardHeader-root':{
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0),
        },
        '& .MuiFormControl-root':{
            width: '100%'
        }
    },

}))