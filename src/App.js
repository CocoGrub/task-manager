import './App.css';
import CardList from '../src/components/CardList';
import NavBar from '../src/components/NavBar';
import {getTasksAsync,createTaskAsync,logInAsync,relogIn,logOut} from '../src/store/actions'
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Pagination from '../src/components/Pagination'
import TaskEdit from './components/TaskEdit'
import LogIn from './components/LogIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const itemsTotal = useSelector(state => state.total_task_count)
  const isLogin = useSelector(state => state.isLogin)
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
  useEffect(() => {
    dispatch(getTasksAsync())
  }, [])
  return (
    <Router>
    <div className="App">
    <NavBar isLogin={isLogin} logMeOut={logMeOut}/>
    <Switch>
      <Route path="/" exact>
        <CardList />
          <Pagination currentPage={page} setPage={setPage} itemsTotal={itemsTotal}/>
            </Route>
          <Route path="/taskEdit">
            <TaskEdit createTask={createTask} />
          </Route>
          <Route path="/logIn">
            <LogIn logIn={logIn}   />
          </Route>
        </Switch>
    </div>
    </Router> 
  );
}

export default App;
