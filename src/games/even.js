import getRandomInt from './randomNum.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (num) => {
  let answer;
  if (num % 2 === 0) {
    answer = 'yes';
  } else answer = 'no';
  return answer;
};

const getQuestionAndAnswer = () => {
  const num = getRandomInt();
  const answer = getCorrectAnswer(num);
  const question = `${num}`;
  return [question, String(answer)];
};

const evenGame = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default evenGame;
