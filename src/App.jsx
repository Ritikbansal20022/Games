import { useState } from 'react'
import Startgame from './components/Startgame';
import GamePlay from './components/GamePlay';
import styled from "styled-components";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
    {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />}
    </div>
  )
}

export default App

