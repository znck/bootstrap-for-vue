const rollup = require('rollup').rollup
const vue = require('rollup-plugin-vue')
const json = require('rollup-plugin-json')
const buble = require('rollup-plugin-buble')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('uglify-js')
const { version, author, name } = require('../package.json')
const config = require('./config')

// remove the email at the end
const authorName = author.replace(/\s+<.*/, '')

const { logError, write } = require('./utils')

const banner =
    '/*!\n' +
    ` * ${name} v${version}\n` +
    ` * (c) ${new Date().getFullYear()} ${authorName}\n` +
    ' * Released under the MIT License.\n' +
    ' */'

rollup({
  entry: 'src/index.js',
  plugins: [
    json(),
    vue(config.vue),
    buble(config.buble)
  ],
  external: config.external
})
    .then(function (bundle) {
      const es = bundle.generate({
        format: 'es'
      }).code

      write(`dist/${name}.esm.js`, es)
    })
    .catch(logError)

config.vue.css = false // Don't export CSS now!

rollup({
  entry: 'src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    json(),
    vue(config.vue),
    buble(config.buble),
  ],
  globals: {
    'sifter': 'Sifter',
    'vue-clickaway': 'clickaway',
    'lodash.debounce': 'debounce',
  }
})
    .then(function (bundle) {
      const code = bundle.generate({
        format: 'iife',
        exports: 'named',
        banner: banner,
        moduleName: name
      }).code

      write(`dist/${name}.js`, code)

      return code
    })
    .then(function (code) {
      const minimized = uglify.minify(code, {
        fromString: true,
        output: {
          preamble: banner,
          ascii_only: true // eslint-disable-line camelcase
        }
      }).code
      write(`dist/${name}.min.js`, minimized)
    })

const entries = ['components.js', 'directives.js', 'mixins.js']
entries.forEach(entry => {
  rollup({
    entry: `src/${entry}`,
    plugins: [vue(config.vue), buble(config.buble)],
    external: config.external
  })
      .then(bundle => {
        const es = bundle.generate({
          format: 'es'
        }).code

        write(`dist/${entry}`, es)
      })
})
