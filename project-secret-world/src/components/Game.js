import '../styles/Game.css';
import { useState, useRef } from 'react';


const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, score, guesses}) => {

  const [letter, setletter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);

    setletter("");

    letterInputRef.current.focus();
  };


  return (
    <div className="game">
      <p className="points">
        <span>Pontuacao: {score}</span>
      </p>
      <h1>Advinha a palavra:</h1>
      <h3 className="dica">
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guesses} tentativas!</p>
      <div className="wordContainer">
        {letters.map((letters, i) => (
          guessedLetters.includes(letters) ? (
            <span key={i} className="letter">{letters}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
        
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" ref={letterInputRef} value={letter} onChange={(e) => setletter(e.target.value)} required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras que ja foram utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
      <button onClick={verifyLetter}>Finalizar jogo!</button>
    </div>
  )
}

export default Game