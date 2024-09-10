import "./App.css";
import { useState } from "react";

const DATA = [
  { id: 0, isClicked: false, isDisabled: false },
  { id: 1, isClicked: false, isDisabled: false },
  { id: 2, isClicked: false, isDisabled: false },
  { id: 3, isClicked: false, isDisabled: false },
  { id: 4, isClicked: false, isDisabled: true },
  { id: 5, isClicked: false, isDisabled: false },
  { id: 6, isClicked: false, isDisabled: false },
  { id: 7, isClicked: false, isDisabled: false },
  { id: 9, isClicked: false, isDisabled: false },
];

function App() {
  const [data, setData] = useState(DATA);
  const [order, setOrder] = useState([]);

  function handleClick(index) {
    setOrder([...order, index]);
    data[index].isClicked = true;
    setData([...data]);
  }

  let intervalId = null;
  if (order.length === 8) {
    intervalId = setInterval(() => {
      if(order.length === 0) clearInterval(intervalId);
      let id = order.pop();
      setOrder([...order]);
      data[id].isClicked = false;
      setData([...data]);
      
    }, 2000);
  }
  
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-3 w-[30rem]">
        {data.map((d, index) => (
          <button
            key={d.id}
            {...d}
            disabled={d.isDisabled}
            className={
              "h-20" +
              (!d.isDisabled ? " border border-black" : "") +
              (d.isClicked ? " bg-green-700" : "")
            }
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
      <div className="mt-3">
        order Array :{" "}
        {order.length > 0 &&
          order.map((ele) => <span className="mx-1">{ele}</span>)}
      </div>
    </div>
  );
}

export default App;
