import React from 'react';
import { useNavigate, Route, Routes, NavLink, } from 'react-router-dom';
import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Produto from './componentes/Produto';
import Prodbelleza from './componentes/Prodbelleza';
import Servico from './componentes/Servico';
import Emprendedores from './componentes/Empreendedores';
import './Apprutas.css';
import Seinscrever from './componentes/Seinscrever';
import Estadosba from './componentes/Estadosba';
import Roupas from './componentesproducto/bellezacomponentes/Roupas';
import Sapato from './componentesproducto/bellezacomponentes/Sapato';
import Brincos from './componentesproducto/bellezacomponentes/Brincos';
function App() {
  const navigate = useNavigate()
  const goSobreNos = () => {
    navigate("/SobreNos")
  }
  const goProduto = () => {
    navigate("/componentes/Produto")
  }
  const goServico = () => {
    navigate("/componentes/Servico")
  }
  const goEmpreendedores = () => {
    navigate("/componentes/Empreendedores")
  }
  const goEstadosba = () => {
    navigate("/componentes/Estadosba")
  }
  const goSeinscrever = () => {
    navigate("/componentes/Seinscrever")
  }
  return (

    <div>
      <header>
        <nav>
          <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
          <p> Caminhos Sustentáveis
            <NavLink to="/" style={{ textDecoration: 'none', color: "black" }} > “ Porque você vale muito...” </NavLink>
          </p>
          <button onMouseOver={goSobreNos}>
            <NavLink to="/SobreNos" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })} > SobreNos </NavLink>
          </button>
          <button onMouseOver={goProduto}>
            <NavLink to="/componentes/Produto" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Produto </NavLink>
          </button>
          <button onMouseOver={goServico}>
            <NavLink to="/componentes/Servico" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Serviços </NavLink>
          </button>
          <button onMouseOver={goEmpreendedores}>
            <NavLink to="/componentes/Empreendedores" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Empreendedores </NavLink>
          </button>
          <button onMouseOver={goEstadosba}>
            <NavLink to="/componentes/Estadosba" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Estados </NavLink>
          </button>
          <button onMouseOver={goSeinscrever}>
            <NavLink to="/componentes/Seinscrever" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Se_inscrever </NavLink>
          </button>
        </nav>
      </header>


      <Routes>
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/componentes/Produto" element={<Produto />} >
            <Route path="Prodbelleza" element={<Prodbelleza />} >
              <Route path='Roupas' element={<Roupas />}></Route>
              <Route path='Sapato' element={<Sapato />}></Route>
              <Route path='Brincos' element={<Brincos />}></Route>
            </Route>
        </Route>
        <Route path="/componentes/Servico" element={<Servico />} />
        <Route path="/componentes/Empreendedores" element={<Emprendedores />} />
        <Route path="/componentes/Estadosba" element={<Estadosba />} />
        <Route path="/componentes/Seinscrever" element={<Seinscrever />} />
      </Routes>

    </div >


  );
}

export default App;
/*
<Route path='Sapato' element={<Sapato />}></Route>
<Route path='Brincos' element={<Brincos />}></Route>*/

/*<Route path="Prodomésticos" element={<Proddomestico />}>
<Route path='Cozinha' element={<Cozinha />}></Route>
<Route path='Limpeza' element={<Limpeza />}></Route>
<Route path='Electricos' element={<Electricos />}></Route>
</Route>
<Route path="Campo" element={<Campo />}>
<Route path='Frutas' element={<Frutas />}></Route>
<Route path='Verduras' element={<Verduras />}></Route>
<Route path='Legumbres' element={<Legumbres />}></Route>
</Route>
<Route path="Açougue" element={< Açougue/>}>
<Route path='Carne' element={<Carne />}></Route>
<Route path='Frango' element={<Frango />}></Route>
<Route path='Cerdo' element={<Cerdo />}></Route>
</Route>*/