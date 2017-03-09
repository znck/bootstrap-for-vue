const path = require('path')
const dirs = {
  project: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  scss: path.resolve(__dirname, '../dist/scss')
}

const CleanCSS = require('clean-css')
const { write } = require('./utils')
const { name } = require('../package.json')
const vue = {
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
}

const buble = {
  objectAssign: 'Object.assign'
}

const external = ['sifter', 'vue-clickaway', 'lodash.debounce']

module.exports = {
  dirs,
  vue,
  buble,
  external
}