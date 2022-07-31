import Form from './components/Form';
import './App.css';


function App() {
  return (
    <div className="App">
      <h2>React - Forms</h2>

      <Form user={{ name: "Nelson Mello", email: "nelson@gmail.com" }}/> {/*Enviando os dados para o formulario como prop simulando BD */}
      
    </div>
  );
};



export default App;
