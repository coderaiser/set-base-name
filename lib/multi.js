'use strict';

const {rename} = require('fs/promises');

const glob = require('glob');
const setBaseName = require('./set-base-name');

module.exports = async (pattern, namePattern) => {
    if (!pattern)
        throw Error('base name cannot be empty');
    
    if (!namePattern)
        throw Error('name pattern cannot be empty');
    
    for (const from of glob.sync(namePattern)) {
        const to = setBaseName(pattern, from);
        await rename(from, to);
    }
};

