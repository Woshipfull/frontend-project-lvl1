/* eslint-disable no-param-reassign */
import game from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function numbDivisors(numb) {
  const result = [];
  for (let i = 1; i <= numb; i += 1) {
    if (numb % i === 0) {
      result.push(i);
    }
  }
  return result;
}

const conditionsFunc = () => {
  let i = 0;
  const result = [];
  while (i < 3) {
    const numb = getRandomIntInclusive(1, 150);
    const divisors = numbDivisors(numb);
    if (divisors.length === 2) {
      result[i] = [numb, 'yes'];
    } else {
      result[i] = [numb, 'no'];
    }
    i += 1;
  }
  return result;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const conditions = conditionsFunc();

const primeGame = game(task, conditions);
export default primeGame;
