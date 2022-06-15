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

function commonElements(coll1, coll2) {
  const result = [];
  for (let i = 0; i < coll1.length; i += 1) {
    if (coll2.includes(coll1[i])) {
      result.push(coll1[i]);
    }
  }
  return result;
}

function bubbleSort(coll) {
  let stepCount = coll.length - 1
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < stepCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        swapped = true;
      }
    }
    stepCount -= 1;
  } while (swapped);
  return coll;
}

function greatestCommonDivisor(numb1, numb2) {
  const numb1Divisors = numbDivisors(numb1);
  const numb2Divisors = numbDivisors(numb2);
  const commonElem = commonElements(numb1Divisors, numb2Divisors);
  const sorting = bubbleSort(commonElem);
  const result = sorting[sorting.length - 1];
  return result;
}

const conditionsFunc = () => {
  let i = 0;
  const result = [];
  while (i < 3) {
    const operator1 = getRandomIntInclusive(1, 100);
    const operator2 = getRandomIntInclusive(1, 100);
    const greatestCommDiv = greatestCommonDivisor(operator1, operator2);
    result[i] = [`${operator1} ${operator2}`, greatestCommDiv];
    i += 1;
  }
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const conditions = conditionsFunc();

const gcdGame = game(task, conditions);
export default gcdGame;
