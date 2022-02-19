import "./App.css";
import Game from "./components/Game/game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess Game</h1>
      </header>
      <a
        className="App-link"
        href="https://github.com/Adboessen/ChessApp.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project GitHub
      </a>
      <Game />
    </div>
  );
}

export default App;
