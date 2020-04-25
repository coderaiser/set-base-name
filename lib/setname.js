import {extname} from 'path';

export default function rename(base, str) {
    const name = getBase(str);
    return str.replace(name, base);
}

function getBase(name) {
    let ext = '';
    
    while (ext = extname(name)) {
        name = name.replace(RegExp(`${ext}$`, ''), '');
    }
    
    return name;
}

