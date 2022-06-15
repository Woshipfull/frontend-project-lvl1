/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

function securityQuestion() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function addUserName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

export default function game(task, conditions) {
  console.log('Welcome to the Brain Games!');

  const userName = addUserName();
  console.log(`Hello, ${userName}!`);

  console.log(task);

  let i = 0;
  while (i < 3) {
    const step = conditions[i];
    const [question, result] = step;
    const correctAnswer = result.toString();

    const right = 'Correct!';
    const wrong = `is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    const wrong2 = `Let's try again, ${userName}!`;

    console.log(`Question: ${question}`);
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
