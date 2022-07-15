import React, { useState } from "react";
import "./App.css";

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

  return (
    <div className="App">
      <div className="items"> {displayUsers}</div>
      <div className="page"></div>
    </div>
  );
}

export default App;
