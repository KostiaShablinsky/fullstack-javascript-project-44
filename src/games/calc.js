import getRandomInRange from './randomNum.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCorrectAnswer = (operand1, operand2, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = operand1 + operand2;
      break;
    case '-': answer = operand1 - operand2;
      break;
    case '*': answer = operand1 * operand2;
      break;
    default: break;
  }
  return answer;
};
const random = (array) => {
  const ran = Math.floor(Math.random() * array.length);
  return array[ran];
};
console.log(random(operations));
const getQuestionAndAnswer = () => {
  const operand1 = getRandomInRange();
  const operand2 = getRandomInRange();
  const operation = random(operations);
  const question = `${operand1} ${operation} ${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2, operation);
  return [question, String(answer)];
};

const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameCalc;
