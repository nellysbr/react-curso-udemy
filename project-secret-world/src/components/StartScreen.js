import '../styles/StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret World</h1>
        <p>Clique no botao abaixo para jogar!</p>
        <button onClick={startGame}>Iniciar!</button>
    </div>
  );
};

export default StartScreen;