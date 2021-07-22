import Nav from './Nav';
import CodeForInterview from './CodeForInterview';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
function Task(){
  return(
    <BrowserRouter>
   
    <Nav />
    <Switch>
    <Route exact path="/" component={CodeForInterview} />
    <Route exact path="/all" component={AllUsers} />
    <Route exact path="/add" component={AddUser} />
    </Switch>
    </BrowserRouter>
  );
}
export default Task;