import {rename} from 'fs/promises';
import glob from 'glob';
import setname from './setname.js';

export default async () => {
    const [pattern, namePattern] = process.argv.slice(2);
    console.log(pattern, namePattern);
    
    if (!pattern)
        throw Error('base name pattern cannot be empty');
    
    if (!namePattern)
        throw Error('name pattern cannot be empty');
     
    for (const from of glob.sync(namePattern)) {
        console.log(':::', from);
        const to = setname(pattern, from);
        await rename(from, to);
    }
}

