#!/usr/bin/env node
import askName from '..';
import playEven from '../games/even-game';

console.log('\nWelcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const name = askName();
console.log(`Hello, ${name}!\n`);

playEven(name);
