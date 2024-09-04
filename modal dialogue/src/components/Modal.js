import React from "react";

const Modal = ({ show, setShow }) => {
  return (
    <div className="bg-gray-600 absolute h-screen bg-opacity-60">
      <div className="flex flex-col justify-center content-center w-1/3 mx-auto bg-white rounded-lg p-3 mt-[13rem]">
        <h1 className="text-3xl font-semibold my-1">Modal Title</h1>
        <p className="my-1">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>
        <button
          onClick={() => setShow(false)}
          className="bg-black text-white rounded-lg px-2 py-1 hover:text-black hover:bg-white my-1 w-[5rem]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
