import './App.css';

import MyComponent from './components/MyComponent';
import TitleCssModules from './components/TitleCssModules';
import Challenge from './components/Challenge';

function App() {

  const redTitle = true; {/* Variavel para Classe dinâmica */} 

  const cars = [
    {
    id: 1,
    brand: 'mercedes',
    km: 0, 
    cor: 'preta',
    newCar: true
  },
  {
    id: 2,
    brand: 'kia',
    km: 25000, 
    cor: 'prata',
    newCar: false

  },
  {
    id: 3,
    brand: 'fiat',
    km: 0, 
    cor: 'vermelha',
    newCar: true

  },
  {
    id: 4,
    brand: 'Audi',
    km: 100000, 
    cor: 'Azul',
    newCar: false

  }
];

  return (
    <div className="App">
      {/*CSS GLOBAL - index.css */}
      <h1>React com css</h1>

      {/*CSS COMPONENTE - MyComponent.css (./styles/MyComponent.css) */}
      <MyComponent /> 

      {/* Classe dinâmica */}
      {/* se a variavel redTitle for true = usa a classe css red-title, se for false usa a classe title*/}    
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo tem classe dinâmica</h2>


      {/* CSS MODULES */}

      <TitleCssModules />


      {/* Desafio */}

      <h1 className="challenge-title">Detalhes dos carros - Desafio</h1>
      
      {cars.map((car) => (
        <Challenge key={car.id} brand={car.brand} km={car.km} cor={car.cor} newCar={car.newCar}/>
      ))};


    </div>
  );
}

export default App;


