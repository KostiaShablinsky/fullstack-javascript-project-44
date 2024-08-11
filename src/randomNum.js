const maxNumRand = 100;
const minNumRand = 0;

const getRandomInt = (
  minNum = minNumRand,
  maxNum = maxNumRand,
) => Math.floor(Math.random() * maxNum) + minNum;

export default getRandomInt;
