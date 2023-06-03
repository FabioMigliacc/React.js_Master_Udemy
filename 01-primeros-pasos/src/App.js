import logo from './logo.svg';
import './App.css';
import { Micomponente } from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Micomponente />
        <SegundoComponente/>
      </header>
      
    </div>
  );
}

export default App;
