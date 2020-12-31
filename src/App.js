import './App.css';
import CardList from '../src/components/CardList';
import NavBar from '../src/components/NavBar';
import {getTasksAsync} from '../src/store/actions'
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Pagination from '../src/components/Pagination'

function App() {
  const dispatch = useDispatch()
  const itemsTotal = useSelector(state => state.total_task_count)
  const {sort_field,sort_direction,page} = useSelector(state => state.filter)
  const setPage=(page)=>{
    dispatch(getTasksAsync(sort_field,sort_direction,page))
  }
  useEffect(() => {
    dispatch(getTasksAsync())
  }, [])
  return (
    <div className="App">
      <NavBar/>
      <CardList />
      <Pagination currentPage={page} setPage={setPage} itemsTotal={itemsTotal}/>
    </div>
  );
}

export default App;
