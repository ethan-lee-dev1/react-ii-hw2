import { Animals } from "./Animals";
import "./App.css";

function App() {
  let animals = [
    { name: "🐶dog", color: "rgb(156, 192, 231)" },
    { name: "🐱cat", color: "rgb(238, 238, 238)" },
    { name: "🐔chicken", color: "rgb(252, 252, 252)" },
    { name: "🐮cow", color: "rgb(250, 234, 203)" },
    { name: "🐑sheep", color: "rgb(247, 219, 215)" },
    { name: "🐴horse", color: "rgb(231, 128, 160)" },
  ];

  return (
    <div>
      <Animals animals={animals} />
    </div>
  );
}

export default App;
