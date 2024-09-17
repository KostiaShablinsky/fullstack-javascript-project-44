// eslint-disable-next-line max-len, import/prefer-default-export
const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));
export default getRandomInRange;
