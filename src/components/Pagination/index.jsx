import React, {useState} from "react";


const Pagination = ({itemsPerPage = 3, itemsTotal,setPage,currentPage=1}) => {

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * itemsPerPage + 1;
    let rightPortionPageNumber = portionNumber * itemsPerPage;
    let pagesCount = Math.ceil(itemsTotal / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(itemsTotal / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    let portionCount = Math.ceil(pagesCount / itemsPerPage);
    return (
        <div className={"center"}>
        <ul className={"pagination"}>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pageNumbers
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <li className={currentPage === p?"page-item active":" page-item"}
                                 key={p}
                                 onClick={(e) => {setPage(p)}}>
                                      <span className="page-link">{p}</span></li>
                })}

            {portionCount > portionNumber && <button className={"btn btn-outline-info"} onClick={() => {
                setPortionNumber(portionNumber + 1)}}>NEXT</button>}

        </ul>
        </div>
    )
}

export default Pagination;

{/* <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav> */}