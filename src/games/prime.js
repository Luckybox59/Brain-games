import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.ceil(num / 2); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const makeTask = () => {
  const userQuestion = getRandomNum();
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
