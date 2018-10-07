import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.ceil(num / 2); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

//  Функция getOddRanddomNum убирает из выдачи четные числа, так на мой взгляд игра становится
//  интересней, ведь все простые числа нечетные.
const getOddRanddomNum = () => {
  const oddRandom = getRandomNum(0, 1000000000);
  if (oddRandom % 2 !== 0) return oddRandom;
  return getOddRanddomNum();
};

const makeTask = () => {
  const userQuestion = getOddRanddomNum();
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
