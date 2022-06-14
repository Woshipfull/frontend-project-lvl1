#!/usr/bin/env node

import addUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = addUserName();
console.log(`Hello, ${userName}!`);
