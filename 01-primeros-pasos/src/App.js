import logo from './logo.svg';
import './App.css';
import { Micomponente } from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
import { Tercercomponente } from './Tercercomponente';
function App() {

  const ficha_medica = {
    salud: 'buena',
    altura: '187',
    sangre: 'A+'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Micomponente />
        <SegundoComponente/>
        <Tercercomponente
        nombre = 'pippo'
        apellido= 'baudo'
        ficha = {ficha_medica}/>
      </header>
      
    </div>
  );
}

export default App;
