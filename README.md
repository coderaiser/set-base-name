# Set base name [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Set base name of a file keeping extension.

## Install

`npm i set-base-name`

## Usage Example

```sh
> ls
hello.js hello.spec.js

> set-base-name index *.js
> ls
index.js index.spec.js
```

## API

```js
import setBaseName from 'set-base-name';

setBaseName('index', 'hello.js');
// returns
'index.js'

setBaseName('index', 'hello.spec.js');
// returns
'index.spec.js'
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/set-base-name.svg?style=flat
[BuildStatusIMGURL]:        https://travis-ci.com/coderaiser/set-base-name.svg?branch=master
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/set-base-name.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/set-base-name "npm"
[BuildStatusURL]:           https://travis-ci.com/coderaiser/set-base-name  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/set-base-name "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/set-base-name?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/set-base-name/badge.svg?branch=master&service=github
