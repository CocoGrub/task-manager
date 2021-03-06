import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Switch,Route,withRouter,useLocation}from "react-router-dom";
import CardList from './components/TasksList';
import NavBar from '../src/components/NavBar';
import AddTask from './components/CreateTask'
import EditTask from './components/EditTask'
import LogInForm from './components/LogInForm'
import ProtectedRoute from "./components/ProtectedRoute";
import {reLogin} from './store/actions'

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  useEffect(() => {
      dispatch(reLogin())
  }, [dispatch]);

  useEffect(()=>{
      dispatch({
          type:'SET_CURRENT_URL',
          payload:location.pathname
      })
  },[location.pathname,dispatch])

  return (
    <div className="App">
    <NavBar />
    <div className="container-fluid" style={{display:'flex',flexDirection:'column',marginTop:'2em',justifyContent: 'center'}}>
  <Switch>
    <Route path="/" exact render={(props)=> (
        <CardList {...props} />)}/>
          <Route path="/createTask" render={(props)=> (
              <AddTask {...props} />)}/>
          <Route path="/logIn" render={(props)=> (
              <LogInForm {...props} />)}/>
    <ProtectedRoute path="/task/:id" component={EditTask} />
        </Switch>
        </div>
    </div>
    
  );
}

export default withRouter(App);
