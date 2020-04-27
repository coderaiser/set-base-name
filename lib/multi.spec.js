'use strict';

const fs = require('fs');

const test = require('supertape');
const mockRequire = require('mock-require');
const stub = require('@cloudcmd/stub');

const {reRequire, stopAll} = mockRequire;

test('set-base-name: multi: glob', async (t) => {
    const sync = stub().returns([]);
    mockRequire('glob', {
        sync,
    });
    
    const multi = reRequire('./multi');
    await multi('index', '*.js');
    
    stopAll();
    
    t.ok(sync.calledWith('*.js'));
    t.end();
});

test('set-base-name: multi: fs', async (t) => {
    const renameStub = stub();
    const {rename} = fs.promises;
    
    fs.promises.rename = renameStub;
    
    const multi = reRequire('./multi');
    await multi('hello', '*.js');
    
    fs.promises.rename = rename;
    
    t.ok(renameStub.calledWith('index.js', 'hello.js'));
    t.end();
});

