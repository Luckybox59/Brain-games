import math from 'mathjs';
import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const getRandomOperator = () => {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default:
      throw new Error('Unknown message');
  }
};
const gameDescription = 'What is the result of the expression?';

const makeTask = () => {
  const arg1 = getRandomNum();
  const arg2 = getRandomNum();
  const operator = getRandomOperator();
  const userQuestion = `${arg1} ${operator} ${arg2}`;
  const correctAnswer = String(math.eval(userQuestion));
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
