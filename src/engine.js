import readlineSync from 'readline-sync';
import { question, answer } from './pair';

const askName = () => readlineSync.question('What is your name? ');
const numOfQuestions = 3;

const playGame = (gameRules, makeTask) => {
  console.log(`\nWelcome to the Brain Games!\n${gameRules}\n`);
  const userName = askName();
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numOfQuestions; i += 1) {
    const userTask = makeTask();
    const userAnswer = readlineSync.question(`Question: ${question(userTask)} `);
    if (answer(userTask) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(userTask)}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${userAnswer}\nCorrect!\n`);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
