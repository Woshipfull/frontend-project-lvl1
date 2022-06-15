/* eslint-disable no-param-reassign */
import game from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeProgression(start, progStep, progLength) {
  const result = [start];
  for (let i = 0; i < progLength - 1; i += 1) {
    result.push(result[i] + progStep);
  }
  return result;
}

const conditionsFunc = () => {
  let i = 0;
  const result = [];
  while (i < 3) {
    const progLength = getRandomIntInclusive(5, 10);
    const progStep = getRandomIntInclusive(2, 10);
    const start = getRandomIntInclusive(0, 20);
    const progColl = makeProgression(start, progStep, progLength);

    const index = getRandomIntInclusive(0, progLength - 1);
    const element = progColl[index];
    progColl[index] = '..';

    result[i] = [progColl.join(' '), element];
    i += 1;
  }
  return result;
};

const task = 'What number is missing in the progression?';

const conditions = conditionsFunc();

const progGame = game(task, conditions);
export default progGame;
