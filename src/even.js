import readlineSync from 'readline-sync';
import getRandomInt from './randomNum.js';

const roundsCount = 3;

// eslint-disable-next-line no-unused-vars
const playGame = (_rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const randomNum = getRandomInt(1, 100);

    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0) {
      const correctAnswer1 = 'yes';

      // eslint-disable-next-line eqeqeq
      if (correctAnswer1 == userAnswer) {
        console.log('Correct!');
        correctAnswersCount += 1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer1}.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }

    // eslint-disable-next-line eqeqeq
    if (randomNum % 2 != 0) {
      const correctAnswer2 = 'no';

      if (correctAnswer2 === userAnswer) {
        console.log('Correct!');
        correctAnswersCount += 1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer2}.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
