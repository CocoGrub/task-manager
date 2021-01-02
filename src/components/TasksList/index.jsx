import { useSelector } from 'react-redux';
import React from 'react';
import Task from '../Task';
import Pagination from "../Pagination";

const taskCreatedBanner=(
    <div className="alert alert-success" role="alert" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center'}}>
  Задача была добавлена!
    </div>)

const CardList = (props) => {
  const items = useSelector((state) => state.items);
  const isLogin = useSelector((state) => state.isLogin);
  const taskCreated = useSelector((state) => state.task_created);
  const currentPage = useSelector((state) => state.currentPage);
  return (
      <div style={{display:"flex",flexDirection:"column"}}>
        {taskCreated && taskCreatedBanner}
        <div className="row" >
          {items.map((item, i) => (
              <Task key={i} {...item} isLogin={isLogin} />
          ))}

        </div>
        <Pagination currentPage={currentPage} setPage={props.setPage} itemsTotal={props.itemsTotal}/>
      </div>

  );
};

export default CardList;
