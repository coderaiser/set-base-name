import {join, dirname} from 'path';

import runsome from 'runsome';
import test from 'supertape';

const __dirname = dirname(import.meta.url).replace('file:/', '');
const cli = join(__dirname, '..', 'bin', 'set-base-name.js');
const run = runsome(cli);

test('set-base-name-cli: no base', (t) => {
    const result = run('');
    
    t.equal(result, 'base name cannot be empty');
    t.end();
});

test('set-base-name-cli: no pattern', (t) => {
    const result = run('hello');
    
    t.equal(result, 'name pattern cannot be empty');
    t.end();
});
