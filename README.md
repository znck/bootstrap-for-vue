# bootstrap-for-vue

[![npm](https://img.shields.io/npm/v/bootstrap-for-vue.svg)](https://www.npmjs.com/package/bootstrap-for-vue) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Bootstrap UI for Vue

## Installation

```bash
npm install --save bootstrap-for-vue
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import bootstrap-for-vue from 'bootstrap-for-vue'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'bootstrap-for-vue/dist/bootstrap-for-vue.css'

Vue.use(bootstrap-for-vue)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="bootstrap-for-vue/dist/bootstrap-for-vue.css"></link>
<script src="bootstrap-for-vue/dist/bootstrap-for-vue.js"></script>
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
