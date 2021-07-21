import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.css";
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Context';
import React, {useState, useContext} from 'react';
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  return (
    <>
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState === "menu" &&  <MainMenu />}
      {gameState === "quiz" &&  <Quiz />}
      {gameState === "endScreen" &&  <EndScreen />}
      </QuizContext.Provider>
    </div>
    </>
  );
}

export default App;
