const rollup = require('rollup').rollup
const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('uglify-js')
const CleanCSS = require('clean-css')
const packageData = require('../package.json')
const { version, author, name } = packageData

// remove the email at the end
const authorName = author.replace(/\s+<.*/, '')

const path = require('path')
const dirs = {
  project: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  scss: path.resolve(__dirname, '../dist/scss')
}

const {
    logError,
    write
} = require('./utils')

const banner =
    '/*!\n' +
    ` * ${name} v${version}\n` +
    ` * (c) ${new Date().getFullYear()} ${authorName}\n` +
    ' * Released under the MIT License.\n' +
    ' */'

rollup({
  entry: 'src/index.js',
  plugins: [
    vue({
      compileTemplate: true,
      cssModules: {
        generateScopedName: 'bootstrap-for-vue-[name]-[local]'
      },
      css (_, styles) {
        let combine = ''
        const result = styles.map(style => {
          const filename = style.id.replace(dirs.src, '').replace(/\.vue$/i, '.scss').replace(/^\//, '')

          combine += '@import ' + JSON.stringify(filename.replace(/\.scss$/i, '')) + ';\n'

          write(path.resolve(dirs.scss, filename), style.code.trim())

          return style.$compiled.code
        }).join('\n')

        write(path.resolve(dirs.scss, `${name}.scss`), combine)
        write(path.resolve(dirs.dist, `${name}.css`), result)
        write(path.resolve(dirs.dist, `${name}.min.css`), new CleanCSS().minify(result).styles)
      }
    }),
    buble({
      objectAssign: 'Object.assign'
    })
  ]
}).then(function (bundle) {
  var es = bundle.generate({
    format: 'es'
  }).code

  write(`dist/${name}.js`, es)

  var code = bundle.generate({
    format: 'umd',
    exports: 'named',
    banner: banner,
    moduleName: name
  }).code

  write(`dist/${name}.umd.js`, code)

  return code
}).then(function (code) {
  var minified = uglify.minify(code, {
    fromString: true,
    output: {
      preamble: banner,
      ascii_only: true
    }
  }).code
  write(`dist/${name}.umd.min.js`, minified)
}).catch(logError)
