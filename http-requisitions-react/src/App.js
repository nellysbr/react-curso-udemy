
import './App.css';

/* useState vamos utilizar para gravar os dados em algum lugar

Utilizamos o useEffect para que determinada funcao seja executada apenas uma vez
Os componentes estao sempre se re-renderizando, entao e necessario acoes unicas as vezes

Use effect possui um array de dependecias que devem conter os dados que o ativem de forma automatica

Obs: estara sempre presente nas requisicoes assincronas


*/
import {useState, useEffect} from 'react';

//importando custom hooks

import { useFetch } from "./hooks/useFetch";

//url que vai ser realizada a requisicao

const url = "http://localhost:3000/products/";

function App() {

 // const [products, setproducts] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");

  //regatando os dados 

  const { data: items, httpConfig, loading, error } = useFetch(url);




  // useEffect( () => {

  //   async function  fetchData() {

  //     const response = await fetch(url); //resposta da requisicao - Fetch api permite que o navegador faca uma requisicao http para o webserver

  //     const data = await response.json(); //tranforma o json em objeto para pode utilzar pelo javascript 

  //     setproducts(data);

  //   }

  //   fetchData();
  
  // }, []);

  // adicionando um novo produto

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

  //   const res = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //   },
  //     body: JSON.stringify(product),
  // });

  // // carregamento de produtos dinamico 

  // const addedProdutct = await res.json();

  // setproducts((prevProducts) => [...prevProducts, addedProdutct]);

  //post refatorado 


  httpConfig(product, "POST");

  setname("");
  setprice("");

};

//desafio - deletar

const handleRemove = (id) => {
  httpConfig(id, "DELETE");
};
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* Loading... */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}
          <button onClick={ () => handleRemove(product.id) }>Excluir</button>
          </li>
          
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Digite o nome do produto:</span>
            <input type="text" placeholder="Digite o nome do produto" value={name} name="name" onChange={(e) => setname(e.target.value)} required/>
          </label>
          <label>
            <span>Digite o preco do produto:</span>
            <input type="text" placeholder="Digite o preco do produto" value={price} name="price" onChange={(e) => setprice(e.target.value)} required/>
          </label>
          {/* Adicionando loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="adicionar produto" />}
        </form>
      </div>
    </div>
  );
};

export default App;
