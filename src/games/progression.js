import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const gameDescription = 'What number is missing in this progression?';

const progressionLength = 10;
const getProgression = (num, acc, count, step, emptyPos) => {
  if (count > progressionLength) return acc;
  const newAcc = `${acc} ${(count === emptyPos) ? '..' : num}`;
  const newNum = num + step;
  return getProgression(newNum, newAcc, count + 1, step, emptyPos);
};

const makeTask = () => {
  const step = getRandomNum(2, 5);
  const startNum = getRandomNum(1, 90);
  const emptyPos = getRandomNum(1, progressionLength);
  const accumulator = '';
  const userQuestion = getProgression(startNum, accumulator, 1, step, emptyPos);
  const correctAnswer = String(startNum + (emptyPos - 1) * step);
  return cons(userQuestion, correctAnswer);
};

export default () => playGame(gameDescription, makeTask);
