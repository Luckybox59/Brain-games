import { getRandomNum, getRandomOperator, cons } from '../utils';
import playGame from '../engine';

const gameRules = 'What is the result of the expression?';
const numOfQuestions = 3;
const makeTask = () => {
  const arg1 = getRandomNum();
  const arg2 = getRandomNum();
  const operator = getRandomOperator();
  const userQuestion = `${arg1} ${operator} ${arg2}`;
  const correctAnswer = String(eval(userQuestion));
  return cons(userQuestion, correctAnswer);
};

const playBrainCalc = () => {
  playGame(gameRules, numOfQuestions, makeTask);
};

export default playBrainCalc;
