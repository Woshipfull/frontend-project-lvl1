import readlineSync from 'readline-sync';

export default function greeting(userName) {
    const name = readlineSync.question('May I have your name? ');
    return 'Hello, ' + name + '!';
}