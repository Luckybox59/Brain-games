import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const getGcd = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);
  const greatestPossibleDiv = Math.floor(minNum / 2);
  if (maxNum % minNum === 0) return minNum;
  const iter = (count) => {
    if (count === 1) return 1;
    if (minNum % count === 0 && maxNum % count === 0) return count;
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
