import test from 'supertape';
import {createMockImport} from 'mock-import';
import stub from '@cloudcmd/stub';
import tryToCatch from 'try-to-catch';

const {
    reImportDefault,
    mockImport,
    stopAll,
} = createMockImport(import.meta.url);

test('set-base-name: multi: glob', async (t) => {
    const sync = stub().returns([]);
    
    mockImport('glob', {
        sync,
    });
    
    const multi = await reImportDefault('./multi.js');
    await multi('index', '*.js');
    
    stopAll();
    
    t.ok(sync.calledWith('*.js'));
    t.end();
});

test('set-base-name: multi: fs', async (t) => {
    const rename = stub();
    const sync = stub().returns(['index.js']);
    
    mockImport('glob', {
        sync,
    });
    
    mockImport('fs/promises', {
        rename,
    });
    
    const multi = await reImportDefault('./multi');
    await multi('hello', '*.js');
    
    stopAll();
    
    t.ok(rename.calledWith('index.js', 'hello.js'));
    t.end();
});

test('set-base-name: multi: no base name', async (t) => {
    const multi = await reImportDefault('./multi.js');
    const [error] = await tryToCatch(multi);
    
    t.equal(error.message, 'base name cannot be empty');
    t.end();
});

test('set-base-name: multi: no pattern', async (t) => {
    const multi = await reImportDefault('./multi.js');
    const [error] = await tryToCatch(multi, 'hello');
    
    t.equal(error.message, 'name pattern cannot be empty');
    t.end();
});

