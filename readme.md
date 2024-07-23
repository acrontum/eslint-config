# ACR eslint config

ACR recommended typescript + prettier + eslint rules based off a strict ruleset.

<!--
to regen:
  npx doctoc --github readme.md

then manually remove %5C from the routes
-->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Install](#install)
- [Usage](#usage)
  - [Configure](#configure)
  - [Run](#run)
  - [Running the new flat config (mjs) mode in a cjs project](#running-the-new-flat-config-mjs-mode-in-a-cjs-project)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
npm install --save-dev @acrontum/eslint-config
```


## Usage


### Configure

for eslint versions below 9 (aka legacy):

```js
// eslint.config.js
module.exports = {
  extends: ['@acrontum/eslint-config/legacy']
}
```

for eslint 9+ (aka why did they do this):

```ts
// eslint.config.js or eslint.config.mjs for compat
import { default as acrLint } from '@acrontum/eslint-config';

export default [
  // your rules here
  ...acrLint,
  // or here, if you think you're more special
];
```


### Run

```bash
npx eslint -c eslint.config.js 'src/**/*.ts'
```


### Running the new flat config (mjs) mode in a cjs project

For certain older eslint versions, the env flag `ESLINT_USE_FLAT_CONFIG=true` is required. Try without first, probably.  
Also make sure to name it `eslint.config.mjs`.  

```bash
ESLINT_USE_FLAT_CONFIG=true npx eslint -c eslint.config.mjs 'src/**/*.ts'
```
