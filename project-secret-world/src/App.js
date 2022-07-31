//css 
import './App.css';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//react

import { useCallback, useEffect, useState } from 'react';

//data

import { wordsList } from './data/words';

//logic

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
];


function App() {

  const [gameStage, setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setletters] = useState([]);

  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [guesses, setguesses] = useState(3);
  const [score, setscore] = useState(0)

  const wordCategory = useCallback(() => {
    const categories = Object.keys(words); {/* pega cada uma das categorias */}
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

   

    //pick random word

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    

    return {word, category};
  },[words]);
  
//start game stage
  const startGame = useCallback(() => {

    //limpa todas as letras
    clearLetterStates();

    const {word, category} = wordCategory();

    //Criar um array que separa as palavras e coloca dentro de uma lista

    let wordletters = word.split("");

    //padroniza o resultado e coloca tudo em minusculo para se colocar dentro do array
    wordletters = wordletters.map((l) => l.toLowerCase());


    //fill states

    setpickedWord(word);
    setpickedCategory(category);
    setletters(wordletters);
    

    setgameStage(stages[1].name);
  },[wordCategory]);

  //process letter input

  const verifyLetter = (letter) => {
    const normLetter = letter.toLowerCase();

    //checar se a letra ja foi utilizada

    if (guessedLetters.includes(normLetter) || wrongLetters.includes(normLetter)) {
      return;
    }

    //push 

    if (letters.includes(normLetter)) {
      setguessedLetters((stateGuessedLetters) => [...stateGuessedLetters, normLetter]);
      setscore(score + 1);
    }else {
      setwrongLetters((stateWrongLatters) => [...stateWrongLatters, normLetter]);
      setscore(score - 1);
      setguesses(guesses - 1);
    }

    
  }

  const clearLetterStates = () => {
    setguessedLetters([]);
    setwrongLetters([]);
    
  }

  //checar se a condicao de vitoria terminou

  useEffect(() => {
    if (guesses <= 0 ) {
      //resetar todos os states (resetar numero de tentivas)
      clearLetterStates();

      setgameStage(stages[2].name);
    }
  }, [guesses]);

  // checar condicao de vitoria

  useEffect(() => {
    
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setscore((actualScore) => actualScore += 100);
      // restart game com uma nova palavra
      startGame();
    }

    
  
  }, [guessedLetters, letters, startGame]);
  

  //restart game stage

const retryGame = () => {
  setscore(0);
  //reseta o score e as tentativas
  setguesses(3);

  //volta pro estagio 1 do game
  setgameStage(stages[0].name);
};


  return (
    <div className="App">


      {gameStage === 'start' && <StartScreen key={1} startGame={startGame} />}

      {gameStage === 'game' && <Game
      key={2}
      pickedWord={pickedWord} 
      verifyLetter={verifyLetter}  
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters}
      score={score}
      guesses={guesses} 
      />}

      {gameStage === 'end' && <GameOver key={3} retryGame={retryGame} score={score}/>}

    </div>
  );
};

export default App;
