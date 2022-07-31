import '../styles/GameOver.css';

const GameOver = ({retryGame}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retryGame}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver