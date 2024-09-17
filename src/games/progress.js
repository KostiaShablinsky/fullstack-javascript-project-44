import getRandomInRange from './randomNum.js';
import playGame from '../index.js';

const lengthProgression = 10;
const maxDiffProgresion = 15;
const rule = 'What number is missing in the progression?';
const getquestionAndAnswer = () => {
  const firstNum = getRandomInRange();
  const diffProgresion = getRandomInRange(1, maxDiffProgresion);
  const skip = getRandomInRange(0, lengthProgression);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstNum + diffProgresion * i);
  }
  const answer = progression[skip];
  progression[skip] = '..';
  const question = progression.join('  ');
  return ([question, String(answer)]);
};
const progressionGame = () => {
  playGame(rule, getquestionAndAnswer);
};
export default progressionGame;
console.log(playGame());