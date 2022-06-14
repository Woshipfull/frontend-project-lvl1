/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function securityQuestion() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function addUserName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

export default function evenGames() {
  const userName = addUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const positive = 'yes';
  const negative = 'no';
  const right = 'Correct!';

  let i = 1;
  while (i <= 3) {
    const numb = getRandomIntInclusive(1, 20);
    const restOfDiv = numb % 2;
    let correctAnswer;
    if (restOfDiv === 0) {
      correctAnswer = positive;
    } else if (restOfDiv === 1) {
      correctAnswer = negative;
    }
    const wrong = `is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    const wrong2 = `Let's try again, ${userName}!`;

    console.log(`Question: ${numb}`);
    const userAnswer = securityQuestion();

    if (userAnswer === correctAnswer) {
      console.log(right);
    } else {
      console.log(`'${userAnswer}' ${wrong}`);
      return wrong2;
    }

    i += 1;
  }

  return `Congratulations, ${userName}!`;
}
