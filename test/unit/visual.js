import 'style-loader!css-loader!mocha-css'
import 'style-loader!css-loader!sass-loader!./helpers/style.scss'

// create a div where mocha can add its stuff
const mochaDiv = document.createElement('DIV')
mochaDiv.id = 'mocha'
document.body.appendChild(mochaDiv)

window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
require('bootstrap')

import 'mocha/mocha.js'
import chai from 'chai'
import chaiDOM from 'chai-dom'
window.mocha.setup('bdd')
chai.use(chaiDOM)
chai.should()
window.expect = chai.expect

beforeEach(function () {
  this.DOM = document.createElement('div')
  this.DOM.id = `test-${Math.floor(Math.random() * 1000000000)}`

  document.body.appendChild(this.DOM)
})

afterEach(function () {
  const tests = document.querySelectorAll('.test')
  const test = tests[tests.length - 1]

  if (!test) return

  const el = document.querySelector(`#${this.DOM.id}`)

  test.appendChild(el)
})

const specsContext = require.context('./specs', true)
specsContext.keys().forEach(specsContext)

// window.mocha.checkLeaks()
window.mocha.run()
