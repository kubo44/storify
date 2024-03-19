import logo from './logo.svg';
import './App.css';
import { ElinaInKita } from './ElinaInKita';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jede Woche eine neue Geschichte!
        </p>
        <ElinaInKita></ElinaInKita>
      </header>
    </div>
  );
}

export default App;
