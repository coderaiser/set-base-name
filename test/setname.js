import test from 'supertape';
import rename from '../lib/setname.js';

test('setname', (t) => {
    const result = rename('index', 'hello.spec.js');
    const expected = 'index.spec.js';
    
    t.equal(result, expected);
    t.end();
});

test('setname: one level deep', (t) => {
    const result = rename('index', 'hello.js');
    const expected = 'index.js';
    
    t.equal(result, expected);
    t.end();
});

