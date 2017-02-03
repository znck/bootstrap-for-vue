const fs = require('fs')
const path = require('path')

const { blue } = require('./log.js')

function mkdir (filename) {
  const dir = path.dirname(filename)

  if (!fs.existsSync(filename)) {
    mkdir(dir)
    fs.mkdir(dir)
  }

  return filename
}

function write (dest, code) {
  mkdir(dest)

  fs.writeFileSync(dest, code)

  const out = dest.replace(path.resolve(__dirname, '../../') + '/', '')

  console.log(`${blue(out)} ${getSize(code)}`)
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

module.exports = write
