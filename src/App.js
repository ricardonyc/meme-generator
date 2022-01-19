import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  function handleClick() {
    console.log("hovered!");
  }

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}
