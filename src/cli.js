import readlineSync from 'readline-sync';

export default function addUserName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}
