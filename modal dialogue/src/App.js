import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center h-screen">
      <button 
      className="border border-black rounded-lg text-white bg-black px-2 py-1 h-10 hover:text-black hover:bg-white transition mt-10"
      onClick = {() => setShow(true)}
      disabled = {show}
      >
        {" "}
        show Modal{" "}
      </button>
      {show && <Modal show = {show} setShow = {setShow}/>}
    </div>
  );
}

export default App;
