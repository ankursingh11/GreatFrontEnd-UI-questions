import "./App.css";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [searchText, setSearchText] = useState("");
  const [index, setIndex] = useState(null);

  function handleCreate() {
    if (firstName !== "" && lastName !== "") {
      setUserList([...userList, { firstName, lastName }]);
      setFirstName("");
      setLastName("");
    }
  }

  console.log("Search text", searchText);

  function handleSearch(e) {
    setSearchText(e.target.value);
    const filteredList = userList.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    if(filteredList.length === 0 || searchText === "") setUserList([...userList]);
    else setUserList([...filteredList]);
  }

  function handleCancelClick() {
    setIndex(null);
    setFirstName("");
    setLastName("");
  }

  function handleUserClick(i) {
    setIndex(i);
    setFirstName(userList[i].firstName);
    setLastName(userList[i].lastName);
  }

  function handleUpdateClick() {
    userList[index] = { firstName, lastName };
    setIndex(null);
    setFirstName("");
    setLastName("");
    setUserList([...userList]);
  }

  function handleDeleteClick() {
    let newUserList = userList.filter((_, i) => i !== index);
    setUserList([...newUserList]);
    setFirstName("");
    setLastName("");
    setIndex(null);
  }

  return (
    <div className="m-10">
      {/* Search text box */}
      <input
        placeholder="Search"
        className="border border-black p-1 rounded-lg"
        type="text"
        value={searchText}
        onChange={(e) => handleSearch(e)}
      ></input>
      {/* Body Section */}
      <div className="flex gap-3 mt-2">
        <div className="border border-black p-1 rounded-lg overflow-y-scroll w-1/4 h-[10rem]">
          {userList.map((user, i) => (
            <div
              className="px-1 hover:bg-gray-300 hover:rounded-lg my-1"
              onClick={() => handleUserClick(i)}
              key={user.firstName + "$" + user.lastName}
            >
              {user.firstName} {user.lastName}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className="border border-black p-1 rounded-lg"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className="border border-black p-1 rounded-lg"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      {/* Buttons Section */}
      <div className="flex gap-3 mt-2">
        <button
          className={
            "border border-black p-1 rounded-lg bg-gray-200" +
            (firstName === "" || lastName === "" ? " opacity-50" : "")
          }
          onClick={handleCreate}
          disabled={firstName === "" && lastName === ""}
        >
          Create
        </button>
        <button
          className={
            "border border-black p-1 rounded-lg bg-gray-200" +
            (index === null ? " opacity-50" : "")
          }
          onClick={handleUpdateClick}
        >
          Update
        </button>
        <button
          className={
            "border border-black p-1 rounded-lg bg-gray-200" +
            (index === null ? " opacity-50" : "")
          }
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className={
            "border border-black p-1 rounded-lg bg-gray-200" +
            (index === null ? " opacity-50" : "")
          }
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default App;
