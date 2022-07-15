import React, { useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";

const PaginateItems = ({ items }: any) => {
  const [pageNum, setPageNum] = useState<number>(0);
  const itemsPerPage: number = 10;
  const pagesVisited: number = pageNum * itemsPerPage;

  const displayUsers = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item: any, index: number) => {
      return <p key={index}>item{item}</p>;
    });

  const pageCount: number = Math.ceil(items.length / itemsPerPage);

  const onPageChange = (e: any) => {
    setPageNum(e.selected);
  };

  return (
    <>
      <div className="items" style={{ height: "360px" }}>
        {displayUsers}
      </div>
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
    </>
  );
};

function App() {
  const items = [];
  for (let i = 1; i < 1000; i++) {
    items.push(i);
  }

  return (
    <div className="App">
      <PaginateItems items={items} />
    </div>
  );
}

export default App;
