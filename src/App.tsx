import React, { useState } from "react";
import "./App.css";

function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentPage, setCurrentPage] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="items">
        {" "}
        {items.map((item, index) => {
          return <p key={index}>item{item}</p>;
        })}
      </div>
      <div className="page"></div>
    </div>
  );
}

export default App;
