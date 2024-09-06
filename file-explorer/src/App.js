import { useState } from "react";
import DATA from "./constants/data";
import "./App.css";

const File = ({ name, hasChildren, setOpen, open }) => {
  return (
    <div className={"text-xl" + (hasChildren ? " font-bold" : "")}>
      {name}
      {hasChildren && (
        <span onClick={() => setOpen(!open)} className="ml-1 cursor-pointer">
          {open ? "[-]" : "[+]"}
        </span>
      )}
    </div>
  );
};

const Folder = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <File
        name={name}
        hasChildren={children?.length > 0}
        setOpen={setOpen}
        open={open}
      />
      <div className="ml-3">
        {open &&
          children?.length > 0 &&
          children.map((c) => <Folder key={c?.id} {...c} />)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="m-10">
      {DATA.map((d) => (
        <Folder key={d?.id} {...d} />
      ))}
    </div>
  );
}

export default App;
