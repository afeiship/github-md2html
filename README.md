# github-md2html
> Convert Markdown to HTML effortlessly with github-md2html.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/github-md2html
```

## usage
```js
import md2html from '@jswork/github-md2html';

const mdstr = fs.readFileSync('Hello **world**');
const html = md2html(mdstr);
// <p>Hello <strong>world</strong></p>
```

## license
Code released under [the MIT license](https://github.com/afeiship/github-md2html/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/github-md2html
[version-url]: https://npmjs.org/package/@jswork/github-md2html

[license-image]: https://img.shields.io/npm/l/@jswork/github-md2html
[license-url]: https://github.com/afeiship/github-md2html/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/github-md2html
[size-url]: https://github.com/afeiship/github-md2html/blob/master/dist/github-md2html.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/github-md2html
[download-url]: https://www.npmjs.com/package/@jswork/github-md2html
