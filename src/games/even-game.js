import readlineSync from 'readline-sync';

let randomNum = '';
let userAnswer = '';
let correctAnswer = '';
const getRandomNum = () => Math.round(Math.random() * 100);
const checkEven = num => ((num % 2 === 0) ? 'yes' : 'no');
const playEven = (name) => {
  for (let i = 0; i < 3; i += 1) {
    randomNum = getRandomNum();
    correctAnswer = checkEven(randomNum);
    userAnswer = readlineSync.question(`Question: ${randomNum} `);
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Your answer: ${userAnswer}\nCorrect!\n`);
  }
  console.log(`Congratulations, ${name}!`);
};

export default playEven;
