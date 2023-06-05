import logo from './logo.svg';
import './App.css';
import { Micomponente } from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
import { Tercercomponente } from './Tercercomponente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Micomponente />
        <SegundoComponente/>
        <Tercercomponente/>
      </header>
      
    </div>
  );
}

export default App;
