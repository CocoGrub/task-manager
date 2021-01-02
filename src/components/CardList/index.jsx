import { useSelector } from 'react-redux';
import React from 'react';
import Task from '../Task';
import Pagination from "../Pagination";

const CardList = (props) => {
  const items = useSelector((state) => state.items);
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <div className="row" style={{display:"flex"}}>
      {items.map((item, i) => (
        <Task key={i} {...item} isLogin={isLogin} />
      ))}
      <Pagination currentPage={props.page} setPage={props.setPage} itemsTotal={props.itemsTotal}/>
    </div>
  );
};

export default CardList;
