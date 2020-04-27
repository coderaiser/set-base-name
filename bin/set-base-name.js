#!/usr/bin/env node

'use strict';

const multi = require('../lib/multi');

const onError = (e) => console.log(e.message);
const [pattern, namePattern] = process.argv.slice(2);

multi(pattern, namePattern)
    .catch(onError);

