'use strict';

const test = require('supertape');
const tryCatch = require('try-catch');
const setBaseName = require('./set-base-name.js');

test('set-base-name', (t) => {
    const result = setBaseName('index', 'hello.spec.js');
    const expected = 'index.spec.js';
    
    t.equal(result, expected);
    t.end();
});

test('set-base-name: no args', (t) => {
    const [error] = tryCatch(setBaseName);
    
    t.equal(error.message, 'base could not be empty');
    t.end();
});

test('set-base-name: no name', (t) => {
    const [error] = tryCatch(setBaseName, 'index');
    
    t.equal(error.message, 'name could not be empty');
    t.end();
});

test('set-base-name: one level deep', (t) => {
    const result = setBaseName('index', 'hello.js');
    const expected = 'index.js';
    
    t.equal(result, expected);
    t.end();
});

