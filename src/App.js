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
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('rerender');
    dispatch(getTasksAsync())
  },[props.history.location.pathname])
  const itemsTotal = useSelector(state => state.total_task_count)
  const isLogin = useSelector(state => state.isLogin)
  const items = useSelector((state) => state.items);
  const {sort_field,sort_direction,page} = useSelector(state => state.filter)
  const setPage=(page)=>{
    dispatch(getTasksAsync(sort_field,sort_direction,page))
  }
  const createTask=(data)=>{
    dispatch(createTaskAsync(data))
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    console.log(loggedInUser);
    if (loggedInUser) {
      dispatch(relogIn())
    }
  }, []);
  const logIn=(data)=>{
    dispatch(logInAsync(data))
  }
  const logMeOut=()=>{
    dispatch(logOut())
  }
  const editTask=(id,text,status)=>{
    dispatch(editTaskAsync(id,text,status))
    
  }

  return (
    <div className="App">
    <NavBar isLogin={isLogin} logMeOut={logMeOut}/>
    <Switch>
      <Route path="/" exact>
        <CardList  />
          <Pagination currentPage={page} setPage={setPage} itemsTotal={itemsTotal}/>
            </Route>
          <Route path="/taskEdit">
            <AddTask createTask={createTask} />
          </Route>
          <Route path="/logIn">
            <LogInForm logIn={logIn}   />
          </Route>
          <Route path="/task/:id" render={(props)=> (
        <EditTask {...props}   editTask={editTask} />
        )} /> 
        </Switch>
    </div>
    
  );
}

export default withRouter(App);
