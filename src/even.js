import readlineSync from 'readline-sync';
import getRandomInt from './randomNum.js';

const roundsCount = 3;

const playGame = (rule, getQuestionAndAnswer) => {

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

 

  while (correctAnswersCount < roundsCount) {

    let randomNum = getRandomInt(1, 100);
   
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0){

        let correctAnswer1 = "yes";

        if (correctAnswer1 == userAnswer){

            console.log("Correct!");
            correctAnswersCount += 1;

        } else {

            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer1}.`);
            console.log(`Let's try again, ${userName}!`);
             return;

        }
    }

    if (randomNum % 2 != 0){

        let correctAnswer2 = "no";

        if (correctAnswer2 === userAnswer){

            console.log("Correct!");
             correctAnswersCount += 1;

        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer2}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }       
  
  
    
    }
    console.log(`Congratulations, ${userName}!`);
    
}
export default playGame