# ACR eslint config

ACR recommended typescript + prettier + eslint rules based off a strict ruleset, specifically:
- [plugin:prettier/recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts).
- [plugin:@typescript-eslint/strict-type-checked](https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js)

Because eslint is [annoying to configure](https://github.com/eslint/eslint/discussions/20500), this pacakge aims to provide some sane defaults without all the fiddly bits.

<!-- npx doctoc --github readme.md -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Install](#install)
- [Usage](#usage)
  - [Configure](#configure)
  - [Run](#run)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
npm install --save-dev @acrontum/eslint-config
```


## Usage


### Configure

Version 2+ supports only flat config:

```ts
// eslint.config.mjs
import acrLint from '@acrontum/eslint-config';
import { defineConfig } from "eslint/config";

export default defineConfig(
  // your rules here
  acrLint,
  // or here, if you think you're more special
);
```

For angular (also `npm i -D angular-eslint`:
```ts
// eslint.config.mjs
import acrLint from '@acrontum/eslint-config/angular-recommended.mjs';
import { defineConfig } from "eslint/config";

export default defineConfig(
  // your rules here
  acrLint,
  // or here, if you think you're more special
);
```

### Run

```bash
npx eslint src
```
