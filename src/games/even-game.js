import { getRandomNum, isEven, cons } from '../utils';
import playGame from '../engine';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const numOfQuestions = 3;
const makeTask = () => {
  const userQuestion = getRandomNum();
  const correctAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return cons(userQuestion, correctAnswer);
};

const playBrainEven = () => {
  playGame(gameRules, numOfQuestions, makeTask);
};

export default playBrainEven;
