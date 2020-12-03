import {extname} from 'path';

export default function setBaseName(base, name) {
    check(base, name);
    
    const oldBase = getBase(name);
    return name.replace(oldBase, base);
}

function getBase(name) {
    let ext = '';
    
    while (ext = extname(name)) {
        name = name.replace(RegExp(`${ext}$`, ''), '');
    }
    
    return name;
}

function check(base, name) {
    if (!base)
        throw Error('base could not be empty');
    
    if (!name)
        throw Error('name could not be empty');
}
