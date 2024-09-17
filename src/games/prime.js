import getRandomInRange from './randomNum.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const correctAnswer = (num) => {
  if (num <= 1) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};
const getQuestionAndAnswer = () => {
  const question = getRandomInRange();
  const answer = correctAnswer(question) ? 'yes' : 'no';
  return [question, answer];
};
const primePlay = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default primePlay;
