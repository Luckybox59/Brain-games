import getRandomNum from '../game-utils';
import cons from '../pair';
import playGame from '../engine';

const gameDescription = 'What is the result of the expression?';

const makeTask = () => {
  const arg1 = getRandomNum();
  const arg2 = getRandomNum();
  switch (getRandomNum(1, 3)) {
    case 1: return cons(`${arg1} + ${arg2}`, String(arg1 + arg2));
    case 2: return cons(`${arg1} - ${arg2}`, String(arg1 - arg2));
    case 3: return cons(`${arg1} * ${arg2}`, String(arg1 * arg2));
    default: throw new Error('Unknown message');
  }
};

export default () => playGame(gameDescription, makeTask);
