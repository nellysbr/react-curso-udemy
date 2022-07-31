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

  const wordCategory = () => {
    const categories = Object.keys(words); {/* pega cada uma das categorias */}
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick random word

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return {word, category};
  };
  
//start game stage
  const startGame = () => {

    const {word, category} = wordCategory();

    //Criar um array que separa as palavras e coloca dentro de uma lista

    let wordletters = word.split("");

    //padroniza o resultado e coloca tudo em minusculo para se colocar dentro do array
    wordletters = wordletters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordletters);

    //fill states

    setpickedWord(word);
    setpickedCategory(category);
    setletters(wordletters);
    

    setgameStage(stages[1].name);
  };

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


//restart game stage

const retryGame = () => {
  setgameStage(stages[0].name);
};


  return (
    <div className="App">


      {gameStage === 'start' && <StartScreen startGame={startGame} />}

      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters}
      score={score}
      guesses={guesses} 
      />}

      {gameStage === 'end' && <GameOver retryGame={retryGame}/>}

    </div>
  );
};

export default App;
