# UIKit

[![npm](https://img.shields.io/npm/v/uikit.svg)](https://www.npmjs.com/package/uikit) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Bootstrap UI for Vue

## Installation

```bash
npm install --save uikit
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import UIKit from 'uikit'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'uikit/dist/uikit.css'

Vue.use(UIKit)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="uikit/dist/uikit.css"></link>
<script src="uikit/dist/uikit.js"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
