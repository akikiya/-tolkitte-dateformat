# @tolkitte/dateformat

## Overview

[![NPM version](https://img.shields.io/npm/v/@tolkitte/dateformat)][npm-url]
[![NPM license](https://img.shields.io/npm/l/@tolkitte/dateformat)][npm-url]
[![NPM bundle size](https://img.shields.io/bundlephobia/minzip/@tolkitte/dateformat)][npm-url]

[Here][npm-url] is a date formatting library for Node.js and browsers.
## Install

```bash
npm install @tolkitte/dateformat
```

## Usage

```js
import format from '@tolkitte/dateformat';

const date = new Date() // Suppose it is 13:00:00.000 on December 12, 2023
console.log(format(date, "datetime"))    // 2023-12-12 13:00:00
console.log(format(date, "date"))        // 2023-12-12
console.log(format(date, "time"))        // 13:00:00
console.log(format(date, "yyyy/MM/dd"))  // 2023/12/12
console.log(format(date, dateInfo => dateInfo.SSS))   // 000
```

[npm-url]: https://www.npmjs.com/package/@tolkitte/dateformat
