import {run} from 'madrun';

const NODE_OPTIONS = `'--loader mock-import'`;

export default {
    'test:base': () => `tape 'test/**/*.js' 'lib/**/*.spec.js'`,
    'test': () => run('test:base', '', {
        NODE_OPTIONS,
    }),
    'coverage:base': async () => `c8 --exclude=lib/*.spec.js ${await run('test:base')}`,
    'coverage': async () => run('coverage:base', '', {
        NODE_OPTIONS,
    }),
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test:base', {
        NODE_OPTIONS,
    }),
};

