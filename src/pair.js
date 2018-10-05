export default (a, b) => (message) => {
  switch (message) {
    case 'question':
      return a;
    case 'answer':
      return b;
    default:
      throw new Error('Unknown message');
  }
};
export const question = someTask => someTask('question');
export const answer = someTask => someTask('answer');
