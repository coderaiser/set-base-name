import {rename} from 'fs/promises';

import glob from 'glob';
import setBaseName from './set-base-name.js';

export default async (pattern, namePattern) => {
    if (!pattern)
        throw Error('base name cannot be empty');
    
    if (!namePattern)
        throw Error('name pattern cannot be empty');
    
    for (const from of glob.sync(namePattern)) {
        const to = setBaseName(pattern, from);
        await rename(from, to);
    }
};

