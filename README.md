# @tolkitte/dateformat

## Overview

[![NPM version](https://img.shields.io/npm/v/@tolkitte/dateformat)][npm-url]
[![NPM license](https://img.shields.io/npm/l/@tolkitte/dateformat)][npm-url]
[![NPM bundle size](https://img.shields.io/bundlephobia/minzip/@tolkitte/dateformat)][npm-url]

[Here][npm-url] is a date formatting library for Node.js and browsers.

## Installation

```bash
npm install @tolkitte/dateformat
```

## Usage

```typescript
import format from "@tolkitte/dateformat";

interface DateInfo {
  /**
   * the year as "2023", "2024", etc
   */
  yyyy: string;
  /**
   * the year as "23", "24", etc
   */
  yy: string;
  /**
   * the month as "01", "02", ..., "12"
   */
  MM: string;
  /**
   * the month as "1", "2", ..., "12"
   */
  M: string;
  //
  /**
   * the day as "01", "02", ..., "31"
   */
  dd: string;
  /**
   * the day as "1", "2", ..., "31"
   */
  d: string;
  /**
   * the hour (24-hour clock) as "00", "01", ..., "23"
   */
  HH: string;
  /**
   * the hour (24-hour clock) as "0", "1", ..., "23"
   */
  H: string;
  /**
   * "am" or "pm"
   */
  a: "am" | "pm";
  /**
   * the hour (12-hour clock) as "01", "02", ..., "12"
   */
  hh: string;
  /**
   * the hour (12-hour clock) as "1", "2", ..., "12"
   */
  h: string;
  /**
   * the minute as "00", "01", ..., "59"
   */
  mm: string;
  /**
   * the minute as "0", "1", ..., "59"
   */
  m: string;
  /**
   * the second as "00", "01", ..., "59"
   */
  ss: string;
  /**
   * the second as "0", "1", ..., "59"
   */
  s: string;
  /**
   * the millisecond as "000", "001", ..., "999"
   */
  SSS: string;
}

const date = new Date(); // Suppose it is 13:00:00.000 on December 12, 2023
console.log(format(date, "datetime")); // 2023-12-12 13:00:00
console.log(format(date, "date")); // 2023-12-12
console.log(format(date, "time")); // 13:00:00
console.log(format(date, "yyyy/MM/dd")); // 2023/12/12
console.log(format(date, (dateInfo: DateInfo) => dateInfo.SSS)); // 000
```

[npm-url]: https://www.npmjs.com/package/@tolkitte/dateformat
