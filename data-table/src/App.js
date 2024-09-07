import "./App.css";
import { useState } from "react";
import DATA from "./constants/userData";

function App() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(DATA.length / limit));
  const [data, setData] = useState(DATA.slice(0, limit));
  const dataLength = DATA.length;

  function handleLimitChange(e) {
    setLimit(e.target.value);
    setTotalPages(Math.ceil(dataLength / e.target.value));
    setPage(1);
    setData(DATA.slice(0, e.target.value));
  }

  function handlePrevClick() {
    setPage(page - 1);
    setData(DATA.slice((page - 2) * limit, (page - 1) * limit));
  }

  function handleNextClick() {
    setPage(page + 1);
    setData(DATA.slice(page * limit, (page + 1) * limit));
  }

  return (
    <div className="m-10">
      <div>
        <table>
          <thead  className = "border-b border-black bg-gray-100">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>occupation</th>
            </tr>
          </thead>
          {data.map((d) => {
            return (
              <tr className = "border-b border-black my-1">
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.occupation}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex gap-2 mt-4">
        <select onChange={handleLimitChange} className="border border-black">
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
        </select>
        <button
          className={
            "border border-black px-1 bg-gray-100" +
            (page === 1 ? " opacity-35" : "")
          }
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          {" "}
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className={
            "border border-black px-1 bg-gray-100" +
            (page === totalPages ? " opacity-35" : "")
          }
          onClick={handleNextClick}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
