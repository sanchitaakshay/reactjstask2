import { FormControl, FormGroup, InputLabel,Input,Button,makeStyles, Typography } from "@material-ui/core"
import {addUser} from '../Service/api';
import React,{useState}  from "react";
import {useHistory} from "react-router-dom";
const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& >*':{
            marginTop:20
        }
    },
    btn:{
        background:'#000080'
    }
})
const initialValues={
    title:''
}
const AddUser=()=>{
    const [user,setUser]=useState(initialValues);
    const{title}=user;
    const classes=useStyle();
const history=useHistory();


    const onValuChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value })
       

    }
    const addUserDetails= async()=>{
        await addUser(user);
        history.push('./all')

    }
    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={(e)=>onValuChange(e)} name='title' value={title}/>
            </FormControl>
            <Button variant="contained" onClick={()=>addUserDetails()} color="primary" className="btn"> Add User</Button>
        </FormGroup>
    )
}
export default AddUser;