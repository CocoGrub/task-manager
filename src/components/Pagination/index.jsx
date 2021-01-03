import React, { useState } from 'react';
import {useDispatch} from 'react-redux'

const Pagination = ({ itemsPerPage = 3, itemsTotal, setPage, currentPage }) => {
  const dispatch=useDispatch()
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * itemsPerPage + 1;
  const rightPortionPageNumber = portionNumber * itemsPerPage;
  const pagesCount = Math.ceil(itemsTotal / itemsPerPage);
  const pageNumbers = [];
  console.log({
    portionNumber,leftPortionPageNumber,rightPortionPageNumber,pagesCount,pageNumbers,currentPage
  })
  for (let i = 1; i <= Math.ceil(itemsTotal / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const portionCount = Math.ceil(pagesCount / itemsPerPage);
  return (
    <div className="align-self-center" style={{ marginTop: '2em',alignSelf:"center" }}>
      <ul className={'pagination'}>
        {portionNumber > 1 && (
          <button className={'btn btn-outline-info'}
            onClick={() => {
              dispatch({
                type:'SET_PREV_PAGE',
                payload:leftPortionPageNumber-1
              })
              setPortionNumber(portionNumber - 1);
            }}>
            PREV
          </button>
        )}
        {pageNumbers
          .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return (
              <li
                className={currentPage === p ? 'page-item active' : ' page-item'}
                style={{cursor:'pointer'}}
                key={p}
                onClick={(e) => {
                  setPage(p);
                }}>
                <span className="page-link">{p}</span>
              </li>
            );
          })}
        {portionCount > portionNumber && (
          <button
            className={'btn btn-outline-info'}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
              dispatch({
                type:'SET_NEXT_PAGE',
                payload:rightPortionPageNumber+1
              })

            }}>
            NEXT
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
