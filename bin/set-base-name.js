#!/usr/bin/env node

import multi from '../lib/multi.js';

const onError = (e) => console.log(e.message);
const [pattern, namePattern] = process.argv.slice(2);

multi(pattern, namePattern)
    .catch(onError);

