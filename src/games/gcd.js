import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const getGcd = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);
  if (maxNumber % minNumber === 0) return minNumber;
  const greatestPossibleDiv = Math.floor(minNumber / 2);
  const iter = (count) => {
    if (count === 1) return 1;
    if (minNumber % count === 0 && maxNumber % count === 0) return count;
    return iter(count - 1);
  };
  return iter(greatestPossibleDiv);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeTask = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const userQuestion = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
