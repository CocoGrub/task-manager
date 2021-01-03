import './App.css';
import React,{useEffect} from 'react'
import CardList from './components/TasksList';
import NavBar from '../src/components/NavBar';
import {reLogin} from './store/actions'
import {useDispatch} from 'react-redux'
import AddTask from './components/CreateTask'
import EditTask from './components/EditTask'
import LogInForm from './components/LogInForm'
import {Switch,Route,withRouter}from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(reLogin())
  }, [dispatch]);

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
