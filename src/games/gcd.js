import getRandomInRange from './utils.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getCorrectAnswer = (num1, num2) => {
  let answer;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
      num1 %= num2;
      answer = num1 + num2;
    } else {
      // eslint-disable-next-line no-param-reassign
      num2 %= num1;
      answer = num1 + num2;
    }
  } return answer;
};

const questionAndAnswer = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const answer = getCorrectAnswer(num1, num2);
  return [question, String(answer)];
};

const initGameGcd = () => {
  playGame(rule, questionAndAnswer);
};
export default initGameGcd;
