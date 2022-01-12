import "./App.css";
import Board from "./components/Board/board.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess Game</h1>
        <a
          className="App-link"
          href="https://github.com/Adboessen/ChessApp.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project GitHub
        </a>
        <Board />
      </header>
    </div>
  );
}

export default App;
