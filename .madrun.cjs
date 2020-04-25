'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'coverage': () => `c8 ${run('test')}`,
    'lint': () => 'putout lib test .madrun.cjs',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test'),
    'watch:lint': () => run('watcher', '\'npm run lint\''),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:coverage:base': () => run('watcher', 'nyc npm test'),
    'watch:coverage:tape': () => run('watcher', 'nyc tape'),
    'watch:coverage': () => 'bin/redrun.js watch:coverage:base',
};

