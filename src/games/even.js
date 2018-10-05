import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);
const makeTask = () => {
  const userQuestion = getRandomNum();
  const correctAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
