import { getUsers ,deleteUser} from "../Service/api";
import{useEffect,useState} from "react";
import { TableCell, TableHead, Table,TableRow,TableBody,makeStyles,Button} from "@material-ui/core";


const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px' 
    },
    thead:{
        '& > *':{
            background:'#000000',
            color:'#ffffff'
        }

    }
    
})
const AllUsers=()=>{

    const [users,setUsers]=useState([]);
    const classes=useStyle();
    useEffect(()=>{
        getAllUsers();

    }, [])

    const getAllUsers= async()=>{
        const response= await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData=async(id)=>{
        await deleteUser(id)
        getAllUsers();
    }
    return(
       <Table className={classes.table}>
           <TableHead >
               <TableRow className={classes.thead}>
                   <TableCell>Id</TableCell>
                   <TableCell>Title</TableCell>
                   <TableCell></TableCell>
                   
               </TableRow>
           </TableHead>
           <TableBody>
              { 
              users.map(user=>(
                  <TableRow>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.title}</TableCell>
                      <TableCell>
                          <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                      </TableCell>
                      
                  </TableRow>

              ))
              }
           </TableBody>
       </Table>
    )
}
export default AllUsers;