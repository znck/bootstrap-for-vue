---
sidebar: false
---

<div class="text-xs-center" align="center" style="margin: 20px">
  <img src="./assets/images/logo.png" height="255">
</div>

<div style="text-align: center">
  [![npm](https://img.shields.io/npm/v/bootstrap-for-vue.svg)](https://www.npmjs.com/package/bootstrap-for-vue)
  [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
</div>

## Introduction
**Bootstrap for Vue** is collection of bootstrap 4 based reusable components. It is used by 
[Vue Issue](https://new-issue.vuejs.org) and [Zero](https://zero.institute).
 
It would always support [Vue InterOp](https://github.com/znck/vue-interop) standards.

## Installation
```bash
# Using yarn
yarn add bootstrap-for-vue

# or using npm
npm install bootstrap-for-vue

```

## Usage

#### In browser

```html
<!--In Head-->
<link rel="stylesheet" href="//unpkg.com/bootstrap-for-vue/dist/bootstrap-for-vue.min.css">

<!--After Vue script tag-->
<script src="//unpkg.com/bootstrap-for-vue/dist/bootstrap-for-vue.min.js"></script>
```

#### With webpack/rollup

```js
import Vue from 'vue'
import VueBootstrap from 'bootstrap-for-vue'
// You can import styles in js too.
import 'bootstrap-for-vue/dist/bootstrap-for-vue.scss'
// or
import 'bootstrap-for-vue/dist/bootstrap-for-vue.css' 

Vue.use(VueBootstrap)
```

**Including styles** using scss. You can override all variables too.
```scss
@import '~bootstrap-for-vue/dist/bootstrap-for-vue';
// or
@import './node_modules/bootstrap-for-vue/dist/bootstrap-for-vue';
```

**Including styles** with style tag in single file component (.vue file).
```vue
<style src="./node_modules/bootstrap-for-vue/dist/bootstrap-for-vue.css"></style>
```
