import { useSelector,useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import Task from '../Task';
import Pagination from "../Pagination";
import {getTasks} from "../../store/actions";

const taskCreatedBanner=(
    <div className="alert alert-success" role="alert" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center'}}>
  Задача была добавлена!
    </div>)

const CardList = (props) => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage);
    const items = useSelector((state) => state.items);
    const isLogin = useSelector((state) => state.isLogin);
    const taskCreated = useSelector((state) => state.task_created);
    const itemsTotal = useSelector(state => state.total_task_count)
    const filterOptions=useSelector(state=>state.filter)
    /*
    When retrieving data using the useSelector hook,
    prefer calling useSelector many times and retrieving smaller amounts of data,
    instead of having a single larger useSelector call that returns multiple results in an object
    */
    const sort_field=Object.keys(filterOptions)[0]
    const sort_direction=filterOptions[sort_field]

    useEffect(() => {
        dispatch(getTasks(sort_field,sort_direction,currentPage))
    },[dispatch,props.history.location.pathname,sort_field,sort_direction,currentPage])
    const setPage=(page)=>{
        dispatch(getTasks(sort_field,sort_direction,page))
    }
    return (
      <div style={{display:"flex",flexDirection:"column"}}>
        {taskCreated && taskCreatedBanner}
        <div className="row" >
          {items.map((item, i) => (
              <Task key={i} {...item} isLogin={isLogin} />
          ))}
        </div>
        <Pagination currentPage={currentPage} setPage={setPage} itemsTotal={itemsTotal}/>
      </div>);
    };

export default CardList;
