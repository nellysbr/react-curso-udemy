
import './App.css';

/* useState vamos utilizar para gravar os dados em algum lugar

Utilizamos o useEffect para que determinada funcao seja executada apenas uma vez
Os componentes estao sempre se re-renderizando, entao e necessario acoes unicas as vezes

Use effect possui um array de dependecias que devem conter os dados que o ativem de forma automatica

Obs: estara sempre presente nas requisicoes assincronas


*/
import {useState, useEffect} from 'react';

//url que vai ser realizada a requisicao

const url = "http://localhost:3000/products/";

function App() {

  const [products, setproducts] = useState([]);

  //regatando os dados 

  useEffect( () => {

    async function  fetchData() {

      const response = await fetch(url); //resposta da requisicao - Fetch api permite que o navegador faca uma requisicao http para o webserver

      const data = await response.json(); //tranforma o json em objeto para pode utilzar pelo javascript 

      setproducts(data);

    }

    fetchData();
  
  }, []);

  
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
