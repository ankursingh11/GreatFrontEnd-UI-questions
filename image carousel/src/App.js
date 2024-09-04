import "./App.css";
import { useState } from "react";

const images = [
  {
    src: "https://picsum.photos/id/600/600/400",
    alt: "Forest",
  },
  {
    src: "https://picsum.photos/id/100/600/400",
    alt: "Beach",
  },
  {
    src: "https://picsum.photos/id/200/600/400",
    alt: "Yak",
  },
  {
    src: "https://picsum.photos/id/300/600/400",
    alt: "Hay",
  },
  {
    src: "https://picsum.photos/id/400/600/400",
    alt: "Plants",
  },
  {
    src: "https://picsum.photos/id/500/600/400",
    alt: "Building",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  function handleLeftClick() {
    if (index === 0) setIndex(images.length - 1);
    else setIndex(index - 1);
  }

  function handleRightClick() {
    if (index === images.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <div className="p-10 text-2xl flex justify-center items-center h-screen">
      <div
        className="text-3xl hover:-translate-x-1 transition"
        onClick={handleLeftClick}
      >
        ⏪️
      </div>
      <img
        alt={images[index].alt}
        src={images[index].src}
        className="mx-2 rounded-xl shadow-2xl"
      />
      <div
        className="text-3xl hover:translate-x-1 transition"
        onClick={handleRightClick}
      >
        ⏩️
      </div>
    </div>
  );
}

export default App;
