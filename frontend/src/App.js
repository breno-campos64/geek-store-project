import './styles/App.css';
import BarraDeNavegacao from './BarraDeNavegacao.js';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';

function App() {
  return (
    <>
    <BarraDeNavegacao />

    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
