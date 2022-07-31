import '../styles/GameOver.css';

const GameOver = ({retryGame, score}) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>A sua pontuacao foi: <span>{score}</span></h2>
      <button onClick={retryGame}>Jogar Novamente</button>
    </div>
  );
};

export default GameOver