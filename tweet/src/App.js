import "./App.css";
import Tweet from "./components/Tweet";

const tweets = [
  {
    imageSrc: "https://xsgames.co/randomusers/assets/avatars/male/52.jpg",
    name: "John Doe",
    tweetId: 1,
    tweetHandle: "@johndoe",
    tweet:
      "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    comment: "1,094",
    reshare: "512",
    likes: "512",
  },
  {
    imageSrc: "https://xsgames.co/randomusers/assets/avatars/female/33.jpg",
    name: "Jane Doe",
    tweetId: 2,
    tweetHandle: "@janedoe",
    tweet:
      "I told my husband that he has no sense of direction at all. He got so mad that he packed up his stuff and right.",
    comment: "193",
    reshare: "3,960",
    likes: "40.5K",
  },
  {
    imageSrc: "https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg",
    name: "WALL-e",
    tweetId: 3,
    tweetHandle: "@walle",
    tweet: "The best way to predict the future is to invent it.",
    comment: "193",
    reshare: "3,960",
    likes: "40.5K",
  },
];

function App() {
  return (
    <div className="p-10">
      <h1 className="my-5 text-2xl">Tweet component</h1>
      {tweets.map((t) => (
        <Tweet key={t.tweetId} {...t} />
      ))}
    </div>
  );
}

export default App;
