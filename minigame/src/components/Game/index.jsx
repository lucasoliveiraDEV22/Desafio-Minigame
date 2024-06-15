// src/components/Game.js
import { useEffect, useState } from 'react';
import Result from '../Result';
import Sequence from '../Sequence';
import Timer from '../Timer';
import * as C from './styles';

const generateSequence = (length) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => letters[Math.floor(Math.random() * letters.length)]
  );
};

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    setSequence(generateSequence(5));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setResult('Tempo esgotado!');
    }
  }, [timeLeft, gameOver]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (e) => {
    if (gameOver) return;

    if (e.key.toUpperCase() === sequence[currentIndex]) {
      if (currentIndex === sequence.length - 1) {
        setGameOver(true);
        setResult('Você ganhou!');
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      setGameOver(true);
      setResult('Você pressionou a tecla errada!');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, gameOver, handleKeyPress]);

  const handleRestart = () => {
    setSequence(generateSequence(5));
    setCurrentIndex(0);
    setTimeLeft(20);
    setGameOver(false);
    setResult('');
  };

  return (
    <C.Game className='App'>
      <Sequence sequence={sequence} currentIndex={currentIndex} />
      <Timer timeLeft={timeLeft} />
      {gameOver && <Result result={result} onRestart={handleRestart} />}
    </C.Game>

  );
};

export default Game;
