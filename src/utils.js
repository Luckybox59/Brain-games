import readlineSync from 'readline-sync';

export const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
export const isEven = num => (num % 2 === 0);
export const askName = () => readlineSync.question('What is your name? ');
export const cons = (a, b) => (message) => {
  switch (message) {
    case 'question':
      return a;
    case 'answer':
      return b;
  }
};
export const question = someTask => someTask('question');
export const answer = someTask => someTask('answer');
export const getRandomOperator = () => {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
  }
};
