import readlineSync from 'readline-sync';
import askName from '..';

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const isEven = num => (num % 2 === 0);
const numOfQuestion = 3;

const playBrainEven = () => {
  console.log('\nWelcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = askName();
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numOfQuestion; i += 1) {
    const userQuestion = getRandomNum();
    const correctAnswer = isEven(userQuestion) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${userQuestion} `);
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${userAnswer}\nCorrect!\n`);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainEven;
