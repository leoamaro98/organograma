import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';

function App() {


  const times = [
    {
      nome: 'TI',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    }, {
      nome: 'FINANCEIRO',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }, {
      nome: 'RH',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }, {
      nome: 'MARKETING',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    }, {
      nome: 'COMPRAS',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }, {
      nome: 'ENGENHARIA',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFf5D9'
    }, {
      nome: 'COMEX',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }, {
      nome: 'COMERCIAL',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    }, {
      nome: 'PRODUCAO',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <div className="App">
      <Banner />                   
      {/*                           Passando todo array de time e retornando somente time.nome para props                      */}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}       

    </div>
  );
}

export default App;
