#!/usr/bin/env node

import cli from '../lib/cli.js';

const onError = (e) => console.log(e.message);

cli().catch(onError);
