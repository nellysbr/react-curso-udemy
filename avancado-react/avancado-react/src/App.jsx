import {useState} from 'react'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import PropsTraining from './components/PropsTraining';
import PropsDestro from './components/PropsDestro';
import Challenge from './components/Challenge';
import ChildrenProp from './components/ChildrenProp';
import FunctionAsProp from './components/FunctionAsProp';
import StateLift from './components/StateLift';
import ChangeStateLift from './components/ChangeStateLift';
import UserDetails from './components/UserDetails';


import Logo512 from './assets/logo512.png';

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'red', roaded: 0, newCar: true},
    {id: 2, brand: 'Kia', color: 'black', roaded: 25000, newCar: false},
    {id: 3, brand: 'Renault', color: 'yellow', roaded: 4500, newCar: false},
  ]

  function showMessage () {
    console.log("Evento do componente pai");
  }

  {/*Elevacao de state - exebicao e alteracao sao feitas por componentes que nao estao no componente pai*/}

  const [message, setMessage] = useState();
  
  const handleMessage = (msg) => {
    setMessage(msg);

  };

  const users = [
    {
    id: 1,
    nome: 'nelson',
    idade: 31,
    profissao: 'Engenheiro de software'
    },
    {
    id: 2,
    nome: 'Bruno',
    idade: 20,
    profissao: 'Engenheiro de software' 
    },
    {
    id: 3,
    nome: 'Ana',
    idade: 17,
    profissao: 'Estudante'
    }

];

  return (
    <div className="App">
      <h1>avancado react</h1>

      {/* importando imagem na pasta public*/}
      <div>
        <img src="/logo192.png" alt="logo react" />
      </div>
      {/* importando imagem na pasta assets*/}
      <div>
        <img src={Logo512} alt="" />
      </div>
      <ManageData />
      <ListRender/>
      <ConditionalRender/>
      <PropsTraining name="Nelson" />

      <PropsDestro brand="Mercedes" roaded={100.000} color="Silver" newCar={false}/>
      {/*Treinando reaproveitamento */}
      <PropsDestro brand="Fiat" roaded={4500} color="Silver" newCar={false}/>
      <PropsDestro brand="VW" roaded={0} color="Silver" newCar={true}/>
      <PropsDestro brand="Audi" roaded={0} color="Silver" newCar={true}/>


      {/*Challenge 02 */}
      <Challenge />

      {/*Todos os conceitos */}

      {cars.map((car) => (
        <PropsDestro key={car.id} brand={car.brand} color={car.color} roaded={car.roaded} newCar={car.newCar}/>
      ))}

      {/*ChildrenProp */}

      <ChildrenProp>
        <p>Novo paragrafo</p>
      </ChildrenProp>

      {/*Executar funcao como prop - showMessage criada na App.js */}

      <FunctionAsProp myFunction={showMessage}/>

      {/*elevacao de estado */}

      <StateLift msg={message}/>
      <ChangeStateLift handleMessage={handleMessage}/> 

      {/*Desafio */}

      {users.map((users) => (
        <UserDetails key={users.id} name={users.nome} age={users.idade} job={users.profissao}/>
      ))}

      

    </div>
  );
}

export default App;
