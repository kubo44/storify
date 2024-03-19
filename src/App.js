import './App.css';
import { ElinaInKita } from './ElinaInKita';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='daisy.webp' alt="logo" height="200px" />
        <p>
          Jeden Monat eine neue Geschichte!
        </p>
        <ElinaInKita></ElinaInKita>
      </header>
    </div>
  );
}

export default App;
