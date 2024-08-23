/* eslint no-var: off */

function randomOperator() {
  var ops = ['+', '-', '*'];
  var randomIndex = Math.floor(Math.random() * ops.length);
  var randomElement = ops[randomIndex];
  return randomElement;
}
export default randomOperator;
