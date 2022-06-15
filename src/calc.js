/* eslint-disable no-param-reassign */
import game from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const task = 'What is the result of the expression?';

const conditionsFunc = () => {
  let i = 0;
  const result = [];
  while (i < 3) {
    const operator1 = getRandomIntInclusive(1, 20);
    const operator2 = getRandomIntInclusive(1, 20);
    const operations = [`${operator1} + ${operator2}`, `${operator1} - ${operator2}`, `${operator1} * ${operator2}`];
    const operationsResult = [operator1 + operator2, operator1 - operator2, operator1 * operator2];
    const operationsIndex = getRandomIntInclusive(0, 2);
    result[i] = [operations[operationsIndex], operationsResult[operationsIndex]];
    i += 1;
  }
  return result;
};

const conditions = conditionsFunc();

const calcGame = game(task, conditions);

export default calcGame;
