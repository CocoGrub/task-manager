import './App.css';
import CardList from '../src/components/CardList';
import NavBar from '../src/components/NavBar';
import {getTasksAsync,createTaskAsync,logInAsync,relogIn,logOut,editTaskAsync} from '../src/store/actions'
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Pagination from '../src/components/Pagination'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import LogInForm from './components/LogInForm'
import {
  Switch,
  Route,
  withRouter 
} from "react-router-dom";

function App(props) {
  console.log(props,'app')
  const loginError= useSelector(state=>state.loginError)
  const isLogin= useSelector(state=>state.isLogin)
  const filterOptions=useSelector(state=>state.filter)
  const currentPage=useSelector(state=>state.currentPage)
  const itemsTotal = useSelector(state => state.total_task_count)



  const sort_field=Object.keys(filterOptions)[0]
  const sort_direction=filterOptions[sort_field]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksAsync(sort_field,sort_direction,currentPage))
  },[dispatch,props.history.location.pathname,sort_field,sort_direction,currentPage])


  const setPage=(page)=>{
    dispatch(getTasksAsync(sort_field,sort_direction,page))
  }
  const createTask=(data)=>{
    dispatch(createTaskAsync(data))
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      dispatch(relogIn())
    }
  }, [dispatch]);

  const logMeOut=()=>{
    dispatch(logOut())
  }
  const editTask=(id,text,status)=>{
    dispatch(editTaskAsync(id,text,status))
  }

  return (
    <div className="App">
    <NavBar isLogin={isLogin} logMeOut={logMeOut}/>
    <div className="container-fluid" style={{display:'flex',flexDirection:'column',marginTop:'2em',justifyContent: 'center'}}>
  <Switch>
    <Route path="/" exact render={(props)=> (
        <CardList {...props} currentPage={currentPage} setPage={setPage} itemsTotal={itemsTotal} />)}/>
          <Route path="/createTask" render={(props)=> (
              <AddTask {...props} createTask={createTask} />)}/>
          <Route path="/logIn" render={(props)=> (
              <LogInForm {...props} loginError={loginError}  isLogin={isLogin} />)}/>
          <Route path="/task/:id" render={(props)=> (
        <EditTask {...props}   editTask={editTask} />
        )} />
        </Switch>
        </div>
    </div>
    
  );
}

export default withRouter(App);
