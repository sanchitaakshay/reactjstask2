import { Toolbar,AppBar, Typography,makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle=makeStyles({
    header:{
        background:'#ffffff'
    },
    tabs:{
        color:'#111111',
        marginRight:20
    }
})
const Nav=()=>{
    const classes=useStyle();
    return(
        
        <AppBar className={classes.header}position="static">
           
            <Toolbar>
                
                <NavLink className={classes.tabs} to="all"  exact> All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact> Add user</NavLink>

            </Toolbar>
            </AppBar>
    )

}
export default Nav;