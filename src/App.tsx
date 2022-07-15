import React, { useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";

function App() {
  const items = [];
  for (let i = 1; i < 50; i++) {
    items.push(i);
  }

  const [pageNum, setPageNum] = useState<number>(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNum * itemsPerPage;

  const displayUsers = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item, index) => {
      return <p key={index}>item{item}</p>;
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const onPageChange = (e: any) => {
    setPageNum(e.selected);
  };
  return (
    <div className="App">
      <div className="items"> {displayUsers}</div>
      <div className="page">
        <ReactPaginate
          pageCount={pageCount}
          previousAriaLabel={"Previous"}
          nextAriaLabel={"Next"}
          onPageChange={onPageChange}
          containerClassName={"paginationBttn"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
        ></ReactPaginate>
      </div>
    </div>
  );
}

export default App;
